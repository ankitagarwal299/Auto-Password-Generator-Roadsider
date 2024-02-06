import React from 'react';

function Checkboxes({ status, title, onChange }) {
  return (
    <>
      <input
        type="checkbox"
        checked={status}
        onChange={onChange}
      />
      <label> {title}</label>
    </>
  );
}
export default Checkboxes;
