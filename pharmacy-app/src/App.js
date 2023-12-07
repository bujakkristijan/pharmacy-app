import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProductComponent from './components/view/list-product/ListProductComponent';
import CreateProductComponent from './components/view/create-product/CreateProductComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import EditProductComponent from './components/view/edit-product/EditProductComponent';
import SideNavbarComponent from './components/side-nav/SideNavbarComponent';

function App() {
  return (
    <Router>
      <div className='main-app-component'>
        <NavbarComponent/>
        <SideNavbarComponent/>
        <div className='view-components'>
          <Routes>
              <Route path='/' element={<ListProductComponent></ListProductComponent>}></Route>
              <Route path='/list-product' element={<ListProductComponent></ListProductComponent>}></Route>
              <Route path='/create-product' element={<CreateProductComponent></CreateProductComponent>}></Route>
              <Route path='/edit-product' element={<EditProductComponent></EditProductComponent>}></Route>
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
