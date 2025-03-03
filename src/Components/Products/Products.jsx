import productStyle from "./Products.module.scss";
const Products = ({ item }) => {
  return (
    <>
      <div className={productStyle.card__products}>
        <img src={item.image} alt={item.title} width={250} />
        <h3>{item.title}</h3>
        <span>{item.price} تومان </span>
      </div>
    </>
  );
};

export default Products;
