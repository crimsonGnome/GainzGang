import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import User from './User';
import { Logo2 } from './styles/NavStyles';
import { PAGINATION_QUERY } from './Pagination';
import { ALL_ITEMS_QUERY } from './Home';

const GOODGAME_VIEW_MUTATION = gql`
  mutation updateGoodGame($goodGame: Boolean) {
    updateGoodGame(goodGame: $goodGame) {
      id
      goodGame
    }
  }
`;

const GoodGameView = (props) => (
  <ul>
    <User>
      {({ data: { me } }) => {
        return <GoodGameBoolean me={me}></GoodGameBoolean>;
      }}
    </User>
  </ul>
);

class GoodGameBoolean extends Component {
  state = {
    goodGame: this.props.me.goodGame,
  };

  handleChange = (updateGoodGame) => {
    let val = !this.state.goodGame;
    this.setState({ goodGame: val }, updateGoodGame);
  };

  render() {
    return (
      <Mutation
        mutation={GOODGAME_VIEW_MUTATION}
        variables={{
          goodGame: this.state.goodGame,
        }}
        refetchQueries={[{ query: PAGINATION_QUERY, ALL_ITEMS_QUERY }]}
      >
        {(updateGoodGame, { loading, error }) => (
          <>
            {error && <Error error={error} />}
            <li>
              <input
                disabled={loading}
                id="goodGame"
                name="goodGame"
                type="checkbox"
                checked={this.state.goodGame}
                onChange={(e) => this.handleChange(updateGoodGame)}
              />

              <Logo2 aria-expanded={this.state.ariaControl}>
                <span
                  className="logoArea"
                  aria-expanded={this.state.ariaControl}
                >
                  <div
                    className="textWrap"
                    aria-expanded={this.state.ariaControl}
                  >
                    <div>
                      <span className="bigG">G</span>
                      <span className="logo-rest">ood</span>
                    </div>
                    <div className="bottomLogo">
                      <span className="bigG">G</span>
                      <span className="logo-rest">ame</span>
                    </div>
                  </div>
                </span>
              </Logo2>
            </li>
          </>
        )}
      </Mutation>
    );
  }
}

export default GoodGameView;
export { GoodGameBoolean };
export { GOODGAME_VIEW_MUTATION };
