import React, { useState } from 'react';

const AddProduct = () => {

    const [productDetails, setProductDetail] = useState({
        name:'',
        company:'',
        price:'',
        category:''
    })

    const nameChangeHandler = (e)=>{
        setProductDetail((prevState)=>{
            return{
                ...prevState,
                name:e.target.value
            }
        })
    }

    const priceChangeHandler = (e)=>{
        setProductDetail((prevState)=>{
            return{
                ...prevState,
                price:e.target.value
            }
        })
    }

    const companyChangeHandler = (e)=>{
        setProductDetail((prevState)=>{
            return{
                ...prevState,
                company:e.target.value
            }
        })
    }

    const categoryChangeHandler = (e)=>{
        setProductDetail((prevState)=>{
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
          userId:JSON.parse(localStorage.getItem('user'))

        }
        console.log(productObj)
        try{
            const response = await fetch('http://localhost:5000/add-product',{

                method:'post',
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
  return (
    <div className="container my-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Add New Product</h3>
            </div>
            <div className="card-body bg-light">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">Product Name</label>
                  <input type="text" className="form-control" id="productName" placeholder="Enter product name" onChange={nameChangeHandler} value={productDetails.name} />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input type="number" step="0.01" className="form-control" id="price" placeholder="Enter price" onChange={priceChangeHandler} value={productDetails.price} />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <input type="text" className="form-control" id="category" placeholder="Enter category" onChange={categoryChangeHandler} value={productDetails.category} />
                </div>
                <div className="mb-3">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input type="text" className="form-control" id="company" placeholder="Enter company" onChange={companyChangeHandler} value={productDetails.company} />
                </div>
                {/* Add other fields here as needed */}
                <button type="submit" className="btn btn-primary">Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
