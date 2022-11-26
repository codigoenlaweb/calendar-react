import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginView, RegisterView } from "../auth";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginView />} />
      <Route path="Register" element={<RegisterView />} />
      <Route path="*" element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
