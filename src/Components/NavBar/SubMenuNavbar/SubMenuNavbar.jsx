import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import navbarStyle from "./SubMenuNavbar.module.scss";
import { MyContext } from "../../App/App";
import DropDownMneu from "../DropDownMneu/DropDownMneu";

const SubMenuNavbar = () => {
  const { navbar } = useContext(MyContext);

  return (
    <>
      {navbar?.map(item => (
        <ul key={item.id}>
          <li className={navbarStyle.hoverMenu}>
            <AiOutlineMenu className={navbarStyle.menuIcon} />
            <a href="#">{item.name}</a>
            <div className={navbarStyle.subMenu}>
              <ul>
                {item.dropDown?.map(dropItem => (
                  <li key={dropItem.id}>
                    <a href="#">{dropItem.name}</a>
                    <DropDownMneu dropItem={dropItem} />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
};

export default SubMenuNavbar;
