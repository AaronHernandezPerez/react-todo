import React, { useState, useCallback } from "react";

function Filter({ onChange = (v) => {} }) {
  const [completed, setCompleted] = useState(false);
  const change = useCallback(
    (e) => {
      const val = e.target.value;
      setCompleted(val);
      onChange(val)
    },
    [setCompleted, onChange]
  );

  return (
    <div>
      <div>
        <input name="completed" value={completed} onChange={change} />
        <label>Completed</label>
      </div>
    </div>
  );
}

export default Filter;
