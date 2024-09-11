import React from "react";
import GrandchildrenComponent from "./GrandchildrenComponent";

export default function ChildrenComponent(props) {
  //   console.log("Props: ", props.companyProp);
  //   console.log("Props: ", props.ageProp);

  const { companyProp, ageProp, addressProp } = props;

  return (
    <div>
      ChildrenComponent
      <GrandchildrenComponent companyPropChildren={companyProp} />
    </div>
  );
}
