import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from 'next/link';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import Head from 'next/head';
import Error from './ErrorMessage';
import AddToCart from './AddToCart';
import User from './User';
import ViewImage from './ViewImages';
import SickButton, {
  SickButtonView,
  LightButtonView,
} from './styles/SickButton';
import { CustomTitle } from './styles/Title';
import DeleteItem from './DeleteItem';
import { ThirtySeventy } from './styles/BodyLayout';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${(props) => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;

  .details {
    margin: 3rem;
    font-size: 2rem;
  }
  @media (${(props) => props.theme.phoneView}) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
      image
      largeImage
      recurringItem
      sizes
      sold
    }
  }
`;

class SingleItem extends Component {
  state = {
    size: '',
    ariaControl: false,
  };
  handleChange = (e) => {
    const { name } = e.target;
    this.setState({ size: name });
  };
  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Item found for {this.props.id}</p>;
          const item = data.item;
          return (
            <SingleItemStyles>
              <Head>
                <title>Gainz Gang | {item.title}</title>
              </Head>
              <ThirtySeventy>
                <div className="details">
                  <CustomTitle className="script">
                    Viewing {item.title}
                  </CustomTitle>
                  <h4>
                    Price: {formatMoney(item.price)} {this.state.size}
                  </h4>
                  <p>{item.description}</p>
                  <div className="sizeList">
                    <LightButtonView>
                      {item.sizes.map((item) => (
                        <button
                          name={item}
                          key={item}
                          onClick={this.handleChange}
                        >
                          {item}
                        </button>
                      ))}
                    </LightButtonView>
                  </div>
                  <User>
                    {({ data: { me } }) => (
                      <>
                        {me && item.recurringItem && this.state.size && (
                          <SickButtonView>
                            <AddToCart id={item.id} size={this.state.size} />
                          </SickButtonView>
                        )}
                        {me && item.recurringItem && !this.state.size && (
                          <SickButtonView>
                            <button>Select Size to add to Cart </button>
                          </SickButtonView>
                        )}
                        {me && !item.recurringItem && item.sold && (
                          <h3>Item has been Sold</h3>
                        )}
                        {me && me.adminView && (
                          <>
                            <Link
                              href={{
                                pathname: 'update',
                                query: { id: item.id },
                              }}
                            >
                              <SickButton>
                                Edit <i className="fas fa-pencil-alt" />
                              </SickButton>
                            </Link>

                            <SickButtonView>
                              <DeleteItem id={item.id}>
                                Delete This Item
                              </DeleteItem>
                            </SickButtonView>
                          </>
                        )}
                        {!me && (
                          <Link href="signup">
                            <SickButton>
                              Please Sign Up to Add to Cart 🛒
                            </SickButton>
                          </Link>
                        )}
                      </>
                    )}
                  </User>
                </div>
                <ViewImage
                  largeImage={item.largeImage}
                  image={item.image}
                  description={item.title}
                />
              </ThirtySeventy>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
export { SINGLE_ITEM_QUERY };
export { SingleItemStyles };
