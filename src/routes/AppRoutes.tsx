import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Carpage from "../pages/Carpage";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cars" element={<Carpage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
