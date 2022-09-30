import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
// import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Home from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /></Route>
        <Route path="blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}