import { Button } from "@mui/material";
import React, { useState } from "react";

function ProductPage({ showProduct }) {
  const [product] = useState({ ...showProduct, showProduct });

  // id, img, title , brand , price

  return (
    <div>
      <div className="container-lg">
        <div
          className="component mt-5"
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "",
            height: 400,
          }}
        >
          <div className="container m-3 d-flex">
            <span className="images" style={{ display: "grid" }}>
              <img
                alt="none"
                srcSet={product.img}
                style={{
                      width: 14vw;
                      min-width: 125px;
                      border: 2px solid rgb(203, 189, 255);
                      border-radius: 10px;
                }}
              />
              <img
                alt="none"
                srcSet={product.img}
                style={{
                  width: "75px",
                  height: "75px",
                  border: "2px solid #b6a1ff",
                  borderRadius: "5px",
                }}
              />
            </span>
            <div className="product-detail" style={{ marginLeft: 25 }}>
              <h4 style={{}}>
                {product.brand} {product.title}
              </h4>
              <h4 className="" style={{ color: "#7048ff", marginTop: "43px" }}>
                ₺{product.price}
              </h4>
              <Button
                variant="outlined"
                className="buttonPhoneEnter mt-4 ms-2"
                sx={{ width: "150px" }}
              >
                Sepete Ekle
              </Button>
              <h5 className="bordered" style={{  color: "#7048ff", margin: "15px 0 0 0", padding : "10px", width: "max-content" }}>
                Detaylar
              </h5>
              <div className="product-details">
                <span className="product-detailss" style={{}}>
                  {product.details}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
