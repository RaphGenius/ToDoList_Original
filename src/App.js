import { useState } from "react";
import FormList from "./components/FormList";
import ModelsConnect from "./components/ModelsConnect";
import { auth } from "./utils/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import Logout from "./components/Logout";

function App() {
  //Les données de l'user depuis firebase
  const [user, setUser] = useState(false);

  //Verifie si un user est présent
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div className="container ">
      <h1 style={{ textAlign: "center" }}>ToDoList</h1>
      {user && <Logout />}

      {user ? <FormList user={user} /> : <ModelsConnect />}
    </div>
  );
}

export default App;
