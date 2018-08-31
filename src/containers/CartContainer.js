import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as actions from '../actions';

class CartContainer extends Component {
  showCartItem = (cart) => {
    const { onChangeQuantity, onRemoveProductInCart, onChangeMessage } = this.props;
    var result = <tr>
      <td>{Message.MSG_CART_EMPTY}</td>
    </tr>
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onChangeQuantity={onChangeQuantity}
            onRemoveProductInCart={onRemoveProductInCart}
            onChangeMessage={onChangeMessage}
          />
        );
      });
    };
    return result;
  }
  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />
    }
    return result;
  }
  render() {
    console.log(this.props);
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    )
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    }).isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  onChangeQuantity:PropTypes.func.isRequired,
  onRemoveProductInCart:PropTypes.func.isRequired,
  onChangeMessage:PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeQuantity: (product, quantity) => {
      dispatch(actions.actChangeQuantity(product, quantity));
    },
    onRemoveProductInCart: (product) => {
      dispatch(actions.actRemoveProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actions.actChangeMessage(message));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
