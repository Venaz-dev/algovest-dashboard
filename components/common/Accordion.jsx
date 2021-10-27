import React from "react";
import { useState } from "react";
import Icons from "./Icons";

// import "./accordion.scss";

const Accordion = ({ question, solution }) => {
  const [open, setOpen] = useState(false);

  const handleAction = () => {
    console.log("actioned");
    setOpen(!open);
  };
  return (
    <div className={`accordion ${open ? "expand" : ""}`}>
      <div className="question" onClick={handleAction}>
        <p>{question}</p>
        <button>
          {open ? <Icons name="minus-sign" /> : <Icons name="plus-sign" />}
        </button>
      </div>
      <div className="solution">
        <p>{solution}</p>
      </div>
    </div>
  );
};

export default Accordion;
