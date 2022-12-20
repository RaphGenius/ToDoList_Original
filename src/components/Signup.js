import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const Signup = () => {
  const signupMail = useRef();
  const signupPassword = useRef();
  const [displayName, setDisplayName] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const editErrorMsg = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  };

  const Signup = (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(
        auth,
        signupMail.current.value,
        signupPassword.current.value
      )
        .then(async (user) => {
          await updateProfile(user.user, {
            displayName,
          });
          window.location.reload();
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            editErrorMsg("Un compte avec cette adresse mail est déjà existant");
          }
          console.log(err.code);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>S'inscrire</h2>
      <form onSubmit={(e) => Signup(e)}>
        <div className="mb-3">
          <label className="form-label">Pseudo</label>
          <input
            autoComplete="off"
            placeholder="Votre pseudo"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            required
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Adresse mail</label>
          <input
            ref={signupMail}
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
            ref={signupPassword}
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
      {errorMsg}
    </div>
  );
};

export default Signup;
