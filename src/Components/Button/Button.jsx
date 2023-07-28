import React from "react";
import "./Button.css";
export default function Button({ text, onClick }) {
  return (
    <button className="button-card" onClick={onClick}>
      {text}
    </button>
  );
}
