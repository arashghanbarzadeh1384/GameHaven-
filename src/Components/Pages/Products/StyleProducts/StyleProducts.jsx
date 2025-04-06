import { FaEdit, FaTrash } from "react-icons/fa";
import styleProducts from "./styleProducts.module.scss";
import axios from "axios";

const StyleProducts = ({ productStore, setProductStore, onEditProduct }) => {
  const handleDelete = async (id) => {
    const confirmed = window.confirm("آیا مطمئنی که می‌خوای این محصول رو حذف کنی؟");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:3001/ProductStore/${id}`);
        const updated = productStore.filter(p => p.id !== id);
        setProductStore(updated);
      } catch (err) {
        console.error("خطا در حذف محصول:", err);
      }
    }
  };

  return (
    <div className={styleProducts.container}>
      {productStore?.map(product => (
        <div key={product.id} className={styleProducts.productItem}>
          <img
            src={product.imageUrl}
            alt={product.altText}
            className={styleProducts.productImage}
          />
          <div className={styleProducts.productInfo}>
            <span className={styleProducts.productName}>{product.title}</span>
          </div>
          <div className={styleProducts.actions}>
            <FaEdit
              className={styleProducts.editIcon}
              onClick={() => onEditProduct(product)}
              style={{ cursor: "pointer" }}
            />
            <FaTrash
              className={styleProducts.deleteIcon}
              onClick={() => handleDelete(product.id)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StyleProducts;
