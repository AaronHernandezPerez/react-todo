import React from "react";
import Input from "./Input";

function Filter({ onTitleChanged, onCompletedChanged }) {
  const onCheckboxChange = (e) => {
    onCompletedChanged(e.target.checked);
  };
  return (
    <div>
      <h3>Filter todos</h3>
      <div>
        <Input label="Title" onChange={onTitleChanged} />
        <div>
          <label>Completed</label>
          <input type="checkbox" onChange={onCheckboxChange} />
        </div>
      </div>
    </div>
  );
}

export default Filter;
