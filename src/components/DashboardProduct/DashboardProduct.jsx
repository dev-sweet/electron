/* eslint-disable react/prop-types */
const DashboardProduct = ({ product }) => {
  console.log(product);
  const { id, name, img, shortDetails, price, discount } = product;
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/watches/${id}`, {
      method: "DELETE",
    }).then((res) => console.log(res.json()));
  };
  return (
    <div className="flex items-center">
      <div className="max-w-4/5 my-4 mx-auto bg-white shadow-md rounded-lg overflow-hidden flex">
        <img className="w-1/3 h-auto object-cover" src={img} alt={name} />
        <div className="w-2/3 p-6 flex flex-col justify-between">
          <div>
            <div className="font-bold text-2xl mb-2">{name}</div>
            <p className="text-gray-700 text-base mb-4">{shortDetails}</p>
            <div className="flex items-center">
              <span className="text-gray-900 font-bold text-xl">${price}</span>
              {discount && (
                <span className="text-red-500 text-sm ml-2">
                  ({discount}% off)
                </span>
              )}
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
            <button
              onClick={() => handleDelete(id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;
