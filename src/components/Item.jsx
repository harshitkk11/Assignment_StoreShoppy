import React from "react";
import { Link } from "react-router-dom";

const item = ({ item, text, action, className, path }) => {
  return (
    <li
      className={`overflow-hidden hover:bg-text-primary hover:bg-opacity-10 ${
        action && "w-full p-3"
      } ${className}`}
    >
      <Link
        to={path}
        className="flex justify-start items-center text-nowrap gap-3"
      >
        {item}
        {action && <span className="text-xs">{text}</span>}
      </Link>
    </li>
  );
};

export default item;
