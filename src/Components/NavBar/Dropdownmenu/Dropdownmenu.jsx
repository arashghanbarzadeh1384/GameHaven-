import HeaderMneuStyle from "../HeaderMenu/HeaderMenu.module.scss";

const Dropdownmenu = ({ item }) => {
  return (
    <>
      <div className={HeaderMneuStyle.dropDown__menu}>
        {item.dropDown?.map(item => {
          return (
            <ul key={item.id}>
              <li>
                <a href="#">{item.name}</a>
                <div className={HeaderMneuStyle.supDown__menu}>
                  {item.secondDropDown?.map(item => {
                    return (
                      <ul key={item.id}>
                        <li className={HeaderMneuStyle.list__mneu}>
                          <a href="#">{item.name}</a>
                        </li>
                      </ul>
                    );
                  })}
                  {item.thirdDropDown?.map(item => {
                    return (
                      <ul>
                        <li>
                          <a href="#">{item.name}</a>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Dropdownmenu;
