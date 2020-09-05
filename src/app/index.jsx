import React from "react";
import Dropdown from "./dropdown";
import countries from "../data/countries";

export default function App() {
  return (
    <div style={{ width: 200 }}>
      <Dropdown countries={countries} />
    </div>
  );
}
