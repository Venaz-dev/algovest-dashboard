import React from "react";

const SubHeading = ({ text, className }) => {
  return (
    <div className={`sub-heading-color ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export default SubHeading;
