import { Route, Routes } from "react-router";
import Admin from "../../Admin/Admin";
import User from "./User";
import AdminPanel from "../../AdminPanel";
import RouterAdminStyle from "./royteradmin.module.scss";
const RouterAdim = () => {
  return (
    <div className={RouterAdminStyle.admin__container}>
      <AdminPanel />

      <div className={RouterAdminStyle.admin__content}>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </div>
  );
};

export default RouterAdim;
