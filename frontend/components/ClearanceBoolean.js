import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import User from './User';
import { PAGINATION_QUERY } from './Pagination';
import { ALL_ITEMS_QUERY } from './Home';

const CLEARANCE_VIEW_MUTATION = gql`
  mutation updateClearanceBoolean($clearanceBoolean: Boolean) {
    updateClearanceBoolean(clearanceBoolean: $clearanceBoolean) {
      id
      clearanceBoolean
    }
  }
`;

const ClearanceBooleanView = (props) => (
  <ul>
    <User>
      {({ data: { me } }) => {
        return <ClearanceBoolean me={me}></ClearanceBoolean>;
      }}
    </User>
  </ul>
);

class ClearanceBoolean extends Component {
  state = {
    clearanceBoolean: this.props.me.clearanceBoolean,
  };

  handleChange = (updateClearanceBoolean) => {
    let val = !this.state.clearanceBoolean;
    this.setState({ clearanceBoolean: val }, updateClearanceBoolean);
  };

  render() {
    return (
      <Mutation
        mutation={CLEARANCE_VIEW_MUTATION}
        variables={{
          clearanceBoolean: this.state.clearanceBoolean,
        }}
        refetchQueries={[{ query: PAGINATION_QUERY, ALL_ITEMS_QUERY }]}
      >
        {(updateClearanceBoolean, { loading, error }) => (
          <>
            {error && <Error error={error} />}
            <li>
              <input
                disabled={loading}
                id="clearanceBoolean"
                name="clearanceBoolean"
                type="checkbox"
                checked={this.state.clearanceBoolean}
                onChange={(e) => this.handleChange(updateClearanceBoolean)}
              />
              Clearance Only
            </li>
          </>
        )}
      </Mutation>
    );
  }
}

export default ClearanceBooleanView;
export { ClearanceBoolean };
export { CLEARANCE_VIEW_MUTATION };
