import React, { Component } from 'react';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Account from './pages/Account';
import About from './pages/About';
import Footer from './components/Footer';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from './components/Loading/Loading';

import {
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate,
  addVariantToCart,
  updateLineItemInCart,
  removeLineItemInCart,
  associateCustomerCheckout
} from './checkout';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isTop: true,
      isMobile: false,
      isOpen: false,
      isCartOpen: false,
      isCustomerAuthOpen: false,
      isNewCustomer: false,
      products: [],
      checkout: { lineItems: { edges: [] } }
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.openCustomerAuth = this.openCustomerAuth.bind(this);
    this.addVariantToCart = addVariantToCart.bind(this);
    this.updateLineItemInCart = updateLineItemInCart.bind(this);
    this.removeLineItemInCart = removeLineItemInCart.bind(this);
    this.showAccountVerificationMessage = this.showAccountVerificationMessage.bind(this);
    this.associateCustomerCheckout = associateCustomerCheckout.bind(this);
    this.toggleNavbarPanel = this.toggleNavbarPanel.bind(this);
  }

  componentWillMount() {
    this.props.createCheckout({
      variables: {
        input: {}
      }
    }).then((res) => {
      this.setState({
        checkout: res.data.checkoutCreate.checkout
      });
    });
  }

  componentDidMount() {
    this.setNavbar();


    window.addEventListener("resize", () => {
      this.setNavbar();
    });


    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 25;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      shop: PropTypes.object,
    }).isRequired,
    createCheckout: PropTypes.func.isRequired,
    checkoutLineItemsAdd: PropTypes.func.isRequired,
    checkoutLineItemsUpdate: PropTypes.func.isRequired
  }

  setNavbar() {
    let currentHideNav = (window.innerWidth <= 1076);
    if (currentHideNav !== this.state.isMobile) {
      this.setState({ isMobile: currentHideNav });
    }
  }

  handleCartOpen() {
    this.setState({
      isCartOpen: true,
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
      isOpen: false
    });
  }

  openCustomerAuth(event) {
    if (event.target.getAttribute('data-customer-type') === "new-customer") {
      this.setState({
        isNewCustomer: true,
        isCustomerAuthOpen: true
      });
    } else {
      this.setState({
        isNewCustomer: false,
        isCustomerAuthOpen: true
      });
    }
  }

  showAccountVerificationMessage() {
    this.setState({ accountVerificationMessage: true });
    setTimeout(() => {
      this.setState({
        accountVerificationMessage: false
      })
    }, 5000);
  }


  toggleNavbarPanel() {
    const isOpen = !this.state.isOpen;
    this.setState({
      isOpen: isOpen
    });
  }

  render() {
    if (this.props.data.loading) {
      return <Loading></Loading>;
    }
    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }

    return (
      <div className="App">
        <div className="Flash__message-wrapper">
          <p className={`Flash__message ${this.state.accountVerificationMessage ? 'Flash__message--open' : ''}`}>We have sent you an email, please click the link included to verify your email address</p>
        </div>


        <Router>

          <div>
            <Navbar
              isMobile={this.state.isMobile}
              isTop={this.state.isTop}
              isOpen={this.state.isOpen}
              click={() => this.setState({ isCartOpen: true })}
              toggle={this.toggleNavbarPanel}
              close={this.handleCartClose}
              products={this.props.data.shop.products.edges}
              openCustomerAuth={this.openCustomerAuth}
            />

            <Route exact path="/"
              render={(props) => <Home {...props}
                checkout={this.state.checkout}
                isCartOpen={this.state.isCartOpen}
                handleCartClose={this.handleCartClose}
                updateQuantityInCart={this.updateQuantityInCart}
                removeLineItemInCart={this.removeLineItemInCart}
              />}
            />
            <Route
              exact path='/shop'
              render={(props) => <Shop {...props}
                client={this.props.client}
                products={this.state.products}
                addVariantToCart={this.addVariantToCart}
                checkout={this.state.checkout}
                isCartOpen={this.state.isCartOpen}
                handleCartClose={this.handleCartClose}
                updateQuantityInCart={this.updateQuantityInCart}
                removeLineItemInCart={this.removeLineItemInCart}
                data={this.props.data}
              />}
            />

            <Route
              exact path="/login"
              render={(props) => <Login {...props}
                checkout={this.state.checkout}
                associateCustomerCheckout={this.associateCustomerCheckout}
                showAccountVerificationMessage={this.showAccountVerificationMessage}
              />}

            />

            <Route
              exact path='/account'
              render={(props) => <Account {...props}
                client={this.props.client}
                data={this.props.data}
              />}
            />

            <Route
              exact path='/about'
              render={(props) => <About {...props}
              />}
            />
          </div>

        </Router>

        <Cart
          removeLineItemInCart={this.removeLineItemInCart}
          updateLineItemInCart={this.updateLineItemInCart}
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          customerAccessToken={this.state.customerAccessToken}
        />
        <Footer></Footer>
      </div>
    );
  }
}

const query = gql`
  query query {
    shop {
      name
      description
      products(first:20) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            description 
            options {
              id
              name
              values
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
            images(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

const AppWithDataAndMutation = compose(
  graphql(query),
  graphql(createCheckout, { name: "createCheckout" }),
  graphql(checkoutLineItemsAdd, { name: "checkoutLineItemsAdd" }),
  graphql(checkoutLineItemsUpdate, { name: "checkoutLineItemsUpdate" }),
  graphql(checkoutLineItemsRemove, { name: "checkoutLineItemsRemove" }),
  graphql(checkoutCustomerAssociate, { name: "checkoutCustomerAssociate" })
)(App);

export default AppWithDataAndMutation;
