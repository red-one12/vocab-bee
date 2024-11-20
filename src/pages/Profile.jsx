import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";
import toast from "react-hot-toast";


const Profile = () => {
  
  const { user } = useContext(AuthContext);
  const navigateToMyProfile = useNavigate()

  console.log(user);
  
  const handleUpdateForm = (e) => {
    e.preventDefault()
    
    const name = e.target.name.value;
    const URL = e.target.photoUrl.value;
    

    updateProfile(auth.currentUser, 
      {
        displayName: name, photoURL: URL
      })
      .then(() => {
        navigateToMyProfile('/myProfile');
      }).catch((error) => {
        toast.error('Error Occurred! Try Again!');
      }
    )
    
    
  }


  return (
    <div className="max-w-7xl m-auto pt-20">
      
      <h1 className="text-5xl font-bold text-center">Update Information</h1>
      <form onSubmit={handleUpdateForm}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Update Name</span>
          </label>
          <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Update Photo</span>
          </label>
          <input name="photoUrl" type="text" placeholder="Enter Photo URL" className="input input-bordered" required />
        </div>

        <div className="text-center pt-5">
        <button className="btn bg-green-400 ">Update</button>
        </div>


        </form>

      <div className="mt-32">
      <Link to='/myProfile' className="btn bg-[#1d1b28] text-white">Go Profile</Link>
      </div>
    </div>
  );
};

export default Profile;