import { VscDebugDisconnect } from "react-icons/vsc";
import { auth } from "../utils/firebase.config";
import { signOut } from "firebase/auth";
import React from "react";

const Logout = () => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <VscDebugDisconnect
      onClick={() => handleLogout()}
      style={{
        cursor: "pointer",
        position: "absolute",
        top: "50px",
        right: "50px",
        transform: "scale(1.2)",
      }}
    />
  );
};

export default Logout;
