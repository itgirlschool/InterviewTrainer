import React from "react";
import "./GradeContainer.scss";

const GradeContainer = ({ children }) => {
  return (
    <div className="grading__container">
      {React.Children.map(children, child => (
        <div className="grading__container_block">
          {child}
        </div>
      ))}
    </div>
  );
};

export default GradeContainer;