import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { CalendarRouter } from "./CalendarRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/*" element={<CalendarRouter />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
