import React from 'react'
import './ListProductComponent.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ProductService from '../../../services/ProductService';

const ListProductComponent = (props) => {
  const productList = props.productList;
  const navigate = useNavigate();

  const navigateToCreateProduct = () =>{
    navigate('/create-product');
  }

  useEffect(() => {
    console.log(JSON.stringify(productList));
    ProductService.getProducts();
  }, [])
  

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
                        <th className='theadth'>Price</th>
                        <th className='theadth'>Expiry date</th>
                        {/* <th className='theadth'>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {productList.map(
                      product =>
                        <tr key= {product.id}>
                        <td className="td-content">{product.id}</td>
                        <td className="td-content">{product.name}</td>
                        <td className="td-content">{product.manufacturer.name}</td>
                        <td className="td-content">{product.price}</td>
                        <td className="td-content">{product.expiryDate}</td>
                        
                        {/* <td>
                            <Link className='btn btn-success' to={`/edit-product/${product.id}`}>Update</Link>
                            <button className='btn btn-danger' onClick={() => alertAreYouSureDelete(product.id)}
                            style={{marginLeft:"5px"}}>Delete</button>
                        </td>                         */}
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