import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [googleUser, setGoogleUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigateToHome = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleRegister = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setGoogleUser(result.user);
        navigateToHome('/');
      })
      .catch(error => {
        console.log('Error', error);
        setUser(null);
      });
  };

  const { createNewUser, setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setErrorMessage('Password should be 6 characters or more!');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage('Use Upper Case and Lower Case');
      return;
    }
    setErrorMessage('');
    console.log(name, email, photoUrl, password);

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photoUrl });
          console.log(user);
          navigateToHome('/');
        }).catch((error) => {
          console.log('Profile update error', error);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        if (errorCode === 'auth/email-already-in-use') {
          toast.error('Email is already in use.');
        } else {
          toast.error('This is an error!');
        }
      });
  };

  return (
    <div className="max-w-7xl m-auto flex flex-col justify-center pt-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#456389]">Create An Account</h1>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center pt-8">
        <p className="text-lg font-bold text-[#456389]">Register With</p>
        <button onClick={handleGoogleRegister} className="border border-blue-200 py-3 px-10 rounded-lg cursor-pointer hover:bg-[#d0e2ec] duration-200">
          <FaGoogle className="text-xl text-blue-500" />
        </button>
      </div>

      <div className="divider">Or</div>

      <form onSubmit={handleRegister}>
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
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
          <div onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-[50px] cursor-pointer">
            {showPassword ? <FaEye className="text-xl" /> : <FaEyeSlash className="text-xl" />}
          </div>
        </div>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <div className="form-control mt-6">
          <button className="btn bg-[#456389] text-white">Register</button>
        </div>
      </form>
      <p className="text-sm">Already Have an Account? Please <Link to='/login' className="text-blue-600 font-bold">Login</Link></p>
    </div>
  );
};

export default Register;
