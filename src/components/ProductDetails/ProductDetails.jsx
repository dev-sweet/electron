import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name } = product;
  console.log(name);
  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
};

export default ProductDetails;
