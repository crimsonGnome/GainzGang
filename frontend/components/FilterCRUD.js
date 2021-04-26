import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import { FITLER_LIST } from './FilterListUser';
import { SUBFITLER_LIST } from './SubFilterList';
import FilterDeleteButton from './FilterDeleteButton';
import FilterAddButton from './FilterAddButton';
import gql from 'graphql-tag';
import SickButton from './styles/SickButton';
import styled from 'styled-components';

const Filterlayout = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  label input {
    width: 100%;
    font-size: 1.5rem;
  }

  button {
    background: ${(props) => props.theme.primary};
    color: white;
  }
`;
class Filter extends Component {
  render() {
    const { code } = this.props;

    return (
      <>
        {code === 'filter' ? (
          <Query query={FITLER_LIST}>
            {({ data, loading, error }) => (
              <>
                <Error error={error} />

                <ol>
                  {data.filters.map((filter) => (
                    <FilterCRUD key={filter.id} filter={filter} code={code} />
                  ))}
                  <FilterAddButton code={code} />
                </ol>
              </>
            )}
          </Query>
        ) : (
          <Query query={SUBFITLER_LIST}>
            {({ data, loading, error }) => (
              <>
                <Error error={error} />

                <ol>
                  {data.subfilters.map((filter) => (
                    <FilterCRUD key={filter.id} filter={filter} code={code} />
                  ))}
                  <FilterAddButton code={code} />
                </ol>
              </>
            )}
          </Query>
        )}
      </>
    );
  }
}
const UPDATE_SUBFILTER_LIST = gql`
  mutation updateSubfilter($filterId: ID!, $filter: String!) {
    updateSubfilter(id: $filterId, filter: $filter) {
      id
      subfilter
    }
  }
`;

const UPDATE_FILTER_LIST = gql`
  mutation updateFilter($filterId: ID!, $filter: String!) {
    updateFilter(id: $filterId, filter: $filter) {
      id
      filter
    }
  }
`;

class FilterCRUD extends Component {
  state = {
    filter: this.props.filter.filter,
    subfilter: this.props.filter.subfilter,
    EditView: false,
    code: this.props.code,
  };
  handleChange = (e) => {
    const { value } = e.target;
    if (this.state.code === 'filter') {
      this.setState({ filter: value });
    } else {
      this.setState({ subfilter: value });
    }
  };

  updateAndCloseEdit = (updateFilter) => {
    let val = !this.state.EditView;
    this.setState({ EditView: val }, updateFilter);
  };
  openEdit = () => {
    this.setState({ EditView: true });
  };

  render() {
    const filt = this.props.filter;
    const { code } = this.props;

    return (
      <>
        {code === 'filter' ? (
          <>
            {this.state.EditView === false ? (
              <Filterlayout>
                <div>{filt.filter}</div>
                <button onClick={this.openEdit}>
                  <i className="fas fa-pencil-alt" />
                </button>
                <FilterDeleteButton id={filt.id} code={code}>
                  &times;
                </FilterDeleteButton>
              </Filterlayout>
            ) : (
              <Mutation
                mutation={UPDATE_FILTER_LIST}
                variables={{
                  filterId: this.props.filter.id,
                  filter: this.state.filter,
                }}
              >
                {(updateFilter, { loading, error }) => (
                  <Filterlayout>
                    <Error error={error} />
                    <label htmlFor={`${filt.id}-filter-${filt.filter}`}>
                      <input
                        id={`${filt.id}-filter-${filt.filter}`}
                        type="text"
                        defaultValue={this.state.filter}
                        onChange={this.handleChange}
                      />
                    </label>

                    <SickButton
                      type="button"
                      disabled={loading}
                      onClick={(e) => this.updateAndCloseEdit(updateFilter)}
                    >
                      Updat{loading ? 'ing' : 'e'}
                    </SickButton>
                  </Filterlayout>
                )}
              </Mutation>
            )}
          </>
        ) : (
          <>
            {this.state.EditView === false ? (
              <Filterlayout>
                <div>{filt.subfilter}</div>
                <button onClick={this.openEdit}>
                  <i className="fas fa-pencil-alt" />
                </button>
                <FilterDeleteButton id={filt.id} code={code}>
                  &times;
                </FilterDeleteButton>
              </Filterlayout>
            ) : (
              <Mutation
                mutation={UPDATE_SUBFILTER_LIST}
                variables={{
                  filterId: this.props.filter.id,
                  filter: this.state.subfilter,
                }}
              >
                {(updateSubfilter, { loading, error }) => (
                  <Filterlayout>
                    <Error error={error} />
                    <label htmlFor={`${filt.id}-filter-${filt.subfilter}`}>
                      <input
                        id={`${filt.id}-filter-${filt.subfilter}`}
                        type="text"
                        defaultValue={this.state.subfilter}
                        onChange={this.handleChange}
                      />
                    </label>

                    <SickButton
                      type="button"
                      disabled={loading}
                      onClick={(e) => this.updateAndCloseEdit(updateSubfilter)}
                    >
                      Updat{loading ? 'ing' : 'e'}
                    </SickButton>
                  </Filterlayout>
                )}
              </Mutation>
            )}
          </>
        )}
      </>
    );
  }
}

export default Filter;
export { Filterlayout };
