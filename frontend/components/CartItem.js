import React from 'react';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }) => {
  //first Check if that item exits
  if (!cartItem.item)
    return (
      <CartItemStyles>
        <p>This Item has been removed</p>
        <RemoveFromCart id={cartItem.id} />
      </CartItemStyles>
    );

  return (
    <CartItemStyles>
      <img width="100" src={cartItem.item.image[0]} alt={cartItem.item.title} />
      <div className="cart-item-details">
        <h3>
          {cartItem.item.title} <span> - {cartItem.size}</span>
        </h3>

        <p>
          {cartItem.item.onClearance === true ? (
            <>
              {formatMoney(cartItem.item.clearancePrice * cartItem.quantity)}
              {' - '}
              <em>
                {cartItem.quantity} &times;{' '}
                {formatMoney(cartItem.item.clearancePrice)} each
              </em>
            </>
          ) : (
            <>
              {formatMoney(cartItem.item.price * cartItem.quantity)}
              {' - '}
              <em>
                {cartItem.quantity} &times; {formatMoney(cartItem.item.price)}{' '}
                each
              </em>
            </>
          )}
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CartItem;
