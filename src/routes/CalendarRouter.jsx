import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CalendarView } from "../calendar";
import { useAuthStore } from "../hooks";

export const CalendarRouter = () => {
  const { status } = useAuthStore() // (hook) useAuthStore
  const navigate = useNavigate();   // (hook) useNavigate

  useEffect(() => {
    status === "not-authenticated" && navigate("/auth/login");
  }, [status]);

  return (
    <Routes>
      <Route path="" element={<CalendarView />} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};
