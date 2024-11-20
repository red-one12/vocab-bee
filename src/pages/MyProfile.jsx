import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  


  return (
    <div className="max-w-7xl m-auto flex flex-col justify-center pt-8">
      <h1 className="text-7xl text-center">Welcome {user.displayName}!</h1>
      <div className="flex flex-col items-center mt-8">
        <img src={user.photoURL} alt="Profile" className="rounded-2xl w-32" />
        <p className="mt-4 text-2xl">Email: {user.email}</p>
        <p className="mt-2 text-xl font-bold">Name: {user.displayName}</p>
        <Link to='/profile' className="mt-4 btn bg-blue-500 text-white">Update Profile</Link>
      </div>

    </div>
  );
};

export default MyProfile;
