import React, { useEffect, useState } from "react";
import { fire } from "./firebase.js";
import loadimg from "./images/loadimg.svg";
import { firebaseDb } from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [blogObjects, setBlogObjects] = useState(null);
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    firebaseDb.child("blogs").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setBlogObjects({
          ...Object.keys(snapshot.val()).map((key) => snapshot.val()[key]),
        });
        setPending(false);
      }
    });
  }, []);

  if (pending) {
    return (
      <div className="pending">
        <img src={loadimg} alt="loading-image" />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        blogObjects,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
