import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ product }) => {
  const { name, _id, price, img, brand, discount, shortDetails } = product;
  return (
    <div className="card w-96 bg-sky-100 shadow-xl border-md border-red-100">
      <figure>
        <img src={img} alt="name" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title justify-center">{name}</h2>{" "}
          <div className="badge badge-secondary">{discount}% Off</div>
        </div>
        <p>{shortDetails}</p>
        <div className="flex items-center justify-around">
          <h3 className="text-4xl font-semibold">${price}</h3>
          <div className="badge badge-primary">{brand}</div>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/products/${_id}`} className="btn btn-primary mt-3">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
