import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {

  const {logInUser} = useContext(AuthContext);
  const navigateToHome = useNavigate();


  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;


    console.log(email, password);

    logInUser(email, password)
    .then((result) => {
      console.log(result.user);
      console.log('login successfully');

      navigateToHome('/');
      
    })
    .catch((error) => {
      console.log("Error", error);
      console.log('problem happened!');
      toast.error('Invalid Credentials');
    })
    
    
  }





  return (
    <div className="max-w-7xl m-auto flex flex-col justify-center pt-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#456389]">Welcome Back!</h1>
        <h1 className="text-xl font-bold text-[#456389]">Login</h1>
      </div>
      <form onSubmit={handleLogIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#456389] text-white">Login</button>
        </div>
      </form>
      <p className="text-sm">Don't Have an Account? Please <Link to='/register' className="text-blue-600 font-bold">Register</Link></p>
    </div>
  );
};

export default Login;