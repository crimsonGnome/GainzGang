import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { FITLER_LIST } from './FilterListUser';
import Error from './ErrorMessage';
import SickButton from './styles/SickButton';
import { Filterlayout } from './FilterCRUD';
import { SUBFITLER_LIST } from './SubFilterList';

const ADD_FILTER_MUTATION = gql`
  mutation ADD_FILTER_MUTATION($filter: String!) {
    createFilter(filter: $filter) {
      id
    }
  }
`;
const ADD_SUBFILTER_MUTATION = gql`
  mutation ADD_SUBFILTER_MUTATION($filter: String!) {
    createSubfilter(subfilter: $filter) {
      id
    }
  }
`;

class FilterAddButton extends Component {
  state = {
    newfilter: '',
  };
  handleChange = (e) => {
    this.setState({ newfilter: e.target.value });
  };
  createFilterFunc = async (e, filterFunction) => {
    e.preventDefault();
    const { name } = e.target;

    await filterFunction({ $fitler: this.state.newfilter });
    document.getElementById(name).value = '';
  };

  render() {
    const { code } = this.props;
    return (
      <>
        {code === 'filter' ? (
          <Mutation
            mutation={ADD_FILTER_MUTATION}
            variables={{
              filter: this.state.newfilter,
            }}
            refetchQueries={[{ query: FITLER_LIST }]}
          >
            {(createFilter, { loading, error }) => (
              <>
                <h4>New Filter</h4>
                <Filterlayout>
                  <Error error={error} />

                  <label htmlFor="newFilter">
                    <input
                      id="newFilter"
                      type="text"
                      value={this.state.filter}
                      onChange={this.handleChange}
                    />
                  </label>

                  <SickButton
                    type="button"
                    disabled={loading}
                    name="newFilter"
                    onClick={(e) => this.createFilterFunc(e, createFilter)}
                  >
                    Updat{loading ? 'ing' : 'e'}
                  </SickButton>
                </Filterlayout>
              </>
            )}
          </Mutation>
        ) : (
          <Mutation
            mutation={ADD_SUBFILTER_MUTATION}
            variables={{
              filter: this.state.newfilter,
            }}
            refetchQueries={[{ query: SUBFITLER_LIST }]}
          >
            {(createSubFilter, { loading, error }) => (
              <>
                <h4>New Tag</h4>
                <Filterlayout>
                  <Error error={error} />

                  <label htmlFor="newSubfilter">
                    <input
                      id="newSubfilter"
                      type="text"
                      value={this.state.filter}
                      onChange={this.handleChange}
                    />
                  </label>

                  <SickButton
                    type="button"
                    disabled={loading}
                    name="newSubfilter"
                    onClick={(e) => this.createFilterFunc(e, createSubFilter)}
                  >
                    Updat{loading ? 'ing' : 'e'}
                  </SickButton>
                </Filterlayout>
              </>
            )}
          </Mutation>
        )}
      </>
    );
  }
}

export default FilterAddButton;
