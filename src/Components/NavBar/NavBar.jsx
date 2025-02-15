import navbarStyle from "./NavBar.module.scss";
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import SubMenuNavbar from "./SubMenuNavbar/SubMenuNavbar";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className={navbarStyle.navbarTop}>
          <img
            id={navbarStyle.logo}
            src="../../../public/Images/logo.svg"
            alt="logo"
          />
          <div className={navbarStyle.navbarTopcenter}>
            <input
              id={navbarStyle.btn}
              type="text"
              name="Search"
              placeholder="جستجو"
            />
            <IoSearch className={navbarStyle.icon} />
          </div>
          <div className={navbarStyle.navbarToprLedft}>
            <IoPersonOutline className={navbarStyle.adminPanelIcon} />
            <MdOutlineShoppingCart className={navbarStyle.CartIcon} />
          </div>
        </div>
        <div className={navbarStyle.navbarBotom}>
          <SubMenuNavbar />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
