import React, { Component } from 'react';
import Link from 'next/link';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { sRules } from '../lib/regExpressionName';
import Router from 'next/router';
import { set } from 'nprogress';
import User from './User';
import ClearanceBooleanView from './ClearanceBoolean';
import GoodGame from './GoodGame';
import Subfilter from './SubFilterList';
import { LightButtonViewBlock } from './styles/SickButton';
import { PAGINATION_QUERY } from './Pagination';
import { ALL_ITEMS_QUERY } from './Home';

const FITLER_LIST = gql`
  query FITLER_LIST {
    filters(orderBy: createdAt_DESC) {
      id
      filter
    }
  }
`;

const UPDATE_USER_FILTER_LIST = gql`
  mutation updateUserFilter($filter: String!) {
    updateUserFilter(filter: $filter) {
      filter
    }
  }
`;

class FilterListUser extends Component {
  state = {
    ariaControl: false,
  };
  handleChange = () => {
    const val = this.state.ariaControl;
    this.setState({ ariaControl: !val });
  };
  filterChange = () => {
    const val = this.state.ariaControl;
    this.setState({ ariaControl: !val });

    Router.push({
      pathname: '/',
    });
  };
  render() {
    return (
      <>
        <div className="searchBar" aria-expanded={this.state.ariaControl}>
          <h3>Refine Results</h3>
          <GoodGame></GoodGame>
          <h4>Category</h4>
          <Query query={FITLER_LIST}>
            {({ data, loading, error }) => (
              <ul>
                {data.filters.map((filter) => (
                  <Filter key={filter.id} filter={filter} code="filter" />
                ))}
              </ul>
            )}
          </Query>
          <h4>Clearance</h4>
          <ClearanceBooleanView></ClearanceBooleanView>
          <h4>Tags</h4>
          <User>
            {({ data: { me } }) => (
              <>
                {me.subfilters !== '' ? (
                  <Subfilter subfilter={me.subfilters}></Subfilter>
                ) : (
                  <Subfilter></Subfilter>
                )}
              </>
            )}
          </User>

          <LightButtonViewBlock>
            <button onClick={(e) => this.filterChange()} className="search">
              Search
            </button>
          </LightButtonViewBlock>
        </div>
        <span className="filterExpand" aria-expanded={this.state.ariaControl}>
          <LightButtonViewBlock onClick={(e) => this.handleChange()}>
            <button>Expand filter</button>
          </LightButtonViewBlock>
        </span>
      </>
    );
  }
}

class Filter extends Component {
  state = {
    filter: this.props.filter.filter,
    subfilter: this.props.filter.subfilter,
    boolean: null,
  };

  handleFilter = (x) => {
    let val = !this.state.boolean;
    this.setState({ boolean: val }, x);
  };
  userFilterToFilter = (a, b) => {
    if (a.includes(b)) {
      return true;
    }
  };

  render() {
    const filt = this.props.filter;
    const { code } = this.props;
    return (
      <>
        <Mutation
          mutation={UPDATE_USER_FILTER_LIST}
          variables={{
            filter: this.state.filter,
          }}
          refetchQueries={[{ query: PAGINATION_QUERY, ALL_ITEMS_QUERY }]}
        >
          {(updateFilter, { loading, error }) => (
            <User>
              {({ data: { me } }) => (
                <>
                  {this.userFilterToFilter(me.filters, filt.filter) === true ? (
                    <li>
                      <input
                        onClick={(e) => this.handleFilter(updateFilter)}
                        disabled={loading}
                        type="checkbox"
                        defaultChecked
                      />
                      {sRules(filt.filter)}
                    </li>
                  ) : (
                    <li>
                      <input
                        onClick={(e) => this.handleFilter(updateFilter)}
                        disabled={loading}
                        type="checkbox"
                      />
                      {sRules(filt.filter)}
                    </li>
                  )}
                </>
              )}
            </User>
          )}
        </Mutation>
      </>
    );
  }
}

export default FilterListUser;
export { FITLER_LIST };
