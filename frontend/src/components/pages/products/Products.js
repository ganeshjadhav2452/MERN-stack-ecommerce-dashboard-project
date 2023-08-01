import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Products() {
  const { isChanged } = useSelector((state) => state.product);
  console.log(isChanged);
  const [productsData, setProductsData] = useState([]);

  const [searchKey, setSearchKey] = useState({
    key: "",
  });

  const searchKeyChangeHandler = (e) => {
    setSearchKey({
      key: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (searchKey.key === '') {
      fetchProduct()
    } else {
      const response = await fetch(
        `http://localhost:5000/search/${searchKey.key}`,
        {
          method: "get",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProductsData(data);
      }
    }
  };
  const fetchProduct = async () => {
    const response = await fetch("http://localhost:5000/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      setProductsData(data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  useEffect(() => {
    fetchProduct();
  }, [isChanged]);
  return (
    <div className="container-fluid bg-light " style={{ height: '60rem' }}>
      <div className="row p-2" >
        <form
          onSubmit={submitHandler}
          className="d-flex align-items-center mt-3 col-10"
          style={{ marginLeft: "5rem", marginBottom: "1rem" }}
        >
          <input
            type="text"
            value={searchKey.key}
            onChange={searchKeyChangeHandler}
            placeholder="Search products..."
            className="form-control me-2"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <hr />
        {productsData.length > 0 ? productsData.map((obj) => (
          <Product key={obj._id} product={obj} />
        )) : <h1>Sorry ! no result found for this keyword</h1>}
      </div>
    </div>
  );
}

export default Products;
