import React, { Component } from "react";
import { AUTH_TOKEN } from "../Constants";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';




const customerCreate = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
      }
    }
  }
`;

const customerAccessTokenCreate = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      userErrors {
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;


class Cart extends Component {

    state = {
        login: true, // switch between Login and SignUp
        email: '',
        password: '',
        errorMessage: null,
    }


    onChangeHandler = (e) => {
        let field = e.target.name
        this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(email, password) {
        this.resetErrorMessages();
        if (!this.state.login) {
            this.createCustomerAccount(email, password)
        } else {
            this.loginCustomerAccount(email, password)
        }
    }

    resetInputFields() {
        this.setState({
            email: '',
            password: ''
        });
    }

    resetErrorMessages() {
        this.setState({
            errorMessage: null,
        });
    }

    createCustomerAccount(email, password) {
        const input = {
            email: email,
            password: password
        }
        this.props.customerCreate(
            {
                variables: { input }
            }).then((res) => {
                console.log(res)
                if (res.data.customerCreate.customer) {
                    this.props.showAccountVerificationMessage();
                } else {
                    res.data.customerCreate.userErrors.forEach(function (error) {
                        if (error.field) {
                            this.setState({
                                errorMessage: error.message
                            });
                        } else {
                            this.setState({
                                errorMessage: error.message
                            });
                        }
                    }.bind(this));
                }
            });
    }

    loginCustomerAccount(email, password) {
        const input = {
            email: email,
            password: password
        }
        this.props.customerAccessTokenCreate(
            {
                variables: { input }
            }).then((res) => {
                console.log(res)
                if (res.data.customerAccessTokenCreate.customerAccessToken) {
                    this.props.associateCustomerCheckout(res.data.customerAccessTokenCreate.customerAccessToken.accessToken);
                } else {
                    res.data.customerAccessTokenCreate.userErrors.forEach(function (error) {
                        if (error.field != null) {
                            this.setState({
                                errorMessage: error.message
                            });
                        } else {
                            this.setState({
                                errorMessage: error.message
                            });
                        }
                    }.bind(this));
                }
            });
    }


    render() {

        const { login, email, password } = this.state
        return (
            <div>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '50vh' }}
                >

                    <Grid item md={4}>
                        <h1>{login ? "Login to your Account" : "Sign Up"}</h1>
                        {this.state.errorMessage &&
                            <div className="error">{this.state.errorMessage}</div>
                        }
                        <form>
                            <TextField
                                id="outlined-email-input"
                                style={{ width: "100%" }}
                                label="Email"
                                type="email"
                                value={email}
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                                onChange={this.onChangeHandler}
                            />
                            <TextField
                                id="outlined-password-input"
                                style={{ width: "100%" }}
                                label="Password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={this.onChangeHandler}
                            />

                            <Button size="large" onClick={() => this.handleSubmit(email, password)}>
                                {login ? 'Login' : 'Create Account'}
                            </Button>
                            <Button size="large" onClick={() => this.setState({ login: !login })}>
                                {login ? 'need to create an account?' : 'already have an account?'}
                            </Button>
                        </form>
                    </Grid>

                </Grid>
            </div >
        )
    }

    _saveUserData = token => {
        sessionStorage.setItem(AUTH_TOKEN, token)
    }
}


const CartWithMutation = compose(
    graphql(customerCreate, { name: "customerCreate" }),
    graphql(customerAccessTokenCreate, { name: "customerAccessTokenCreate" })
)(Cart);

export default CartWithMutation;