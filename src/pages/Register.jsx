import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

  const [googleUser, setGoogleUser] = useState(null);
  const navigateToHome = useNavigate()

  const googleProvider = new GoogleAuthProvider()

  const handelGoogleRegister = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result.user);

      setGoogleUser(result.user);

      navigateToHome('/');

      
    })
    .catch(error => {
      console.log('Error', error);

      setUser(null);
      
    })
    
  }


  const {createNewUser, setUser} = useContext(AuthContext)

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;
    
    console.log(name, email, photoUrl, password);
    createNewUser(email, password)
    .then ((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
      navigateToHome('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.errorMessage;
      console.log(errorCode, errorMessage);
      
    })
  }



  return (
    <div className="max-w-7xl m-auto flex flex-col justify-center pt-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#456389]">Create An Account</h1>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center pt-8">
        <p className="text-lg font-bold text-[#456389]">Register With</p>
      <button onClick={handelGoogleRegister} className="border border-blue-200 py-3 px-10 rounded-lg cursor-pointer hover:bg-[#d0e2ec] duration-200">
      <FaGoogle className="text-xl text-blue-500" />
      </button>
      </div>

    <div className="divider">Or</div>

      <form onSubmit={handelRegister}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="photoUrl" type="text" placeholder="Enter Your Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
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