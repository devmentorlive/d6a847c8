import React, { useState } from "react";
import Dropdown from "./dropdown";
import data from "../data/animals.json";

export default function App() {
  const [value, setValue] = useState(null);

  return (
    <div style={{ width: 200 }}>
      <Dropdown
        prompt='Select animal...'
        options={data}
        id='id'
        label='name'
        value={value}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
}
