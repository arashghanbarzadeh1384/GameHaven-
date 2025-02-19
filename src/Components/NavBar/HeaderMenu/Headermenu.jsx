import { useContext } from "react";
import { MyContext } from "../../App/App";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderMneuStyle from "./HeaderMenu.module.scss";
import Dropdownmenu from "../Dropdownmenu/Dropdownmenu";

const HeaderMenu = () => {
  const { navbar } = useContext(MyContext);

  return (
    <>
      {navbar?.map((item, index) => {
        return (
          <div className={HeaderMneuStyle.header__link} key={item.id}>
            {index === 0 && (
              <span>
                <AiOutlineMenu className={HeaderMneuStyle.menu__icon} />
              </span>
            )}
            <a id={HeaderMneuStyle.nav__link} href="#">
              {item.name}
            </a>
            <Dropdownmenu item={item} />
          </div>
        );
      })}
    </>
  );
};

export default HeaderMenu;
