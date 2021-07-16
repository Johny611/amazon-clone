import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img className="home-image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="prime video" />
       
             <div className="home__row">
               <Product 
                id="123"
                title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                price={50}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SX425_.jpg"   />
               <Product 
                id="123"
                title="AmazonBasics Metal Laptop Computer Monitor Riser Stand - Black"
                price={35}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51yTOWElfyL._AC_SL1500_.jpg"   />
             </div>

             <div className="home__row">
               <Product 
                id="123"
                title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                price={50}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SX425_.jpg"   />
               <Product 
                id="123"
                title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                price={50}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SX425_.jpg"   />
               <Product 
                id="123"
                title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                price={50}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SX425_.jpg"   />
             </div>
             <div className="home__row">
               <Product 
                id="123"
                title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
                price={50}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SX425_.jpg"   />

             </div>

        </div>


    )
}

export default Home;
