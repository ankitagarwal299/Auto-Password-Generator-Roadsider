import React from 'react';

function Button({ cutomClass, title, onClick }) {
  return (
    <button cutomClass={cutomClass} onClick={onClick}>
      {title}
    </button>
  );
}
export default Button;
