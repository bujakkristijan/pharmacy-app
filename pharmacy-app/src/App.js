import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProductComponent from './components/view/list-product/ListProductComponent';
import CreateProductComponent from './components/view/create-product/CreateProductComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import EditProductComponent from './components/view/edit-product/EditProductComponent';
import SideNavbarComponent from './components/side-nav/SideNavbarComponent';
import AboutApplicationComponent from './components/about/AboutApplicationComponent';

function App() {
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
                  <Route path='/' element={<ListProductComponent></ListProductComponent>}></Route>
                  <Route path='/list-product' element={<ListProductComponent></ListProductComponent>}></Route>
                  <Route path='/create-product' element={<CreateProductComponent></CreateProductComponent>}></Route>
                  <Route path='/edit-product/:id' element={<EditProductComponent></EditProductComponent>}></Route>
                  <Route path='/about' element={<AboutApplicationComponent></AboutApplicationComponent>}></Route>
              </Routes>
            </div>
        </div>

    </div>
    </Router>
  );
}

export default App;
