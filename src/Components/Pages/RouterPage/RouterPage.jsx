import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";

const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default RouterPage;
