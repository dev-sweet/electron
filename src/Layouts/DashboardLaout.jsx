import { Link, Outlet } from "react-router-dom";

const DashboardLaout = () => {
  return (
    <div className="flex">
      <div className="bg-base-200 flex flex-col fixed h-full">
        <h1 className="text-3xl font-bold m-5 text-center">DASHBOARD</h1>
        <ul className="menu p-4 w-80 min-h-full text-base-content">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="all-products">All Products</Link>
          </li>
          <li>
            <Link to="all-products">Shifted Products</Link>
          </li>
          <li>
            <Link to="all-products">Profile</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLaout;
