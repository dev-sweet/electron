import { useLoaderData } from "react-router-dom";
import DashboardProduct from "../DashboardProduct/DashboardProduct";

const AllProducts = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div className="text-center">
      <h2 className="text-5xl my-5 text-center font-bold">All Product</h2>
      {products.map((product) => (
        <DashboardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
