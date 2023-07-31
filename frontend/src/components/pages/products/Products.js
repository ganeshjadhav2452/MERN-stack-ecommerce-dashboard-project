import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Products() {
  const {isChanged} = useSelector((state)=>state.product)
   console.log(isChanged)
  const [productsData, setProductsData] = useState([]);

  const fetchProduct=async()=>{
    const response = await fetch('http://localhost:5000/',{
      method:'get',
      headers:{
        'Content-Type':'application/json'
      }

    })

    if(response.ok){
        const data = await response.json() 
        setProductsData(data)
    }
  }
  useEffect(()=>{
  

    fetchProduct()
  },[])
  useEffect(()=>{
  

    fetchProduct()
  },[isChanged])
  return (
    <div className="container-fluid bg-light">
      <div className="row">
      {productsData.map((obj) => (
        <Product key={obj._id} product={obj} />
      ))}
      </div>
    </div>
  );
}

export default Products;
