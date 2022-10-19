import { addHours } from "date-fns";
import React from "react";
import { useCalendarStore, useUiStore } from "../../../hooks";

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const onOpenDateModal = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: NaN,
      end: NaN,
      bgColor: "#fafafa",
      user: {
        _id: 123,
        name: "jesus",
      },
    });
    openDateModal();
  };
  return (
    <div
      onClick={onOpenDateModal}
      className="bg-sky-600 rounded-full z-10 cursor-auto hover:bg-sky-800 transition-colors absolute bottom-4 right-0 p-2 mr-8"
    >
      <svg
        className=" fill-white"
        xmlns="http://www.w3.org/2000/svg"
        height="32px"
        viewBox="0 0 24 24"
        width="32px"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    </div>
  );
};
