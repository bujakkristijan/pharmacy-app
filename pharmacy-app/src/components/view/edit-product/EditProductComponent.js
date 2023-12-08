import React from 'react'
import ProductService from '../../../services/ProductService';
import AlertService from '../../../services/AlertService';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditProductComponent = () => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: 1,
    manufacturer: null,
    expiryDate: new Date(),
  });
  const {id} = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [manufacturer, setManufacturer] = useState(undefined);
  const [expiryDate, setExpiryDate] = useState(new Date());
  // const [manufacturers, setManufacturers] = useState(JSON.parse(localStorage.getItem("manufacturersList")) || []);
  const [manufacturers, setManufacturers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // nije mi jasno zasto mora promise da vraca, jedino tako radi
        // i bez promise-a ispise u console.log fetchedProduct dobro, ali kao da setProduct ne setuje dobro,
        // mada ni ne udje u else uopste, trebalo bi da radi i bez promise-a - PROVERITI POSLE ZASTO TAKO MORA
        const fetchedProduct = await ProductService.getProductById(id);
        if (fetchedProduct) {
          console.log("FETCHED PRODUCT" + JSON.stringify(fetchedProduct));
          setProduct(fetchedProduct);
        } else {
          AlertService.alertFail('Product not found');
          navigate('/list-product');
        }
        setManufacturers(ProductService.getManufacturers());
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    fetchProduct();
  }, [id, navigate]);
  
  const navigateToListProduct = () =>{
    navigate("/list-product");
  }

  const updateProduct = (product) =>{

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
            <input value={product.name} className='form-control' type='text' onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className='info-container'>
            <label className='item-label'>Price: </label>
            <input value={product.price} className='form-control' type='number'  onChange={(e) => setPrice(e.target.value)}></input>
        </div>
        <div className='info-container'>
            <label className='item-label'>Expiry date: </label>
            <input value={product.expiryDate} className='form-control' type='date'  onChange={(e) => setExpiryDate(e.target.value)}></input>
        </div>
        <div className='info-container'>
          <label className='item-label'>Manufacturer: </label>
          <Form.Select value={JSON.stringify(product.manufacturer)} onChange={(e)=>setManufacturer(JSON.parse(e.target.value))}>
                    {manufacturers.map((manufact)=> {
                      return (
                        <option key={manufact.id} value={JSON.stringify(manufact)} >{manufact.name}</option>
                      )
                    })}             
            </Form.Select>
        </div>
        
        <div className='btn-container'>
            <button className='btn-create-product' onClick={() => updateProduct(product)}>Submit</button>
        </div>
      
    </div>
  )
}

export default EditProductComponent