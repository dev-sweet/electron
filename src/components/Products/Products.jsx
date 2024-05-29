import { useLoaderData } from "react-router-dom";
import SingleProduct from "../Home/SingleProduct/SingleProduct";

const Products = () => {
  const watches = useLoaderData();

  return (
    <>
      <h1 className="my-4 text-5xl   text-center text-black-400">
        Our Products
      </h1>
      <div className="flex item-center justify-center flex-wrap gap-5">
        {watches?.map((watch) => (
          <SingleProduct key={watch.id} watch={watch} />
        ))}
      </div>
    </>
  );
};

export default Products;
