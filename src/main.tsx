import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrossel from "./Carrossel";


const el = document.getElementById("root");
if (el === null) throw new Error("Root container missing in index.html");

const root = ReactDOM.createRoot(el);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="carrossel" element={<Carrossel />} />
      <Route path="carrossel/:id" element={<Carrossel />} />
    </Routes>
  </BrowserRouter>
);
