import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function Dropdown({
  options,
  id,
  label,
  prompt,
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  function close(e) {
    setOpen(e && e.target === ref.current);
  }

  return (
    <div className='dropdown'>
      <div
        className='control'
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className='selected-value' ref={ref}>
          {value ? value[label] : prompt}
        </div>
        <div className={`arrow ${open ? "open" : null}`} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {options.map((option) => (
          <div
            key={option[id]}
            className={`option ${
              value === option ? "selected" : null
            }`}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
}
