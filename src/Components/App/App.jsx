import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
export const MyContext = React.createContext();
const App = () => {
  const [navbar, setNavBar] = useState(null);
  const fethNavBar = async () => {
    const navBarData = await axios.get("http://localhost:3000/menu");
    setNavBar(navBarData.data);
  };
  useEffect(() => {
    fethNavBar();
  }, []);
  return (
    <>
      <MyContext.Provider value={navbar}>
        <NavBar />
      </MyContext.Provider>
    </>
  );
};

export default App;
