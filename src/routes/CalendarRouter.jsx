import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CalendarView } from "../calendar";

export const CalendarRouter = () => {
  return (
    <Routes>
      <Route path="" element={<CalendarView />} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};
