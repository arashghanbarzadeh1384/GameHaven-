import React, { useRef, useState, useEffect } from "react";
import formStyle from "./Form.module.scss";
import axios from "axios";
import StyleProducts from "./StyleProducts/StyleProducts";

const Product = () => {
  const [showForm, setShowForm] = useState(false);
  const [productStore, setProductStore] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [body, setBody] = useState("");
  const [altText, setAltText] = useState("");

  const titleRef = useRef();
  const imageUrlRef = useRef();
  const bodyRef = useRef();
  const altTextRef = useRef();

  const fetchProducts = () => {
    axios.get("http://localhost:3001/ProductStore")
      .then(res => setProductStore(res.data))
      .catch(err => console.error("خطا در دریافت محصولات:", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditingProduct(null); // ریست در صورت ویرایش
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      title,
      imageUrl,
      body,
      altText,
    };

    if (editingProduct) {
      // حالت ویرایش
      axios.put(`http://localhost:3001/ProductStore/${editingProduct.id}`, productData)
        .then(() => {
          fetchProducts();
          resetForm();
        });
    } else {
      // حالت افزودن
      axios.post("http://localhost:3001/ProductStore", productData)
        .then(() => {
          fetchProducts();
          resetForm();
        });
    }
  };

  const resetForm = () => {
    titleRef.current.value = "";
    imageUrlRef.current.value = "";
    bodyRef.current.value = "";
    altTextRef.current.value = "";
    setTitle("");
    setImageUrl("");
    setBody("");
    setAltText("");
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <>
      <button onClick={toggleForm} className={formStyle.toggleButton}>
        {editingProduct ? "ویرایش محصول" : "افزودن محصول"}
      </button>

      {showForm && (
        <>
          <div className={formStyle.overlay} onClick={toggleForm}></div>
          <div className={formStyle.glassesFormContainer}>
            <h2 className={formStyle.formTitle}>
              {editingProduct ? "ویرایش محصول" : "افزودن محصول"}
            </h2>
            <form className={formStyle.glassesForm} onSubmit={handleSubmit}>
              <div className={formStyle.formField}>
                <label htmlFor="title">عنوان محصول:</label>
                <input
                  type="text"
                  id="title"
                  required
                  placeholder="عنوان محصول را وارد کنید"
                  ref={titleRef}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className={formStyle.formField}>
                <label htmlFor="imageUrl">تصویر محصول:</label>
                <input
                  type="url"
                  id="imageUrl"
                  required
                  placeholder="آدرس تصویر محصول را وارد کنید"
                  ref={imageUrlRef}
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>

              <div className={formStyle.formField}>
                <label htmlFor="body">توضیحات محصول:</label>
                <textarea
                  id="body"
                  required
                  placeholder="توضیحات محصول را وارد کنید"
                  ref={bodyRef}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>

              <div className={formStyle.formField}>
                <label htmlFor="altText">متن تصویر:</label>
                <input
                  type="text"
                  id="altText"
                  required
                  placeholder="توضیحات تصویر را وارد کنید"
                  ref={altTextRef}
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                />
              </div>

              <button type="submit" className={formStyle.submitButton}>
                {editingProduct ? "ثبت ویرایش" : "ارسال"}
              </button>
            </form>
          </div>
        </>
      )}

      <StyleProducts
        productStore={productStore}
        setProductStore={setProductStore}
        onEditProduct={(product) => {
          setEditingProduct(product);
          setTitle(product.title);
          setImageUrl(product.imageUrl);
          setBody(product.body);
          setAltText(product.altText);
          setShowForm(true);
        }}
      />
    </>
  );
};

export default Product;
