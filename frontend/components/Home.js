import React, { Component } from 'react';
import BannerImage from './BannerImage';
import Item from './Item';
import { ItemList, TwentyEighty, Center } from './styles/BodyLayout';
import ArticleSection, { HomePage } from './styles/HomeStyles';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Pagination from './Pagination';
import { perPage } from '../config';
import User from './User';
import FilterListNoUser from './FilterListNoUser';
import FilterListUser from './FilterListUser';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int= ${perPage} ) {
    items(where: {AND: [ {sold: false }, {recurringItem: true}]}, first: $first, skip:$skip, orderBy:createdAt_DESC ) {
      id
      title
      price
      description
      image
      largeImage
      onClearance
      clearancePrice

    }
  }
`;

const FILTER_ITEMS_QUERY = gql`
  query FILTER_ITEMS_QUERY($filter: String!, $skip: Int = 0, $first: Int= ${perPage} ) {
    items(where: { OR: [{ title_contains: $filter }, { description_contains: $filter }], AND: [ { sold: false }, {recurringItem: true}]}, first: $first, skip:$skip, orderBy:createdAt_DESC ) {
      id
      title
      price
      description
      image
      largeImage
      onClearance
      clearancePrice
    }
  }
`;

class Home extends Component {
  render() {
    let ItemsQuery = ALL_ITEMS_QUERY;

    if (this.props.filter) {
      ItemsQuery = FILTER_ITEMS_QUERY;
      console.log('filter Items');
    }
    return (
      <HomePage>
        <div
          style={{
            position: 'relative',
            height: 'calc(50vh)',
            overflow: 'hidden',
          }}
        >
          <BannerImage></BannerImage>
        </div>
        <Center>
          {this.props.filter ? (
            <Pagination filter={this.props.filter} page={this.props.page} />
          ) : (
            <Pagination page={this.props.page} />
          )}
        </Center>
        <ArticleSection>
          <TwentyEighty>
            <User>
              {({ data: { me } }) => (
                <>
                  {me && <FilterListUser></FilterListUser>}
                  {!me && <FilterListNoUser></FilterListNoUser>}
                </>
              )}
            </User>

            <Query
              query={ItemsQuery}
              // fetchPolicy="network-only"
              // refetch(); (fetches all the caches)
              fetchPolicy="cache-and-network"
              variables={{
                skip: this.props.page * perPage - perPage,
                filter: this.props.filter,
              }}
            >
              {({ data, error, loading }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error: {error.message}</p>;
                if (!data || data.items.length === 0)
                  return (
                    <ItemList>
                      <p className="noData">no data</p>
                    </ItemList>
                  );
                return (
                  <ItemList>
                    {data.items.map((item) => (
                      <Item item={item} key={item.id} />
                    ))}
                  </ItemList>
                );
              }}
            </Query>
            {/* <ItemList>
              {data.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  logo={item.logo}
                  price={item.price}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ItemList> */}
          </TwentyEighty>
        </ArticleSection>
        <Center>
          {this.props.filter ? (
            <Pagination filter={this.props.filter} page={this.props.page} />
          ) : (
            <Pagination page={this.props.page} />
          )}
        </Center>
      </HomePage>
    );
  }
}

export default Home;
export { ALL_ITEMS_QUERY };
export { FILTER_ITEMS_QUERY };
