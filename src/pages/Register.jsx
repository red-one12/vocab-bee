import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="max-w-7xl m-auto flex flex-col justify-center pt-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#456389]">Create An Account</h1>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center pt-8">
        <p className="text-lg font-bold text-[#456389]">Register With</p>
      <button className="border border-blue-200 py-3 px-10 rounded-lg cursor-pointer hover:bg-[#d0e2ec] duration-200">
      <FaGoogle className="text-xl text-blue-500" />
      </button>
      </div>

    <div className="divider">Or</div>

      <form>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Enter Your Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#456389] text-white">Login</button>
        </div>
      </form>
      <p className="text-sm">Already Have an Account? Please <Link to='/login' className="text-blue-600 font-bold">Login</Link></p>
    </div>
  );
};

export default Register;