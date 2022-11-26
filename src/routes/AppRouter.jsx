import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CheckingView } from "../auth";
import { useAuthStore } from "../hooks";
import { AuthRouter } from "./AuthRouter";
import { CalendarRouter } from "./CalendarRouter";

export const AppRouter = () => {
  const { status, startCheckToken } = useAuthStore(); // (hook) useAuthStore
  const navigate = useNavigate(); // (hook) useNavigate

  useEffect(() => {
    startCheckToken();
  }, []);

  useEffect(() => {
    if (status === "checking") return navigate("/checking/");
    if (status === "authenticated") return navigate("/");
    if (status === "not-authenticated") return navigate("/auth/login");
  }, [status]);

  return (
    <Routes>
      <Route path="/checking/" element={<CheckingView />} />
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="/*" element={<CalendarRouter />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
