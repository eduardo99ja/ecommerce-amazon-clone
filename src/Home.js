import React from "react";
import Product from "./Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="The lean StartUp : How Constant Innovation creates"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="12321341"
          title="The lean StartUp : How Constant Innovation creates"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="The lean StartUp : How Constant Innovation creates"
          price={11.96}
          rating={2}
          image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="12321341"
          title="The lean StartUp : How Constant Innovation creates"
          price={11.96}
          rating={1}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="12321341"
          title="The lean StartUp : How Constant Innovation creates"
          price={11.96}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        
      </div>
      <div className="home__row">
      <Product
          id="12321341"
          title="The lean StartUp : How Constant Innovation creates"
          price={11.96}
          rating={4}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
      </div>
    </div>
  );
}

export default Home;
