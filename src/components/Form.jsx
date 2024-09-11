import React from "react";

export default function Form({ onClose }) {
  console.log(onClose);

  return (
    <div style={{ height: 200, width: 200, border: "1px solid red" }}>
      <h3>Form</h3>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
