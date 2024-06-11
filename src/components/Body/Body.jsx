import React from "react";
import "./Body.css";

export const Body = ({ data }) => {
  return (
    <div className="body">
      <p className="prediction" data-testid="prediction">{data.prediction}</p>

      <span className="body__temp">{parseFloat(data.temp).toFixed(0)}</span>
      <sup>
        &deg;<sub>C</sub>
      </sup>

      <p>{data.description}</p>
    </div>
  );
};
