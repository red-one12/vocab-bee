import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [photoUrl, setPhotoUrl] = useState(user?.photoURL || '');

  const handleUpdate = () => {
    // Logic to update user profile information
    setIsEditing(false);
  };

  return (
    <div className="max-w-7xl m-auto flex flex-col justify-center pt-8">
      <h1 className="text-7xl text-center">Welcome, {user?.displayName || 'User'}!</h1>
      <div className="flex flex-col items-center mt-8">
        <img src={user.photoURL} alt="Profile" className="rounded-full w-32 h-32" />
        <p className="mt-4 text-2xl">Email: {user?.email}</p>
        <p className="mt-2 text-xl font-bold">Name: {user?.displayName}</p>
        <button onClick={() => setIsEditing(true)} className="mt-4 btn bg-blue-500 text-white">Update Profile</button>
      </div>

      {isEditing && (
        <div className="mt-8 flex flex-col items-center">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <button onClick={handleUpdate} className="mt-4 btn bg-green-500 text-white">Save Changes</button>
          <button onClick={() => setIsEditing(false)} className="mt-2 btn bg-red-500 text-white">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
