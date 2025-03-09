import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import Slider from "../Slider/Slider";
import MainNav from "../NavBar/MainNav/MainNav";
import Product from "../Products/Product";
import SaleTimer from "../SaleTimer/SaleTimer";
import Benefits from "../Benefits/Benefits";

export const MyContext = React.createContext();
const App = () => {
  const [navbar, setNavBar] = useState(null);
  const [slider, setSlider] = useState(null);
  const [products, setProducts] = useState(null);
  const [productSale, setProductSale] = useState(null);
  const fethSlider = async () => {
    const sliderData = await axios.get("http://localhost:3000/Slider");
    setSlider(sliderData.data);
  };
  const fethNavBar = async () => {
    const navBarData = await axios.get("http://localhost:3000/menu");
    setNavBar(navBarData.data);
  };
  const fethProducts = async () => {
    const productsApi = await axios.get("http://localhost:3000/Product");
    try {
      setProducts(productsApi.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fethProductSale = async () => {
    const productSaleApi = await axios.get("http://localhost:3000/ProductSale");
    try {
      setProductSale(productSaleApi.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fethNavBar();
    fethSlider();
    fethProducts();
    fethProductSale();
  }, []);
  return (
    <>
      <MyContext.Provider value={{ navbar, slider, products, productSale }}>
        <NavBar />
        <Slider />
        <MainNav />
        <Product />
        <SaleTimer />
        <Benefits />
      </MyContext.Provider>
    </>
  );
};

export default App;
