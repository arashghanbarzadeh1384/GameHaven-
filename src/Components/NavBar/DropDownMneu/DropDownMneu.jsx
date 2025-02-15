import navbarStyle from "./DropDownMneu.module.scss";

const DropDownMneu = ({ dropItem }) => {  


  return (
    <>
      <div className={navbarStyle.subdropDown}>
        <ul>
          {dropItem?.secondDropDown?.map(secondItem => (
            <li className={navbarStyle.menuHover} key={secondItem.id}>
              <a href="#">{secondItem.name}</a>
            </li>
          ))}
        </ul>
        <ul>
          {dropItem?.thirdDropDown?.map(thirdItem => (
            <li key={thirdItem.id}>
              <a href="#">{thirdItem.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropDownMneu;
