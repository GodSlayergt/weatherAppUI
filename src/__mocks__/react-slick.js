import React from "react";

const Slider = ({ children, ...props }) => {
  return <div {...props} data-testid="carousel-slide">{children}</div>;
};

export default Slider;
