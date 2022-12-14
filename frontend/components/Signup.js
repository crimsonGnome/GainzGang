import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import {LogoStamp} from './styles/Logo';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
    $shippingAddress: String!
  ) {
    signup(
      email: $email
      name: $name
      password: $password
      shippingAddress: $shippingAddress
    ) {
      id
      email
      name
      shippingAddress
    }
  }
`;

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    shippingAddress: ''
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => {
          return (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                const res = await signup();
                //console.log(res);
                this.setState({
                  name: '',
                  email: '',
                  password: '',
                  shippingAddress: ''
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign up For Account</h2>
                <Error error={error} />
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="shippingAddress">
                  Shipping Address
                  <input
                    type="text"
                    name="shippingAddress"
                    placeholder="shippingAddress"
                    value={this.state.shippingAddress}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Sign Up!</button>
              </fieldset>
              <div className ='pictureHolder'>
              <LogoStamp></LogoStamp>
              </div>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Signup;
export { SIGNUP_MUTATION };
