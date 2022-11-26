import React from "react";

export const CalendarEventBox = ({ event }) => {
  return (
    <div>
      <strong>{event.title}</strong> - {event.user.name}
    </div>
  );
};
