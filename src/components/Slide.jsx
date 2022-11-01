import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Slide() {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    FR: "+40",
    IT: "+70",
  };

  const HiddenArrow = () => {
    return false;
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <HiddenArrow />,
  };

  return (
    <div className="slider mx-auto">
      <div className="container-lg  position-relative">
        <div className=" left-content">
          <img
            alt="getir"
            style={{
              position: "absolute",
              zIndex: "999",
              top: "12%",
              width: "175px",
            }}
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
          />
          <h1 className="ayDoorInMinutes">Dakikalar İçinde Kapınızda</h1>
        </div>
        <div className=" container right-content">
          <div className="card">
            <h6 className="mt-4">Giriş yap veya kayıt ol</h6>
            <div className="d-flex justify-content-center align-items-center ms-4 mt-1">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                placeholder="Select Language"
                selected={selected}
                className="flags"
              />
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Telefon Numarası"
                  variant="outlined"
                  className="inputSlider"
                  min="1"
                  max="5"
                />
              </Box>
            </div>
            <Button variant="contained" className="buttonPhoneEnter mt-2 ms-5">
              Telefon numarası ile devam et
            </Button>
          </div>
        </div>
      </div>

    

      <Slider {...settings}>
        <div className="imgSection">
          <img
            alt=""
            style={{
              backgroundImage: `linear-gradient(90deg, #5d3ebc,#5d3ebc00 100%),
              url('https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg')`,
            }}
          />
        </div>
        <div className="imgSection">
          <img
            alt=""
            style={{
              backgroundImage: `linear-gradient(90deg, #5d3ebc,#5d3ebc00 100%),
              url('https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg')`,
            }}
          />
        </div>
        <div className="imgSection">
          <img
            alt=""
            style={{
              backgroundImage: `linear-gradient(90deg, #5d3ebc,#5d3ebc00 100%),
              url('https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg')`,
            }}
          />
        </div>
        <div className="imgSection">
          <img
            alt=""
            style={{
              backgroundImage: `linear-gradient(90deg, #5d3ebc,#5d3ebc00 100%),
              url('https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg')`,
            }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
