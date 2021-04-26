import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!, $size: String!) {
    addToCart(id: $id, size: $size) {
      id
      quantity
    }
  }
`;

class AddToCart extends React.Component {
  render() {
    const { id, size } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{ id, size }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { loading, error }) => (
          <>
            <Error error={error} />
            <button disabled={loading} onClick={addToCart}>
              Add{loading && 'ing'} To Cart 🛒
            </button>
          </>
        )}
      </Mutation>
    );
  }
}

export default AddToCart;
export { ADD_TO_CART_MUTATION };
