import React from 'react'
import ProductService from '../../../services/ProductService';
import AlertService from '../../../services/AlertService';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditProductComponent = (props) => {
  const setProductList = props.setProductList;
  const productList = props.productList;

  const {id} = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [manufacturer, setManufacturer] = useState(undefined);
  const [expiryDate, setExpiryDate] = useState(new Date());
  // const [manufacturers, setManufacturers] = useState(JSON.parse(localStorage.getItem("manufacturersList")) || []);
  const [manufacturers, setManufacturers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getManfacturers();
    fetchProduct();
    getProductList();
  }, []);

  const fetchProduct = async () => {
    try {
      // nije mi jasno zasto mora promise da vraca, jedino tako radi
      // i bez promise-a ispise u console.log fetchedProduct dobro, ali kao da setProduct ne setuje dobro,
      // mada ni ne udje u else uopste, trebalo bi da radi i bez promise-a - PROVERITI POSLE ZASTO TAKO MORA
      const fetchedProduct = await ProductService.getProductById(id);
      if (fetchedProduct) {
        console.log("FETCHED PRODUCT" + JSON.stringify(fetchedProduct));
        setName(fetchedProduct.name);
        setPrice(fetchedProduct.price);
        setManufacturer(fetchedProduct.manufacturer);
        setExpiryDate(fetchedProduct.expiryDate);
        // setProduct(fetchedProduct);
      } else {
        AlertService.alertFail('Product not found');
        navigate('/list-product');
      }
      
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const getManfacturers = () =>{
    setManufacturers(ProductService.getManufacturers());
  }

  const getProductList = () =>{
    setProductList(ProductService.getProducts());
  }
  
  const navigateToListProduct = () =>{
    navigate("/list-product");
  }
  const updateProduct = () => {

    if(name.trim() === "" || isNaN(parseInt(price)) || parseInt(price) <= 0 || manufacturer == undefined || new Date(expiryDate) < new Date()){
      AlertService.alertFail("Invalid input, try again! Make sure that date is not in the past and price is valid as well!");
    }
    else{
      const updatedProduct = {id: id, name: name, manufacturer: manufacturer, price: price, expiryDate: expiryDate};
      const productIndex = productList.findIndex((p) => p.id === id);
      editProduct(updatedProduct, productIndex);
      ProductService.saveProducts(productList.map((p, index) => productIndex === index ? updatedProduct : p));
      AlertService.alertSuccess("Succesfully edited product!");
      setTimeout(() =>navigateToListProduct(), 1500);
    }
   
  };

  const editProduct = (product, productIndex) =>{
    setProductList(productList.map((p, index) => productIndex === index ? product : p));
}
  
  return (
    <div className='create-product-container'>
        <div className='title'>Edit product</div>
        <div className='info-container'>
            <label className='item-label'>ID: </label>
            <input value={id} className='form-control' type='text' disabled={true}></input>
        </div>
        <div className='info-container'>
            <label className='item-label'>Name: </label>
            <input value={name} className='form-control' type='text' onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className='info-container'>
            <label className='item-label'>Price: </label>
            <input value={price} className='form-control' type='number'  onChange={(e) => setPrice(e.target.value)}></input>
        </div>
        <div className='info-container'>
            <label className='item-label'>Expiry date: </label>
            <input value={expiryDate} className='form-control' type='date'  onChange={(e) => setExpiryDate(e.target.value)}></input>
        </div>
        <div className='info-container'>
          <label className='item-label'>Manufacturer: </label>
          <Form.Select value={JSON.stringify(manufacturer)} onChange={(e)=>setManufacturer(JSON.parse(e.target.value))}>
                    {manufacturers.map((manufact)=> {
                      return (
                        <option key={manufact.id} value={JSON.stringify(manufact)} >{manufact.name}</option>
                      )
                    })}             
            </Form.Select>
        </div>
        
        <div className='btn-container'>
            <button className='btn-create-product' onClick={() => updateProduct()}>Submit</button>
        </div>
      
    </div>
  )
}

export default EditProductComponent