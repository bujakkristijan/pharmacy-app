import React, { useState } from 'react'
import ProductService from '../../../services/ProductService';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import './CreateProductComponent.css';
import { useNavigate } from 'react-router-dom';
import AlertService from '../../../services/AlertService';

const CreateProductComponent = (props) => {
  const setProductList = props.setProductList;
  const productList = props.productList;
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [manufacturer, setManufacturer] = useState({id: "m1", name: "Manufacturer 1"});
  const [expiryDate, setExpiryDate] = useState(new Date());

  // const [manufacturers, setManufacturers] = useState(JSON.parse(localStorage.getItem("manufacturersList")) || []);
  const [manufacturers, setManufacturers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setManufacturers(ProductService.getManufacturers());
  }, [])
  

  const createProduct = () =>{
    console.log("exp date" + expiryDate);
    console.log("new date" + new Date());
    if(id.trim() === "" || name.trim() === "" || isNaN(parseInt(price)) || parseInt(price) <= 0 || manufacturer == undefined || new Date(expiryDate) < new Date()){
      AlertService.alertFail("Invalid input, try again! Make sure that date is not in the past and price is valid as well!");
    }
    else if(checkIfIdExist() === true){
      AlertService.alertFail("ID already exists, try another one!");
    }
    else{
      const newProduct = {id: id, name: name, manufacturer: manufacturer, price: price, expiryDate, expiryDate}
      setProductList([...productList, newProduct]);
      AlertService.alertSuccess("Successfully added product!")
      setTimeout(()=>navigateToListProduct(), 1500);
      // ProductService.addProduct(newProduct);
      
    }
  }

  const checkIfIdExist = () =>{
    let existFlag = false;
    for(let i=0; i<productList.length; i++){
      if(id === productList[i].id){
        existFlag = true;
      }
    }
    return existFlag;
  }

  const navigateToListProduct = () =>{
    navigate("/list-product");
  }
  
  return (
    <div className='create-product-container'>
        <div className='title'>Create new product</div>
        <div className='info-container'>
            <label className='item-label'>ID: </label>
            <input value={id} className='form-control' type='text' onChange={(e) => setId(e.target.value)}></input>
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
          <Form.Select onChange={(e)=>setManufacturer(JSON.parse(e.target.value))}>
                    {manufacturers.map((manufact)=> {
                      return (
                        <option key={manufact.id} value={JSON.stringify(manufact)} >{manufact.name}</option>
                      )
                    })}             
            </Form.Select>
        </div>
        
        <div className='btn-container'>
            <button className='btn-create-product' onClick={createProduct}>Submit</button>
        </div>
      
    </div>
  )
}

export default CreateProductComponent