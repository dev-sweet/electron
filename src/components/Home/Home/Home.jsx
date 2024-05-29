import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/watches")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <h1 className="my-4 text-5xl   text-center text-black-400">
        Our Latest Products
      </h1>
      <div className="flex item-center justify-center flex-wrap gap-5">
        {products?.slice(0, 6).map((watch) => (
          <SingleProduct key={watch.id} watch={watch} />
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="/products" className="btn">
          See More
        </Link>
      </div>
    </>
  );
};

export default Home;
