import { NavLink,} from "react-router-dom";
import AdmimmStyle from "./AdminPanel.module.scss";
import { MdSpaceDashboard } from "react-icons/md";

const AdminPanel = () => {
  return (
    <>
      <div className={AdmimmStyle.item__panel}>
        <div className={AdmimmStyle.logo}>
            <NavLink to= "/"><img src="../../../public/Images/logo.svg" alt="" /></NavLink>
        </div>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? AdmimmStyle.activ : AdmimmStyle.notactiv
          }>
          <MdSpaceDashboard className={AdmimmStyle.icoen__dashbord} />
          داشبورد
        </NavLink>

        <NavLink
          to="/admin/product"
          className={({ isActive }) =>
            isActive ? AdmimmStyle.activ : AdmimmStyle.notactiv
          }>
          محصولات
        </NavLink>

        <NavLink
          to="/admin/user"
          className={({ isActive }) =>
            isActive ? AdmimmStyle.activ : AdmimmStyle.notactiv
          }>
          کاربران
        </NavLink>
      </div>
    </>
  );
};

export default AdminPanel;
