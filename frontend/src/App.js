import React from 'react';
import Layout from './components/layout/Layout';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

//pages
import Home from "./pages/home/Home";
import Personal from "./pages/personal/Personal";
import Leaderboard from "./pages/leaderboard/Leaderboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Profile" element={<Personal />} />
      <Route path="Leaderboard" element={<Leaderboard />} />
    </Route>
  )
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}