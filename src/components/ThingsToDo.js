import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineDelete } from "react-icons/ai";
import { GiFountainPen } from "react-icons/gi";

const ThingsToDo = ({ thing }) => {
  return (
    <Card className="mt-3">
      <Card.Body className="d-flex justify-content-between">
        <div> {thing}</div>
        <div>
          <GiFountainPen className="clickable mr-1" />
          <AiOutlineDelete className="clickable" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ThingsToDo;
