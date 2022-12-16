import React, { useRef } from "react";
import { auth } from "../utils/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const loginMail = useRef();
  const loginPassword = useRef();

  const login = (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(
        auth,
        loginMail.current.value,
        loginPassword.current.value
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>S'inscrire</h2>
      <form onSubmit={(e) => login(e)}>
        <div className="mb-3">
          <label className="form-label">Adresse mail</label>
          <input
            ref={loginMail}
            autoComplete="off"
            placeholder="Adresse mail"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mot de passe</label>
          <input
            ref={loginPassword}
            placeholder="Mot de passe.."
            autoComplete="off"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
