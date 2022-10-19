import { addHours } from "date-fns";
import React from "react";
import { useCalendarStore } from "../../../hooks";

export const FabDeleted = () => {

  const { startdeletingEvent } = useCalendarStore();
  const handleDelete = () => {
    startdeletingEvent()
  };
  return (
    <div
      onClick={handleDelete}
      className="bg-red-600 rounded-full z-10 cursor-auto hover:bg-red-800 transition-colors absolute bottom-4 left-0 -0 p-2 ml-8"
    >
      <svg
        className=" fill-white"
        xmlns="http://www.w3.org/2000/svg"
        height="32px"
        viewBox="0 0 24 24"
        width="32px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
      </svg>
    </div>
  );
};
