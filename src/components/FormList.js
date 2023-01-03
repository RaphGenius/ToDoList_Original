import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ThingsToDo from "./ThingsToDo";
import { v4 as uuidv4 } from "uuid";

const FormList = ({ user }) => {
  const [thingsToDo, setThingsToDo] = useState([]);
  console.log(user);
  const formRef = useRef();

  const addThing = (e) => {
    e.preventDefault();
    if (!formRef.current.value) {
      alert("Champs vide");
      return;
    }
    console.log(formRef.current.value);
    setThingsToDo([...thingsToDo, formRef.current.value]);
    e.target.reset();
  };

  return (
    <div className="container">
      <h1>Bonjour {user.displayName} </h1>
      <Form onSubmit={(e) => addThing(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tâche à réaliser</Form.Label>
          <Form.Control
            ref={formRef}
            type="text"
            autoComplete="off"
            placeholder="Manger des légumes..."
          />
        </Form.Group>

        <Button type="submit" variant="dark">
          Ajouter
        </Button>
      </Form>
      {thingsToDo &&
        thingsToDo.map((thing) => {
          return (
            <ThingsToDo
              key={uuidv4()}
              thing={thing}
              thingsToDo={thingsToDo}
              setThingsToDo={setThingsToDo}
            />
          );
        })}
    </div>
  );
};

export default FormList;
