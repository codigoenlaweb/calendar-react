import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { LoginView, RegisterView } from "../auth";
import { useAuthStore } from "../hooks/store/useAuthStore";

export const AuthRouter = () => {
  const { status } = useAuthStore() // (hook) useAuthStore
  const navigate = useNavigate();   // (hook) useNavigate


  useEffect(() => {
    status === "authenticated" && navigate("/");
  }, [status]);

  return (
    <Routes>
      <Route path="login" element={<LoginView />} />
      <Route path="Register" element={<RegisterView />} />
      <Route path="*" element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
