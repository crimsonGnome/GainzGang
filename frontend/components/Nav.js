import Link from 'next/link';
import { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NavStyles, { Header, Logo } from './styles/NavStyles';
import NProgress from 'nprogress';
import Signout from './Signout';
import User from './User';
import { TOGGLE_CART_MUTATION } from './Cart';
import CartCount from './CartCount';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};
class Nav extends Component {
  state = {
    ariaControl: false,
  };
  handleChange = () => {
    const val = this.state.ariaControl;
    this.setState({ ariaControl: !val });
  };
  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <Header>
            <div className="mobileNav" aria-expanded={this.state.ariaControl}>
              <button
                className="close"
                aria-expanded={this.state.ariaControl}
                onClick={this.handleChange}
                aria-controls="menu-list"
              >
                <span className="close">×</span>
              </button>
              <Logo aria-expanded={this.state.ariaControl}>
                <span
                  className="logoArea"
                  aria-expanded={this.state.ariaControl}
                >
                  <Link href="/">
                    <div
                      className="img-container"
                      aria-expanded={this.state.ariaControl}
                    >
                      <img
                        className="logo"
                        aria-expanded={this.state.ariaControl}
                        src="/static/gainzGang.png"
                        title="Gainz Gang"
                      />
                    </div>
                  </Link>

                  <div
                    className="textWrap"
                    aria-expanded={this.state.ariaControl}
                  >
                    {me && me.goodGame === true ? (
                      <>
                        <div
                          className="topLogo"
                          aria-expanded={this.state.ariaControl}
                        >
                          <span className="bigG">G</span>
                          <span className="logo-rest">ood</span>
                        </div>
                        <div
                          className="bottomLogo"
                          aria-expanded={this.state.ariaControl}
                        >
                          <span className="bigG">G</span>
                          <span className="logo-rest">ame</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="topLogo"
                          aria-expanded={this.state.ariaControl}
                        >
                          <span className="bigG">G</span>
                          <span className="logo-rest">ainz</span>
                        </div>
                        <div
                          className="bottomLogo"
                          aria-expanded={this.state.ariaControl}
                        >
                          <span className="bigG">G</span>
                          <span className="logo-rest">ang</span>
                        </div>
                      </>
                    )}
                  </div>
                </span>
              </Logo>
              <button
                className="menu"
                onClick={this.handleChange}
                aria-controls="menu-list"
                aria-expanded={this.state.ariaControl}
              >
                <span className="open">
                  <div />
                  <div />
                  <div />
                </span>
              </button>
              <nav aria-expanded={this.state.ariaControl}>
                <NavStyles>
                  <li>
                    <Link href="/">
                      <a onClick={this.handleChange}>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link prefetch href="/about">
                      <a onClick={this.handleChange}>About</a>
                    </Link>
                  </li>

                  {!me && (
                    <>
                      <li>
                        <Link prefetch href="/signup">
                          <a>Sign In</a>
                        </Link>
                      </li>
                    </>
                  )}
                  {me && (
                    <>
                      <li>
                        <Link prefetch href="/orders">
                          <a onClick={this.handleChange}>Orders</a>
                        </Link>
                      </li>

                      <Signout onClick={this.handleChange} />
                      <Mutation mutation={TOGGLE_CART_MUTATION}>
                        {(toggleCart) => (
                          <a onClick={toggleCart}>
                            Cart
                            <CartCount
                              count={me.cart.reduce(
                                (tally, cartItem) => tally + cartItem.quantity,
                                0
                              )}
                            />
                          </a>
                        )}
                      </Mutation>
                    </>
                  )}
                </NavStyles>
              </nav>
            </div>
          </Header>
        )}
      </User>
    );
  }
}

export default Nav;
