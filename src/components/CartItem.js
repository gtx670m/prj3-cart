import React, { Component } from 'react';
import * as messages from '../constants/Message';

class CartItem extends Component {
  showSubTotal = (price, quantity) => {
    return price * quantity;
  }
  onChangeQuantity = (product, quantity) => {
    this.props.onChangeQuantity(product, quantity);
    this.props.onChangeMessage(messages.MSG_UPDATE_CART_SUCCESS);
  }
  onRemoveProductInCart = (product) => {
    this.props.onRemoveProductInCart(product);
    this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }
  render() {
    var {product, quantity} = this.props.item;
    return (
      <tr>
        <th scope="row">
            <img src={product.image}
                alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{product.name}</strong>
            </h5>
        </td>
        <td>{product.price}$</td>
        <td className="center-on-small-only">
            <span className="qty">{quantity} </span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick={()=>this.onChangeQuantity(product, -1)}>
                    <a>—</a>
                </label>
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick={()=>this.onChangeQuantity(product, 1)}>
                    <a>+</a>
                </label>
            </div>
        </td>
        <td>{this.showSubTotal(product.price,quantity)}$</td>
        <td>
            <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                title="" data-original-title="Remove item"
                onClick={()=>this.onRemoveProductInCart(product)}>
                X
            </button>
        </td>
    </tr>
    );
  }
}

export default CartItem;
