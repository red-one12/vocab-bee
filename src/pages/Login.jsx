import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="max-w-7xl m-auto flex flex-col justify-center pt-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#456389]">Welcome Back!</h1>
        <h1 className="text-xl font-bold text-[#456389]">Login</h1>
      </div>
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
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