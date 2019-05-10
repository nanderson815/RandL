import React, { Component } from "react";
import { AUTH_TOKEN } from "../Constants";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Cart extends Component {
    state = {
        login: true, // switch between Login and SignUp
        email: '',
        password: '',
    }

    onChangeHandler = (e) => {
        let field = e.target.name
        this.setState({
            [field]: e.target.value
        })
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

                            <Button size="large" onClick={() => this._confirm()}>
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
    _confirm = async () => {
        // ... you'll implement this 🔜
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default Cart;