import { useEffect, useState } from "react";
import SingleProduct from "../Home/SingleProduct/SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 className="my-4 text-5xl   text-center text-black-400">
        Our Products
      </h1>
      <div className="flex item-center justify-center flex-wrap gap-5">
        {products?.map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
