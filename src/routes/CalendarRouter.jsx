import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CalendarView } from "../calendar";

export const CalendarRouter = () => {
  const stateAuth = "authenticated";
  const navigate = useNavigate();
  useEffect(() => {
    stateAuth === "not-authenticated" && navigate("/auth/login");
  }, []);

  return (
    <Routes>
      <Route path="" element={<CalendarView />} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};
