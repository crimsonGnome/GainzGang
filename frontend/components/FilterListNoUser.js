import React, { Component } from 'react';
import Link from 'next/link';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { sRules } from '../lib/regExpressionName';
import { set } from 'nprogress';
import User from './User';

const FITLER_LIST = gql`
  query FITLER_LIST {
    filters(orderBy: createdAt_DESC) {
      id
      filter
    }
  }
`;

class FilterListNoUser extends Component {
  state = {
    airaControl: false,
  };

  handleChange = () => {
    const val = this.state.ariaControl;
    this.setState({ ariaControl: !val });
  };

  render() {
    const pathname = this.props.pathname;
    return (
      <Query query={FITLER_LIST}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;

          return (
            <>
              {/* <button onClick={this.handleChange} aria-controls="menu-list">
                {this.state.ariaControl ? (
                  <span className="close">×</span>
                ) : (
                  <span className="open">
                    <div />
                    <div />
                    <div />
                  </span>
                )}
              </button> */}
              <div className="searchBar" aria-expanded={this.state.ariaControl}>
                <h3>Refine Results</h3>
                <h4>Category</h4>
                <div>Log in for customized Search</div>

                <ul aria-expanded={this.state.ariaControl}>
                  <li>
                    <Link href="/">
                      <a onClick={this.handleChange}>Reset Filter</a>
                    </Link>
                  </li>
                  {data.filters.map((item) => (
                    <li key={item.id}>
                      <Link
                        prefetch
                        href={{
                          pathname: pathname,
                          query: { filter: item.filter },
                        }}
                      >
                        <a>{sRules(item.filter)}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          );
        }}
      </Query>
    );
  }
}

export default FilterListNoUser;
