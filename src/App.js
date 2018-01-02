import React, { Component } from 'react';
import './App.css';
import Categories from './categories'

class App extends Component {
  render() {
    return (
      <div className="container">
        <section className="item discover">
          <img src="https://creditcards.chase.com/R103-011/1030210/images/32616_ChaseFreedomCard_Sticky.png" alt="discover" />
          <ul>
            { Categories.freedom.map((category) =>
              <li className="category">{category}</li>
            ) }
          </ul>
        </section>
        <section className="item freedom">
          <img src="https://www.discover.com/credit-cards/images/cards/CardArt_W_Cash_Plum.png" alt="freedom" />
          <ul>
          { Categories.discover.map((category) =>
            <li className="category">{category}</li>
          ) }
        </ul>
        </section>
        <section className="item cashplus">
          <img src="https://mycard.usbank.com/credit/mycardusb/html/assets/images/cashplus/card-art-cash-plus.png" alt="cashplus"/>        
            <ul>
              <li className="category">2%: {Categories.cashplus.two}</li>
            { Categories.cashplus.five.map((category) =>
              <li className="category">5%: {category}</li>
            ) }
            </ul>
        </section>
      </div>
    );
  }
}

export default App;
