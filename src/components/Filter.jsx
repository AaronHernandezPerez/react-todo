import React from "react";
import Input from "./Input";

function Filter({ onTitleChanged, onCompletedChanged, titleValue="", completeValue =false }) {
  const onCheckboxChange = (e) => {
    onCompletedChanged(e.target.checked);
  };
  return (
    <div>
      <h3>Filter todos</h3>
      <div>
        <Input label="Title" onChange={onTitleChanged} value={titleValue} />
        <div>
          <label>Completed</label>
          <input type="checkbox" onChange={onCheckboxChange} checked={completeValue} />
        </div>
      </div>
    </div>
  );
}

export default Filter;
