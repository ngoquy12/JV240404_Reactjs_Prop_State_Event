import React from "react";
import ChildrenComponent from "./ChildrenComponent";

export default function ParentComponent() {
  const company = "Rikkei Academy";
  const age = 20;
  const address = "Hà Nội";

  return (
    <div>
      ParentComponent
      <ChildrenComponent
        addressProp={address}
        companyProp={company}
        ageProp={age}
      />
    </div>
  );
}
