import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { localizer } from "../../helper";
import { CalendarEventBox } from "../components/CalendarEventBox";
import { CalendarModal } from "../components/CalendarModal";
import { useUiStore } from "../../hooks";
import { useCalendarStore } from "../../hooks";
import { FabAddNew } from "../components/button/FabAddNew";
import { FabDeleted } from "../components/button/FabDeleted";

export const CalendarView = () => {
  const [lasView, setLasView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, activeEvent } = useCalendarStore();

  const evenStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    openDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChange = (event) => {
    localStorage.setItem("lastView", event);
    setLasView(event);
  };

  return (
    <main className="relative">
      <Navbar />
      <div>
        <Calendar
          events={events}
          localizer={localizer}
          defaultView={lasView}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "calc(100vh - 80px)" }}
          eventPropGetter={evenStyleGetter}
          components={{
            event: CalendarEventBox,
          }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelect}
          onView={onViewChange}
        />
      </div>

      <CalendarModal />
      <FabAddNew />

      {!!activeEvent && <FabDeleted />}
    </main>
  );
};
