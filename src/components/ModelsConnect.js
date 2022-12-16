import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const ModelsConnect = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="container ">
      <h1>Modal</h1>
      <div>
        <button onClick={() => setLogin(true)}>Se connecter</button>
        <button onClick={() => setLogin(false)}>S'inscrire</button>
      </div>
      <div className="container">{login ? <Login /> : <Signup />}</div>
    </div>
  );
};

export default ModelsConnect;
