import React, { useState } from "react";
import Form from "./Form";

export default function ConditionRendering() {
  const [isShow, setIsShow] = useState(false);

  const handleCloseForm = () => {
    setIsShow(false);
  };

  //   Trong JS, các giá trị nhận là false: false, 0, "", NaN, undifined, null

  const handleToglle = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <button onClick={handleToglle}>Toggle</button>

      {/* {isShow === true ? <h3>Content</h3> : <></>} */}
      {/* {isShow ? <h3>Content</h3> : <></>} */}
      {isShow && <Form onClose={handleCloseForm} />}
    </div>
  );
}
