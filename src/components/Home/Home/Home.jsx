import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/watches")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 className="my-4 text-5xl   text-center text-black-400">
        Our Latest Watches
      </h1>
      <div className="flex item-center justify-center flex-wrap gap-5">
        {products?.map((watch) => (
          <SingleProduct key={watch.id} watch={watch} />
        ))}
      </div>
    </>
  );
};

export default Home;
