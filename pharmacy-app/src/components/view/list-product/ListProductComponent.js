import React from 'react'
import './ListProductComponent.css';

const ListProductComponent = (props) => {
  const productList = props.productList;
  return (
    <div>
      {productList.length ===0 && <h1 className='text-center'>List is empty</h1>}
      {productList.length !==0 && <h1 className='text-center'>Product list</h1>}
      {productList.length !==0 && <table id="table" className='table table-hover'> 
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
            </table>
        }   
    </div>
  )
}

export default ListProductComponent