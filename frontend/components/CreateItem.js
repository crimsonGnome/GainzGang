import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Router from 'next/router';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import FeltStyles from './styles/FeltStyles';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: [String]
    $largeImage: [String]
    $recurringItem: Boolean
    $onClearance: Boolean
    $clearancePrice: Int
    $sizes: [String]
    $goodGame: Boolean
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
      recurringItem: $recurringItem
      clearancePrice: $clearancePrice
      onClearance: $onClearance
      sizes: $sizes
      goodGame: $goodGame
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: [],
    largeImage: [],
    tempSize: '',
    sizes: [],
    price: 0,
    goodGame: false,
    clearancePrice: 0,
    onClearance: false,
    sold: false,
    recurringItem: true,
  };
  handleChange = (e) => {
    const { name, type, value } = e.target;
    let val = name === 'price' ? parseFloat(value) : value;
    val = name === 'clearancePrice' ? parseFloat(value) : value;

    if (type === 'checkbox' && name === 'sold') {
      val = name === 'sold' ? !this.state.sold : !this.state.sold;
    }
    if (type === 'checkbox' && name === 'goodGame') {
      val = name === 'goodGame' ? !this.state.goodGame : !this.state.goodGame;
    }
    if (type === 'checkbox' && name === 'recurringItem') {
      val =
        name === 'recurringItem'
          ? !this.state.recurringItem
          : !this.state.recurringItem;
    }
    if (type === 'checkbox' && name === 'onClearance') {
      val =
        name === 'onClearance'
          ? !this.state.onClearance
          : !this.state.onClearance;
    }

    this.setState({ [name]: val });
  };

  uploadFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'GainzGang');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dpnkdclyo/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    let image = [...this.state.image];
    let largeImage = [...this.state.image];
    image.push(file.eager[1].secure_url);
    largeImage.push(file.eager[0].secure_url);

    this.setState({
      image: image,
      largeImage: largeImage,
    });
  };

  addSizes = async (e) => {
    e.preventDefault();
    let sizes = [...this.state.sizes];
    sizes.push(this.state.tempSize);

    this.setState({
      sizes: sizes,
      tempSize: '',
    });
  };

  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Form
            data-test="form"
            onSubmit={async (e) => {
              //Stop the form from submiting
              e.preventDefault();
              //call The mutation
              const res = await createItem();
              //Change them to single item page
              console.log(res);
              Router.push({
                pathname: '/product',
                query: { id: res.data.createItem.id },
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor=" file">
                file
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload an image"
                  required
                  onChange={this.uploadFile}
                />
                <FeltStyles>
                  <div className="images">
                    {this.state.image.map((item) => (
                      <img key={item} src={item} alt="item preview" />
                    ))}
                  </div>
                </FeltStyles>
              </label>
              <label htmlFor=" title">
                Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  required
                  value={this.state.title}
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
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="price">
                Clearence Price
                <input
                  type="number"
                  id="clearancePrice"
                  name="clearancePrice"
                  placeholder="Clearence Price"
                  required
                  value={this.state.clearancePrice}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="sold">
                Sold Out
                <input
                  id="sold"
                  name="sold"
                  type="checkbox"
                  checked={this.state.sold}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="goodGame">
                Good Game
                <input
                  id="goodGame"
                  name="goodGame"
                  type="checkbox"
                  checked={this.state.goodGame}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="recurringItem">
                Recurring Item
                <input
                  id="recurringItem"
                  name="recurringItem"
                  type="checkbox"
                  checked={this.state.recurringItem}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="onClearance">
                On Clearence
                <input
                  id="onClearance"
                  name="onClearance"
                  type="checkbox"
                  checked={this.state.onClearance}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="description">
                Description
                <textarea
                  type="number"
                  id="description"
                  name="description"
                  placeholder="description"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="description">
                Sizes
                <div>
                  {this.state.sizes.map((item) => (
                    <li>{item}</li>
                  ))}
                </div>
                <input
                  type="text"
                  id="tempSize"
                  name="tempSize"
                  placeholder="size input, add Each one"
                  value={this.state.tempSize}
                  onChange={this.handleChange}
                />
                <button onClick={this.addSizes}>Add size</button>
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
