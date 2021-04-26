import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { FITLER_LIST } from './FilterListUser';
import { SUBFITLER_LIST } from './SubFilterList';

const DELETE_FILTER_MUTATION = gql`
  mutation DELETE_FILTER_MUTATION($id: ID!) {
    deleteFilter(id: $id) {
      id
    }
  }
`;
const DELETE_SUBFILTER_MUTATION = gql`
  mutation DELETE_SUBFILTER_MUTATION($id: ID!) {
    deleteSubfilter(id: $id) {
      id
    }
  }
`;

class DeleteItem extends Component {
  update = (cache, payload) => {
    //read cache
    const data = cache.readQuery({ query: FITLER_LIST });
    // console.log(data, payload);
    data.filters = data.filters.filter(
      (filter) => filter.id !== payload.data.deleteFilter.id
    );
    cache.writeQuery({ query: FITLER_LIST, data });
  };
  update2 = (cache, payload) => {
    //read cache
    const data = cache.readQuery({ query: SUBFITLER_LIST });
    data.subfilters = data.subfilters.filter(
      (filter) => filter.id !== payload.data.deleteSubfilter.id
    );
    cache.writeQuery({ query: SUBFITLER_LIST, data });
  };
  render() {
    const { id, code } = this.props;
    return (
      <>
        {code === 'filter' ? (
          <Mutation
            mutation={DELETE_FILTER_MUTATION}
            variables={{ id: id }}
            update={this.update}
          >
            {(deleteItem, { error }) => (
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to delelte this?')) {
                    deleteItem().catch((err) => {
                      alert(err.message);
                    });
                  }
                }}
              >
                {this.props.children}
              </button>
            )}
          </Mutation>
        ) : (
          <Mutation
            mutation={DELETE_SUBFILTER_MUTATION}
            variables={{ id: id }}
            update={this.update2}
          >
            {(deleteItem, { error }) => (
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to delelte this?')) {
                    deleteItem().catch((err) => {
                      alert(err.message);
                    });
                  }
                }}
              >
                {this.props.children}
              </button>
            )}
          </Mutation>
        )}
      </>
    );
  }
}

export default DeleteItem;
