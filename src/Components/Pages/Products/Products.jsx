import React, { useRef, useState } from "react";
import formStyle from "./Form.module.scss";
import axios from "axios";

const Product = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  // Add Product State
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [body, setBody] = useState("");
  const [altText, setAltText] = useState("");
  const titleRef = useRef();
  const imageUrlRef = useRef();
  const bodyRef = useRef();
  const altTextRef = useRef();
  function addProduct(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/ProductStore', {
     title: title,
      imageUrl: imageUrl,
      body: body,
      altText: altText
    }, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    titleRef.current.value = "";
    imageUrlRef.current.value = "";
    bodyRef.current.value = "";
    altTextRef.current.value = "";
    setShowForm(false);

  }
  return (
    <>
      <button onClick={toggleForm} className={formStyle.toggleButton}>
        افزودن محصول
      </button>
      {showForm && (
        <>
          <div className={formStyle.overlay} onClick={toggleForm}></div>
          <div className={formStyle.glassesFormContainer}>
            <h2 className={formStyle.formTitle}>افزودن محصول</h2>
            <form className={formStyle.glassesForm} onSubmit={(e) => addProduct(e)}>
              <div className={formStyle.formField}>
                <label htmlFor="title">عنوان محصول:</label>
                <input
                  type="text"
                  id="title"
                  placeholder="عنوان محصول را وارد کنید"
                  required
                  ref={titleRef}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className={formStyle.formField}>
                <label htmlFor="imageUrl">تصویر محصول:</label>
                <input
                  type="url"
                  id="imageUrl"
                  placeholder="آدرس تصویر محصول را وارد کنید"
                  required
                  ref={imageUrlRef}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>

              <div className={formStyle.formField}>
                <label htmlFor="body">توضیحات محصول:</label>
                <textarea
                  id="body"
                  placeholder="توضیحات محصول را وارد کنید"
                  required
                  ref={bodyRef}
                  onChange={(e) => setBody(e.target.value)}></textarea>
              </div>

              <div className={formStyle.formField}>
                <label htmlFor="altText">متن تصویر:</label>
                <input
                  type="text"
                  id="altText"
                  placeholder="توضیحات تصویر را وارد کنید"
                  required
                  ref={altTextRef}
                  onChange={(e) => setAltText(e.target.value)}
                />
              </div>

              <button type="submit" className={formStyle.submitButton}>
                ارسال
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
