import { NavLink } from "react-router";
import AdminStyle from "./admin.module.scss";
const Admin = () => {
  return (
    <>
      <div className={AdminStyle.root_dashbord}>
        <div className={AdminStyle.user}>
          <div className={AdminStyle.user__name}>
            <h5>کاربران</h5>
            <NavLink to="user">مشاهده همه</NavLink>
          </div>
          <div className={AdminStyle.number__user}>
            <span>0</span>
          </div>
        </div>
        <div className={AdminStyle.user}>
          <div className={AdminStyle.user__name}>
            <h5>محصولات</h5>
            <NavLink to="product">مشاهده همه</NavLink>
          </div>
          <div className={AdminStyle.number__user}>
            <span>0</span>
          </div>
        </div>
      </div>
      <div className={AdminStyle.income}>
        <div className={AdminStyle.income1}>
            <h5>کل درآمد</h5>
            <div className={AdminStyle.circle}>
              <span>0%</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
