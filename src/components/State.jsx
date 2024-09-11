import React, { useState } from "react";

const carts = [100, 200, 300, 400];

export default function State() {
  //   const arrayState = useState(0);

  //   const state = arrayState[0];

  //   const setState = arrayState[1];

  const [state, setState] = useState(0);

  const [total, setTotal] = useState(() => {
    const totalAmout = carts.reduce((prev, current) => prev + current, 0);
    console.log("re-render");

    return totalAmout;
  });
  const [numbers, setNumbers] = useState([]);

  const [info, setInfo] = useState({
    name: "Nguyễn Văn A",
    age: 21,
  });

  const handleIncrease = () => {
    setState((prev) => prev + 1); // prev = 0
    setState((prev) => prev + 2); // prev = 1
    setState((prev) => prev + 3); // prev = 3
  };

  const handleIncreaseCart = () => {
    setTotal((prev) => prev + 100);
  };

  const handleUpdateInfo = () => {
    // Sử dụng Spread operator
    setInfo({ ...info, address: "Hà Nội" });
  };

  const handleRandom = () => {
    setNumbers([...numbers, Math.ceil(Math.random() * 10)]);
  };

  return (
    <div>
      <h3>State: {state}</h3>
      <h3>Info: {JSON.stringify(info)}</h3>
      <h3>Numbers: {JSON.stringify(numbers)}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncreaseCart}>Increase cart</button>
      <button onClick={handleUpdateInfo}>Update info</button>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
