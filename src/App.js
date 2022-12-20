import { useState } from "react";
import FormList from "./components/FormList";
import ModelsConnect from "./components/ModelsConnect";
import { auth } from "./utils/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Logout from "./components/Logout";

function App() {
  const [user, setUser] = useState(false);

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
