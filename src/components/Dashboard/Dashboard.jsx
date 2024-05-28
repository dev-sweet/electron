import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext);
  console.log(userInfo);
  return (
    <div>
      <h2 className="text-4xl text-center">Dashboard</h2>
      <div className="max-w-sm mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center space-x-4 p-6">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src={userInfo.photoURL}
            alt={`${userInfo.displayName} profile`}
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {userInfo.displayName}
            </h2>
            <p className="text-gray-600">{userInfo.email}</p>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="p-4">
            <h3 className="text-gray-600 text-sm">Member since</h3>
            <p className="text-gray-800">
              {new Date(userInfo.creationTime).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
