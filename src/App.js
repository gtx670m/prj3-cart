import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Products from './components/Products';
import Message from './components/Message';
// import Cart from './components/Cart';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductContainer />
            <Message />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
