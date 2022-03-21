import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Dresses from './Dresses/Dresses';
import Shoes from './Shoes/Shoes';
import Accessories from './Accessories/Accessories';

const App = () => {
  return (
    <>
      <div className="container">
        <Header title="Fashion" />
        <Dresses />
        <Shoes />
        <Accessories />

        <Footer year="2023" author="Bořutová" />
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
