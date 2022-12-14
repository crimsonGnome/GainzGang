import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import User from './User';
import CartStyles from './styles/CartStyles';
import Supreme, { FilterHeader } from './styles/Supreme';
import regExpressionName from '../lib/regExpressionName';
import CloseButton from './styles/CloseButton';
import SickButton from './styles/SickButton';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import TakeMyMoney from './TakeMyMoney';
import ShippingAdress from './ShippingAdress';
import { LogoStamp2 } from './styles/Logo';

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => (
    <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>,
});
const Cart = () => {
  return (
    <Composed>
      {({ user, toggleCart, localState }) => {
        const me = user.data.me;
        if (!me) return null;
        return (
          <CartStyles open={localState.data.cartOpen}>
            <header>
              <CloseButton onClick={toggleCart} title="close">
                &times;
              </CloseButton>
              <FilterHeader>
                <Supreme>{regExpressionName(me.name)} Cart</Supreme>
              </FilterHeader>
              <div className="juicyMargin">
                <ShippingAdress />
                <p>
                  You have {me.cart.length} Item
                  {me.cart.length === 1 ? '' : 's'} in you cart.
                </p>
              </div>
            </header>
            <div className="juicyMargin">
              <ul className="cart">
                {me.cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </ul>

              <footer>
                {me.cart.length !== 0 ? (
                  <>
                    {me.cart.length !== 0 && (
                      <p>{formatMoney(calcTotalPrice(me.cart))}</p>
                    )}
                    <TakeMyMoney>
                      <SickButton>Checkout</SickButton>
                    </TakeMyMoney>
                  </>
                ) : (
                  <span> </span>
                )}
              </footer>
            </div>
            <div className="pictureHolder">
              <LogoStamp2></LogoStamp2>
            </div>
          </CartStyles>
        );
      }}
    </Composed>
  );
};

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
