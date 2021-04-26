import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Router from 'next/router';
import Error from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
      sold
      onClearance
      clearancePrice
      goodGame
    }
  }
`;

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
    $sold: Boolean
    $onClearance: Boolean
    $clearancePrice: Int
    $goodGame: Boolean
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
      sold: $sold
      onClearance: $onClearance
      clearancePrice: $clearancePrice
      goodGame: $goodGame
    ) {
      id
      title
      description
      price
      sold
      onClearance
      clearancePrice
      goodGame
    }
  }
`;

class UpdateItem extends Component {
  state = {};
  handleChange = (e) => {
    const { name, type, value } = e.target;
    let val = type === 'number' ? parseFloat(value) : value;
    if (type === 'checkbox') {
      if (
        (this.state.sold === undefined && name === 'sold') ||
        (this.state.recurringItem === undefined && name === 'recurringItem') ||
        (this.state.goodGame === undefined && name === 'goodGame') ||
        (this.state.onClearance === undefined && name === 'onClearance')
      ) {
        val = !e.target.defaultChecked;
      }
      if (this.state.sold !== undefined && name === 'sold') {
        val = !this.state.sold;
      }
      if (this.state.recurringItem !== undefined && name === 'recurringItem') {
        val = !this.state.recurringItem;
      }
    }
    this.setState({ [name]: val });
  };

  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    console.log(`update Item ran`);
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      },
    });

    Router.push({
      pathname: '/product',
      query: { id: res.data.updateItem.id },
    });
  };
  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Item Found for ID {this.props.id}</p>;
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
              {(updateItemMutation, { loading, error }) => (
                <Form onSubmit={(e) => this.updateItem(e, updateItemMutation)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor=" title">
                      Title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="title"
                        required
                        defaultValue={data.item.title}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="price">
                      Price
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="price"
                        required
                        defaultValue={data.item.price}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="clearancePrice">
                      Clearence Price
                      <input
                        type="number"
                        id="clearancePrice"
                        name="clearancePrice"
                        placeholder="clearancePrice"
                        required
                        defaultValue={data.item.clearancePrice}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="sold">
                      Sold Out
                      <input
                        id="sold"
                        name="sold"
                        type="checkbox"
                        defaultChecked={data.item.sold}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="goodGame">
                      Good Game
                      <input
                        id="goodGame"
                        name="goodGame"
                        type="checkbox"
                        defaultChecked={data.item.goodGame}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="onClearance">
                      On Clearance
                      <input
                        id="onClearance"
                        name="onClearance"
                        type="checkbox"
                        defaultChecked={data.item.onClearance}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="description">
                      Description
                      <textarea
                        type="text"
                        id="description"
                        name="description"
                        placeholder="description"
                        required
                        defaultValue={data.item.description}
                        onChange={this.handleChange}
                      />
                    </label>

                    <button type="submit">
                      Sav{loading ? 'ing' : 'e'} Changes
                    </button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };
