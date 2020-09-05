import React, { useState } from "react";
import Dropdown from "./dropdown";
import data from "../data/countries";

export default function App() {
  const [value, setValue] = useState(null);

  return (
    <div style={{ width: 200 }}>
      <Dropdown
        prompt='Select country...'
        options={data}
        value={value}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
}
