import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import Slider from "../Slider/Slider";
import MainNav from "../NavBar/MainNav/MainNav";
import Product from "../Products/Product";
import SaleTimer from "../SaleTimer/SaleTimer";
import Benefits from "../Benefits/Benefits";
import { Route, Routes } from "react-router";
import RouterPage from "../Pages/RouterPage/RouterPage";

export const MyContext = React.createContext();
const App = () => {
  const [navbar, setNavBar] = useState(null);
  const [slider, setSlider] = useState(null);
  const [products, setProducts] = useState(null);
  const [productSale, setProductSale] = useState(null);
  const [productStore, setProductStore] = useState(null)
  const fethproductStore = async () => {
    try {
      const productStoreData = await axios.get("http://localhost:3001/ProductStore")
      setProductStore(productStoreData.data)
    } catch (error) {
      console.log(message.error);
    }
  }
  const fethSlider = async () => {
    const sliderData = await axios.get("http://localhost:3001/Slider");
    setSlider(sliderData.data);
  };
  const fethNavBar = async () => {
    const navBarData = await axios.get("http://localhost:3001/menu");
    setNavBar(navBarData.data);
  };
  const fethProducts = async () => {
    const productsApi = await axios.get("http://localhost:3001/Product");
    try {
      setProducts(productsApi.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fethProductSale = async () => {
    const productSaleApi = await axios.get("http://localhost:3001/ProductSale");
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
    fethproductStore()
  }, []);
  return (
    <>
      <MyContext.Provider value={{ navbar, slider, products, productSale, productStore }}>
        <RouterPage />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Slider />
                <MainNav />
                <Product />
                <SaleTimer />
                <Benefits />
              </>
            }
          />
        </Routes>
      </MyContext.Provider>
    </>
  );
};

export default App;
