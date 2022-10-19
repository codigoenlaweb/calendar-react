import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { LoginView, RegisterView } from "../auth";

export const AuthRouter = () => {
  const stateAuth = "not-authenticated";
  const navigate = useNavigate();
  useEffect(() => {
    stateAuth === "authenticated" && navigate("/");
  }, []);

  return (
    <Routes>
      <Route path="login" element={<LoginView />} />
      <Route path="Register" element={<RegisterView />} />
      <Route path="*" element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
