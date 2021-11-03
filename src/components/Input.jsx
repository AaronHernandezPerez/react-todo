import React, { useState, useCallback } from "react";

function Input({ onChange = (d) => {}, label, value }) {
  // const [search, setSearch] = useState("");
  const change = useCallback(
    (e) => {
      const val = e.target.value;
      // setSearch(val);
      onChange(val);
    },
    // [setSearch, onChange]
    [onChange]
  );
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={change} />
    </div>
  );
}

export default Input;
