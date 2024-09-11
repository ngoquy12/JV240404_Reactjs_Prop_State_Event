import React, { useState } from "react";

export default function Event() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const handleCount = (event) => {
    console.log(event);

    // setCount((prev) => prev + 1);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeValue = () => {
    setValue("Hello world");
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <h3>Input value: {value}</h3>
      <button onClick={handleCount}>Click</button>

      <button onClick={handleChangeValue}>Change value</button>
      <input value={value} type="text" onChange={handleChange} />
    </div>
  );
}
