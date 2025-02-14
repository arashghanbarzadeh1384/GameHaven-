import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import Slider from "../Slider/Slider";

export const MyContext = React.createContext();
const App = () => {
  const [navbar, setNavBar] = useState(null);
  const [slider, setSlider] = useState(null);
  const fethSlider = async () => {
    const sliderData = await axios.get("http://localhost:3000/Slider");
    setSlider(sliderData.data);
  };
  const fethNavBar = async () => {
    const navBarData = await axios.get("http://localhost:3000/menu");
    setNavBar(navBarData.data);
  };
  useEffect(() => {
    fethNavBar();
    fethSlider();
  }, []);
  return (
    <>
      <MyContext.Provider value={{ navbar, slider }}>
        <NavBar />
        <Slider/>
      </MyContext.Provider>
    </>
  );
};

export default App;
