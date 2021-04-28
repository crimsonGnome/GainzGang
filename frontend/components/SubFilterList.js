import React, { Component } from 'react';
import Link from 'next/link';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { sRules } from '../lib/regExpressionName';
import { set } from 'nprogress';
import User from './User';
import { PAGINATION_QUERY } from './Pagination';
import { ALL_ITEMS_QUERY } from './Home';

const UPDATE_USER_SUBFILTER_LIST = gql`
  mutation updateUserSubfilter($subfilter: String!) {
    updateUserSubfilter(subfilter: $subfilter) {
      subfilter
    }
  }
`;

const SUBFITLER_LIST = gql`
  query SUBFITLER_LIST {
    subfilters(orderBy: createdAt_DESC) {
      id
      subfilter
    }
  }
`;

class Subfilter extends Component {
  state = {
    subfilter: this.props.subfilter,
  };

  handleFilter = (x, z) => {
    if (this.state.subfilter === z) {
      this.setState({ subfilter: 'thisIsNotARealSeachItem_for_Real' }, x);
    } else {
      this.setState({ subfilter: z }, x);
    }
  };
  seeIfChecked = (x) => {
    if (this.state.subfilter === x) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const filt = this.props.filter;
    const { code } = this.props;
    return (
      <>
        <Mutation
          mutation={UPDATE_USER_SUBFILTER_LIST}
          variables={{
            subfilter: this.state.subfilter,
          }}
          refetchQueries={[{ query: PAGINATION_QUERY, ALL_ITEMS_QUERY }]}
        >
          {(updateUserSubfilter, { loading, error }) => (
            <Query query={SUBFITLER_LIST}>
              {({ data, loading, error }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error: {error.message}</p>;
                if (!data || data.items.length === 0)
                  return (
                    <ItemList>
                      <p className="noData">no data</p>
                    </ItemList>
                  );
                return (
                  <ul>
                    <>
                      {data.subfilters.map((filter) => (
                        <li key={filter.id}>
                          <input
                            onChange={(e) =>
                              this.handleFilter(
                                updateUserSubfilter,
                                filter.subfilter
                              )
                            }
                            disabled={loading}
                            type="checkbox"
                            checked={this.seeIfChecked(filter.subfilter)}
                          />
                          {filter.subfilter}
                        </li>
                      ))}
                    </>
                  </ul>
                );
              }}
            </Query>
          )}
        </Mutation>
      </>
    );
  }
}

export default Subfilter;
export { SUBFITLER_LIST };
