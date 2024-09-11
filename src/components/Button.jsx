import React from "react";

export default function Button({ children, type, htmlType }) {
  console.log(htmlType);

  return (
    <div>
      <button
        style={
          type === "primary"
            ? { backgroundColor: "blue" }
            : { backgroundColor: "red" }
        }
      >
        {children}
      </button>

      <button>Add</button>
      <input type="text" name="" id="" />
    </div>
  );
}
