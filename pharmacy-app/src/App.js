import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProductComponent from './components/view/list-product/ListProductComponent';
import CreateProductComponent from './components/view/create-product/CreateProductComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import EditProductComponent from './components/view/edit-product/EditProductComponent';
import SideNavbarComponent from './components/side-nav/SideNavbarComponent';
import AboutApplicationComponent from './components/about/AboutApplicationComponent';
import { useState, useEffect } from 'react';
import ProductService from './services/ProductService';

function App() {

  const [productList, setProductList] = useState(JSON.parse(localStorage.getItem('productList')) || []);
  const [manufacturerList, setManufacturerList] = useState([]);

  useEffect(() => {
    if(localStorage.getItem("isInitialized")==="true"){
      setProductList(ProductService.getProducts());
    }
    else{
      ProductService.initializeProducts();
      setProductList(ProductService.getProducts());
    }
  }, []);
  
  // nzm zasto ovako nece, a trebalo bi da radi kada se posalje kao props create product komponenti, umesto toga saljem posebno
  // setProductList i productList
  const addProductToList = (newProduct) => {
    setProductList([...productList, newProduct]);
  }

  return (
    <Router>
      <div className='main-app-component'>
        <div className='navbar-container'>
          <NavbarComponent/>
        </div>
        <div className='view-and-side-navbar-container'>
            <div className='side-navbar-container'>
                <SideNavbarComponent/>
            </div>
            <div className='view-components-container'>
              <Routes>
                  <Route path='/' element={<ListProductComponent productList = {productList} setProductList = {setProductList}></ListProductComponent>}></Route>
                  <Route path='/list-product' element={<ListProductComponent setProductList = {setProductList} productList = {productList}></ListProductComponent>}></Route>
                  <Route path='/create-product' element={<CreateProductComponent setProductList={setProductList} productList = {productList}></CreateProductComponent>}></Route>
                  <Route path='/edit-product/:id' element={<EditProductComponent setProductList={setProductList} productList = {productList}></EditProductComponent>}></Route>
                  <Route path='/about' element={<AboutApplicationComponent></AboutApplicationComponent>}></Route>
              </Routes>
            </div>
        </div>

    </div>
    </Router>
  );
}

export default App;
