import React from "react";

export default function SizeChanger(props) {
  return (
    <div>
      <select className="size-changer" onChange={props.handleChangeSizePage}>
        <option value="5">5 docs / page</option>
        <option value="10">10 docs / page</option>
        <option value="15">15 docs / page</option>
      </select>
    </div>
  );
}
