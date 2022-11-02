import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import data from "./json/data.json";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

function PageCategories({ products, filter }) {
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");

  const searchInput = (e) => {
    let value = e.target.value;
    setInputValue(value.toLowerCase());
  };

  let filterItems = products.filter((item) =>
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
              ? filterItems.map((item, index) => {
                  return (
                    <div className="card" key={index}>
                      <AddCircleOutlinedIcon
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
          <div className="col-3  bg-success text-center">
            <h1>Sepet</h1>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default PageCategories;
