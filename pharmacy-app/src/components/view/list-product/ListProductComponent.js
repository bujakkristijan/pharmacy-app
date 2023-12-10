import React from 'react'
import './ListProductComponent.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ProductService from '../../../services/ProductService';
import Swal from 'sweetalert2';
import AlertService from '../../../services/AlertService';

const ListProductComponent = (props) => {
  
  let productList = props.productList;
  const setProductList = props.setProductList;

  const navigate = useNavigate();

  const navigateToCreateProduct = () =>{
    navigate('/create-product');
  }

  const deleteProduct = (index) =>{
    setProductList(productList.filter((product, i) => i !== index));
    ProductService.saveProducts(productList.filter((product, i) => i !== index));
    AlertService.alertSuccess("Succesfully deleted product!");
  }

  useEffect(() => {
    productList = ProductService.getProducts();
  }, [])

  const navigateToEditProductComponent = (product) =>{
    navigate(`/edit-product/${product.id}`);
  }

  const alertAreYouSureDelete = (productId, index) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "If you click yes, product with ID: " + productId + " will be deleted",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(index);
      }
    })
  }
  
  return (
    <div className='list-product-container'>
      {productList && productList.length ===0 && <div className='title'>List is empty</div>}
      {productList && productList.length !==0 && <div className='title'>Product list</div>}
      {productList && productList.length !==0 && <div className='table-container'><table id="table" className='table table-hover'> 
                <thead className='thead-name'>
                    <tr>
                        <th className='theadth'>ID</th>
                        <th className='theadth'>Name</th>
                        <th className='theadth'>Manufacturer</th>
                        <th className='theadth'>Price (EUR)</th>
                        <th className='theadth'>Expiry date</th>
                        <th className='theadth'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map(
                      (product, index) =>
                        <tr key= {product.id}>
                        <td className="td-content">{product.id}</td>
                        <td className="td-content">{product.name}</td>
                        <td className="td-content">{product.manufacturer.name}</td>
                        <td className="td-content">{product.price}</td>
                        <td className="td-content">{product.expiryDate}</td>
                        <td>
                            <button className='btn btn-success' onClick={()=>navigateToEditProductComponent(product)}>Update</button>
                            <button className='btn btn-danger' onClick={() => alertAreYouSureDelete(product.id, index)}
                            style={{marginLeft:"5px"}}>Delete</button>
                        </td>                        
                    </tr>
                        )
                    }
                </tbody>
            </table></div>
        }   
        <div className='btn-container'>
            <button className='btn-create-product' onClick={navigateToCreateProduct}>Create new product</button>
        </div>
       
    </div>
  )
}

export default ListProductComponent