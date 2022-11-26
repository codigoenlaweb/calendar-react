import React from "react";
import { AppRouter } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AppRouter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
