import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import data from "./json/data.json";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CancelIcon from "@mui/icons-material/Cancel";

function PageCategories({ products, filter, basket, setBasket, total, setShowProduct }) {
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
          style={{ width: "33vw" }}
          srcSet="https://images.all-free-download.com/images/graphicwebp/error_404_page_not_found_6845510.webp"
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

  let productHandler = (item) => {
    setShowProduct(item);
  };


  return (
    <div>
      <div className="container-lg mt-2 ">
        <img
          style={{ width: "30vw", borderRadius: "6px" }}
          srcSet="https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png"
          alt=""
        />

        <div className=" d-flex align-items-center">
          <h6 className="mt-4 col-3">
            Kategoriler
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
          <div className="product-categories col-3">
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
                  <span className="mt-1"> {item.title} </span>
                </span>
              );
            })}
          </div>

          <div className="list-products mx-auto col-6">
            {newValue.length > 0
              ? product.map((item, index) => {
                  return (
                    <div className="card" key={index}> 
                    <div className="totalCard" style={{ display : "grid", width : "100%", height : "100%"}}>
                    <NavLink
                        to="/product"
                        onClick={() => productHandler(item)}
                        style={{ textDecoration : "none"}}
                      >
                        <div
                        onClick={() => productHandler(item)}
                          className="hover"
                          style={{}}
                        >
                          <img className="img mt-4" srcSet={item.img} alt="kk" />
                          <span>
                            <h6 className="mt-3">{item.title}</h6>
                            <h6>{item.brand}</h6>
                            <h6 className="itemPrice">{item.price}₺</h6>
                          </span>
                        </div>
                      </NavLink>
                    </div>
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
                    </div>
                  );
                })
              : notFound()}
          </div>
          <div className="col-3 mainBasket mx-auto">
            <div className="progress mt-1">
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  background: "#4c3398",
                  width: basket.length * 10 + "%",
                }}
                aria-label="Basic example"
                aria-valuenow={filter.length}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <b>{basket.length}</b>
              </div>
            </div>
            <div className="showBasket">
              <div className="d-grid">
                {basket.length < 1 ? (
                  <div>
                    <img
                      style={{ width: "100%", height: 250 }}
                      alt="kkkkk"
                      srcSet="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613108-3020773.png"
                    />
                    <p className="text-center" style={{ color: "#4c3398" }}>
                      <b>Lütfen Sepete Ürün Ekle...</b>
                    </p>
                  </div>
                ) : (
                  <button className="disabledBtn mt-1" disabled={true}>
                    Ödeme için Giriş Yap
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
