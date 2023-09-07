import React from "react";
import { Route, Routes } from "react-router-dom";

import { NotFoundPage, TasksPage } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="" element={<TasksPage />} />
    </Routes>
  );
};
