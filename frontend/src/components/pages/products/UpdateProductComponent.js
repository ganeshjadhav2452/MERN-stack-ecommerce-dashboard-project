import React, { useEffect, useState } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
function UpdateProductComponent({product}) {
  const {currentProduct} = useSelector((state)=>state.product)
  const [productDetails, setProductDetails] = useState({
    name:'',
    price:'',
    category:'',
    company:''
  })
 
  const nameChangeHandler = (e)=>{
    setProductDetails((prevState)=>{
        return{
            ...prevState,
            name:e.target.value
        }
    })
}

const priceChangeHandler = (e)=>{
  setProductDetails((prevState)=>{
        return{
            ...prevState,
            price:e.target.value
        }
    })
}

const companyChangeHandler = (e)=>{
  setProductDetails((prevState)=>{
        return{
            ...prevState,
            company:e.target.value
        }
    })
}

const categoryChangeHandler = (e)=>{
  setProductDetails((prevState)=>{
        return{
            ...prevState,
            category:e.target.value
        }
    })
}


const submitHandler =async(e)=>{
  e.preventDefault();
 
  const productObj = {
    ...productDetails,
  

  }
  console.log(productObj)
  try{
      const response = await fetch(`http://localhost:5000/update/${currentProduct._id}`,{

          method:'put',
          body:JSON.stringify(productObj),
          headers:{
              'Content-Type':'application/json'
          }
      })

 if(response.ok){
  const data = await response.json();
  console.log(data)
 }
  
  }catch(err){
      console.log(err)
  }
}

  useEffect(()=>{
setProductDetails({
  name:currentProduct.name,
  price:currentProduct.price,
  category:currentProduct.category,
  company:currentProduct.company
})
  },[currentProduct])
  return (
    <div className="container my-5 ">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h3 className="mb-0">Update Product</h3>
          </div>
          <div className="card-body bg-light">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input onChange={nameChangeHandler} value={productDetails.name} type="text" className="form-control" id="productName" placeholder="Enter product name"  />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <div className="input-group">
                  <span className="input-group-text">$</span>
                  <input onChange={priceChangeHandler} value={productDetails.price} type="number" step="0.01" className="form-control" id="price" placeholder="Enter price"  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input onChange={categoryChangeHandler} value={productDetails.category} type="text" className="form-control" id="category" placeholder="Enter category" />
              </div>
              <div className="mb-3">
                <label htmlFor="company" className="form-label">Company</label>
                <input onChange={companyChangeHandler} value={productDetails.company} type="text" className="form-control" id="company" placeholder="Enter company"  />
              </div>
              {/* Add other fields here as needed */}
              <button type="submit" className="btn btn-primary">Update Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateProductComponent