import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import SinglePage from "../components/SinglePage";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/detail/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
