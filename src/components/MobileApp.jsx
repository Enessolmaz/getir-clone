import React from "react";

function MobileApp() {
  return (
    <div>
      <div className="container-lg">
        <div className="d-grid">
          <h6>Kampanyalar</h6>
          <div className="offer">
            <img
              srcSet="https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png"
              alt=""
              
              style={{
                maxHeight : "310px",
                height: "27vw",
                width: "100%",
                borderRadius: "12px",
              }}
            />
          </div>
          <div className="mobileGetir mt-3">
            <img
              srcSet="https://cdn.r10.net/editor/94802/1484008395.jpeg"
              alt=""
              
              style={{
                 maxHeight : "310px",
                height: "27vw",
                width: "100%",
                borderRadius: "12px",
              }}
            />
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <div
                className="card text-center"
                style={{
                  border: "none",
                  minHeight: "250px",
                  boxShadow: "rgb(76 62 188 / 10%) 0px 6px 24px",
                }}
              >
                <img
                  srcSet="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
                  alt=""
                 
                  style={{
                    width: "13vw",
                    margin: "auto",
                    objectFit: "contain",
                  }}
                />
                <h6 style={{ color : "#5d3ebc"}}>Her siparişinize bir kampanya</h6>
              </div>
            </div>
            <div className="col-4">
              <div
                className="card text-center"
                style={{
                  border: "none",
                  boxShadow: "rgb(76 62 188 / 10%) 0px 6px 24px",
                  minHeight: "250px",
                }}
              >
                <img
                  srcSet="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
                  alt=""
                  
                  style={{
                    width: "13vw",
                    margin: "auto",
                    objectFit: "contain",
                  }}
                />
                <h6 style={{ color: "#5d3ebc" }}>Dakikalar içinde kapınızda</h6>
              </div>
            </div>
            <div className="col-4">
              <div
                className="card text-center"
                style={{
                  border: "none",
                  boxShadow: "rgb(76 62 188 / 10%) 0px 6px 24px",
                  minHeight: "250px",
                }}
              >
                <img
                  srcSet="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
                  alt=""
                  
                  style={{
                    width: "13vw",
                    margin: "auto",
                    objectFit: "contain",
                  }}
                />
                <h6 style={{ color: "#5d3ebc" }}>Binlerce çeşit mutluluk</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
