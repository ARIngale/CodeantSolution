import React from 'react';
import { NavLink } from 'react-router-dom';

export function Options({ img, text, onClick }) {
  return (
    <NavLink
      to={onClick}
      className="flex flex-row justify-center items-center font-semibold border border-[#e5e4e4] w-80 md:w-[25rem] gap-4 p-2 rounded-lg cursor-pointer"
    >
      <img src={img} alt={`${text} icon`} />
      <p>{text}</p>
    </NavLink>
  );
}

