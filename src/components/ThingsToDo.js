import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineDelete } from "react-icons/ai";
import { GiFountainPen } from "react-icons/gi";

const ThingsToDo = ({ thing, thingsToDo, setThingsToDo }) => {
  const deleteThing = () => {
    const newThingToDo = thingsToDo;
    const newArr = newThingToDo.filter((singleThing) => singleThing !== thing);
    setThingsToDo(newArr);
  };

  return (
    <Card className="mt-3">
      <Card.Body className="d-flex justify-content-between">
        <div> {thing}</div>
        <div>
          {/* EDITION A FAIRE <GiFountainPen className="clickable mr-1" /> */}
          <AiOutlineDelete
            className="clickable"
            onClick={() => deleteThing()}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ThingsToDo;
