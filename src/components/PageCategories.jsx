import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import data from "./json/data.json";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CancelIcon from "@mui/icons-material/Cancel";

function PageCategories({ products, filter, basket, setBasket, total }) {
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");

  const searchInput = (e) => {
    let value = e.target.value;
    setInputValue(value.toLowerCase());
  };

  let product = products.filter((item) =>
    item.title.toLowerCase().includes(inputValue)
  );

  function notFound() {
    return (
      <div className="notInput mx-auto text-center">
        <img
          style={{ width: "35vw" }}
          srcSet="https://www.pngitem.com/pimgs/m/164-1646974_error-image-oops-looks-like-the-page-is.png"
          alt=""
        />
        <p>
          <b>Aradığınız ürünü bulamadık... :(</b>
        </p>
      </div>
    );
  }

  let newValue = products.filter((item) => {
    return item.title.toLowerCase().includes(inputValue);
  });


  const addBasket = (product) => {
    let basketProduct = {
      id: product.id,
      amount: 1,
      img: product.img,
      name: product.title,
    };
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket, basketProduct]);
    }
  };

  const removeBasket = (product) => {
    const currentBasket = basket.find((item) => item.id === product.id);

    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );

    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      currentBasket.amount += 1;
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <div>
      <div className="container-lg mt-2 justify-content-around">
        <img
          style={{ width: 400, borderRadius: "6px" }}
          srcSet="https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png"
          alt=""
        />

        <div className=" d-flex align-items-center">
          <h6 className="mt-4 col-3">
            Kategoriler{" "}
            <span className="categoryText">
              {category === "" ? " " : " > " + category}
            </span>
          </h6>
          <span className="col-6" style={{ position: "relative" }}>
            <input
              onChange={searchInput}
              placeholder="Ürün ara"
              style={{ padding: "0px 10px", transition: "500ms" }}
            ></input>
          </span>
        </div>

        <div className="row mx-auto">
          <div className="product-categories mx-auto col-3 d-grid">
            {data.map((item, index) => {
              return (
                <span
                  key={index}
                  className="category d-flex"
                  onClick={() => {
                    filter(item.category);
                    setCategory(item.category);
                  }}
                >
                  <img alt="" srcSet={item.img} />
                  <h6 className="ms-3 mt-1"> {item.title} </h6>
                </span>
              );
            })}
          </div>
          <div className="list-products mx-auto col-6">
            {newValue.length > 0
              ? product.map((item, index) => {
                  return (
                    <div className="card" key={index}>
                      <AddCircleOutlinedIcon
                        onClick={() => addBasket(item)}
                        sx={{
                          position: "absolute",
                          transition: "150ms",
                          right: "0",
                          top: 0,
                          color: "#5d3ebc",
                          ":hover": {
                            color: "green",
                          },
                        }}
                      />
                      <div className="hover">
                        <img className="img" srcSet={item.img} alt="kk" />
                        <span>
                          <h6 className="mt-3">{item.title}</h6>
                          <h6>{item.brand}</h6>
                          <h6 className="itemPrice">{item.price}₺</h6>
                        </span>
                      </div>
                    </div>
                  );
                })
              : notFound()}
          </div>
          <div className="col-3 mainBasket">
            <div className="showBasket">
              <div className="d-grid">
                {basket.length < 1 ? (
                  <div>
                    <img
                      style={{ width: "100%", height : 250 }}
                      alt="kkkkk"
                      srcSet="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613108-3020773.png"
                    />
                    <p className="text-center" style={{color : "#4c3398"}}>
                      <b>Lütfen Sepete Ürün Ekle...</b>
                    </p>
                  </div>
                ) : (
                  <button className="disabledBtn mt-1" disabled={true}>
                    {" "}
                    Ödeme için Giriş Yap{" "}
                  </button>
                )}
                <span className="text-center">
                  {total > 0 ? <b>Toplam tutar : {total}₺ </b> : " "}
                </span>
              </div>
              {basket.map((item) => (
                <div
                  className="basketCard mx-auto"
                  key={item.id}
                  CloseIcon
                  style={{
                    width: "100%",
                    display: "flex",
                    height: "100px",
                    boxShadow: "rgba(99, 48, 252, 0.1) 0px 6px 16px",
                  }}
                >
                  <div className="cardContent">
                    <div className="x">
                      <CancelIcon onClick={() => removeBasket(item)} />
                    </div>

                    <span>
                      <b>{item.amount} </b> adet {item.name}
                    </span>
                    <img style={{ width: 45 }} alt="n" src={item.img} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default PageCategories;
