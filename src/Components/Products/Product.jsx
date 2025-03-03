import { useContext } from "react";
import { MyContext } from "../App/App";
import productStyle from "./Products.module.scss";
import Products from "./Products";
const Product = () => {
  const { products } = useContext(MyContext);
  return (
    <>
      <h2>پیشنهاد بهشت گیمرها</h2>
      <div className={productStyle.root__products}>
        {products?.map(item => {
          return <Products key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Product;
