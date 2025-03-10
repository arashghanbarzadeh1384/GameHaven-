import { Route, Routes } from "react-router";
import Admin from "../../Admin/Admin";
import User from "./User";
import AdminPanel from "../../AdminPanel";

const RouterAdim = () => {
  return (
    <>
      <AdminPanel />

      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
};

export default RouterAdim;
