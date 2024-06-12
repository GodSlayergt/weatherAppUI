import React from "react";
import { useState,useRef } from "react";
import "./Input.css";
import { Button } from "../Button/Button";

export const Input = ({ setError, setData,updateCity }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null)
  
  const serverUrl = process.env.REACT_APP_SERVER_URL||'http://localhost:10000'
  const fetchData = async () => {
    setLoading(true);
    setError(null);
   
    try {
      const city = inputRef.current.value
      const response = await fetch(
        `${serverUrl}/weather?city=${city}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      updateCity(city)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="input-container">
      <input ref={inputRef} className="stylish-input" type="text" placeholder="City"  />
      <Button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Go"}
      </Button>
    </div>
  );
};
