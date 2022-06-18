import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg"
            rating={3}
          />
          <Product
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
            price={502.88}
            image="https://m.media-amazon.com/images/I/716kTJI4jtL._SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple Watch Series 3 [GPS 42mm] Smart Watch w/ Silver Aluminum Case & White Sport Band. Fitness & Activity Tracker, Heart Rate Monitor, Retina Display, Water Resistant "
            price={268.12}
            image="https://m.media-amazon.com/images/I/71gsjKxyfjL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Grey) "
            price={29.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={3}
          />
          <Product
            title="Apple iPad Pro (12.9-inch, Wi-Fi, 64GB) - Silver (3rd Generation) "
            price={598.99}
            image="https://m.media-amazon.com/images/I/71+ud9p+tYL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz  "
            price={1147.36}
            image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
