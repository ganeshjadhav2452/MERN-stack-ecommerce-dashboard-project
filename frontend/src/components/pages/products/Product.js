import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleIsChange } from "../../../reduxStore/slices/ProductSlice";
import { Link } from "react-router-dom";
import { updateProductInSlice } from "../../../reduxStore/slices/ProductSlice";
const ProductCard = ({ product }) => {
    const [isDeleteClicked ,setDeleteClick] = useState(false)
   
    const dispatch= useDispatch()
  useEffect(() => {
    const deleteclickHandler=async()=>{
      try{
        const response = await fetch(`http://localhost:5000/${product._id}`,{
            method:'delete',

        })
       
            const data = response.json()
            dispatch(toggleIsChange())
     
      }catch(err){
        console.log(err)
      }
    }

   
      if(isDeleteClicked){
        deleteclickHandler()
      }
 
  },[isDeleteClicked]);
  return (
    <div className="card h-100 shadow-sm col-2  m-3">
      {/* <img src={product.imageUrl} className="card-img-top" alt={product.name} /> */}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge bg-primary">{product.category}</span>
          <span className="badge bg-secondary">{product.company}</span>
        </div>
      </div>
      <div className="card-footer text-center">
        <h6 className="card-subtitle mb-2 text-muted">
          Price: ${product.price}
        </h6>
        <div className="d-flex flex-row justify-content-between" style={{marginLeft:'-0.7rem'}}>
        <button className="btn btn-danger  m-1" onClick={()=>setDeleteClick(true)}>Remove</button>
        <Link onClick={()=>{
          dispatch(updateProductInSlice(product))
        }} className="btn btn-warning m-1" to={`/update/${product._id}`}>Update</Link>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
