import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const ModelsConnect = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="container d-flex">
      <div>
        <button onClick={() => setLogin(!login)}>
          {login ? "S'inscrire" : "Se connecter"}
        </button>
      </div>
      <div className="container">{login ? <Login /> : <Signup />}</div>
    </div>
  );
};

export default ModelsConnect;
