
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext()



const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);


  console.log(user);
  

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const authInfo = {
    user, setUser, createNewUser, logInUser
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
    });
    return () => {
      unsubscribe();
    }
  }, [])

  return (


    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;