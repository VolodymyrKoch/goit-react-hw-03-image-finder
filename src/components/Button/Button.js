import React from 'react';

export default function Button({ handleClick }) {
  return (
    <>
      <button type="button" onClick={handleClick}>
        more
      </button>
    </>
  );
}
// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
