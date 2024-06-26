import React from "react";
import { DateTime } from "luxon";
import "./Header.css";

export const Header = ({city,data}) => {
  const format = "yyyy-MM-dd HH:mm:ss";
  const time = DateTime.fromFormat(data.date,format).toFormat('DDDD')


  return (
    <div className="header" data-testid="location-icon">
      <span>
        <svg
          enableBackground="new 0 0 24 24"
          height="16px"
          id="location"
          version="1.1"
          viewBox="0 0 24 24"
          width="16px"
          fill="white"
        >
          <path d="M11.513,12.38c-2.117,0-3.835-1.729-3.835-3.862c0-2.135,1.718-3.863,3.835-3.863s3.835,1.729,3.835,3.863  C15.348,10.65,13.63,12.38,11.513,12.38 M11.513,0C6.825,0,3.025,3.827,3.025,8.549c0,4.46,3.844,10.213,6.411,13.014  c0.959,1.045,2.076,2.454,2.076,2.454s1.2-1.417,2.229-2.493C16.306,18.84,20,13.451,20,8.549C20,3.827,16.2,0,11.513,0" />
        </svg>
      </span>
      <span>{city}</span>

      <p>{time}</p>
    </div>
  );
};
