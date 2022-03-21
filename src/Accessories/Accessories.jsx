import React from 'react';
import './accessories.css';
import Product from '../Product/Product';

const Accessories = ({ image, name, description, price }) => {
  return (
    <>
      <section className="eccessories">
        <h2>Doplňky</h2>
        <div className="products">
          <Product
            image="glasses.jpg"
            name="Brýle"
            description="Slušivé brýle, v kulatém designu. V modních barvách."
            price="1620"
          />
          <Product
            image="grey-scarf.jpg"
            name="Šedá bavlněná šála"
            description="Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní jednoduché a věčné."
            price="970"
          />
          <Product
            image="blue-handbag.jpg"
            name="Modrá kabelka"
            description="Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti"
            price="3590"
          />
        </div>
      </section>
    </>
  );
};

export default Accessories;
