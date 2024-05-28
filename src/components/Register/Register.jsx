import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const { signUpWithEmailAndPassword } = useContext(AuthContext);
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleChange = (e) => {
    setUser((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signUpWithEmailAndPassword(user.email, user.password)
      .then(() => {
        toast("Account created successfully!");
        navigate();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="py-10 my-20 flex flex-col items-center justify-center">
      <h2 className="text-3xl pb-5 font-bold text-center">Register</h2>
      <form onSubmit={handleSignIn} action="" className="w-2/5">
        <div className="py-2">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              className="grow"
              placeholder="Username"
            />
          </label>
        </div>
        <div className="py-2">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              className="grow"
              placeholder="Email"
            />
          </label>
        </div>
        <div className="py-2">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="grow"
              placeholder="Password"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-success w-full mt-3">
          Register
        </button>
        <ToastContainer />
      </form>
      <div className="w-2/5">
        <p className="mt-2 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
