import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProductComponent from './components/view/list-product/ListProductComponent';
import CreateProductComponent from './components/view/create-product/CreateProductComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import EditProductComponent from './components/view/edit-product/EditProductComponent';
import SideNavbarComponent from './components/side-nav/SideNavbarComponent';
import AboutApplicationComponent from './components/about/AboutApplicationComponent';
import { useState, useEffect } from 'react';

function App() {

  const [productList, setProductList] = useState(JSON.parse(localStorage.getItem('productList')) || []);
  const [manufacturerList, setManufacturerList] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let localList = JSON.parse(localStorage.getItem('productList')) || [];
    setProductList(localList);
  }, [])
  

  useEffect(() => {
    if (!isInitialized) {
      initializeProducts();
    }
  }, [isInitialized]);

  const initializeProducts = () => {
    const storedProducts = localStorage.getItem('productList');
    const products = storedProducts ? JSON.parse(storedProducts) : [];

    const storedManufacturers = localStorage.getItem('manufacturerList');
    const manufacturers = storedManufacturers ? JSON.parse(storedManufacturers) : [];

    setProductList(products);
    setManufacturerList(manufacturers);
    setIsInitialized(true);
  };

  // const updateProductList = (newProductList) => {
  //   // Update the product list state and save it to local storage
  //   setProductList(newProductList);
  //   ProductService.saveProducts(newProductList);
  // };

  // nzm zasto ovako nece, a trebalo bi da radi kada se posalje kao props create product komponenti, umesto toga saljem posebno
  // setProductList i productList
  const addProductToList = (newProduct) => {
    setProductList([...productList, newProduct]);
  }

  useEffect(() => {
    localStorage.setItem('productList',JSON.stringify(productList));
  }, [productList])

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
                  <Route path='/' element={<ListProductComponent productList = {productList}></ListProductComponent>}></Route>
                  <Route path='/list-product' element={<ListProductComponent productList = {productList} setProductList = {setProductList}></ListProductComponent>}></Route>
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
