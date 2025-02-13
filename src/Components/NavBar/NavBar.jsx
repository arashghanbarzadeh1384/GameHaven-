import { useContext } from "react";
import navbarStyle from "./NavBar.module.scss";
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { MyContext } from "../App/App";

const NavBar = () => {
  const navBarData = useContext(MyContext);
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
          {navBarData?.map(item => {
            return (
              <ul key={item.id}>
                <li>
                  <AiOutlineMenu className={navbarStyle.menuIcon} />
                  <a href="#">{item.name}</a>
                  <div className={navbarStyle.subMenu}>
                    <ul key={item.id}>
                      {item.dropDown?.map(item => {
                        return (
                          <li key={item.id}>
                            <a href="#">{item.name}</a>
                            <div className={navbarStyle.subdropDown}>
                              <ul>
                                {item.secondDropDown?.map(item => {
                                  return (
                                    <li key={item.id}>
                                      <a href="#">{item.name}</a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
