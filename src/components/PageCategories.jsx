import React from "react";
import { Outlet } from "react-router-dom";
import data from "./json/data.json";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";


function PageCategories({ products, filter }) {
  return (
    <div>
      <div className="container-lg mt-2 justify-content-around">
        <img
          style={{ width: 400, borderRadius: "6px" }}
          src="https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png"
          alt=""
          srcset=""
        />

        <h6 className="mt-4">Kategoriler</h6>

        <div className="row mx-auto">
          <div className="product-categories mx-auto col-3 d-grid">
            {data.map((item) => {
              return (
               
                <span
                  className="category d-flex"
                  onClick={() => {
                    console.log(item.category);
                    filter(item.category);
                    
                  }}
                >
                  <img alt="" src={item.img} />
                  <h6 className="ms-3 mt-1"> {item.title} </h6>
                </span>
                
              );
            })}
          </div>
          <div className="list-products mx-auto col-6">

            {products.map((item) => {
              return (
                
                <div className="card">
                  <AddCircleOutlinedIcon
                    sx={{
                      position: "absolute",
                      transition: "150ms",
                      right: "0",
                      color: "#5d3ebc",
                      ":hover": {
                        color: "green",
                      },
                    }}
                  />
                  <div className="hover">
                    <img className="img" src={item.img} alt="kk" />
                    <span>
                      <h6 className="mt-3">{item.title}</h6>
                      <h6>{item.brand}</h6>
                      <h6>{item.price}</h6>
                      <h6>{item.category}</h6>
                    </span>
                  </div>
                </div>
                
              );
            })}
          </div>
          <div className="col-3  bg-success text-center">
            <h1>Sepetim</h1>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default PageCategories;
