import React from "react";

export const CalendarEventBox = ({ event }) => {
  console.log(event);
  return (
    <div>
      <strong>{event.title}</strong> - {event.user.name}
    </div>
  );
};
