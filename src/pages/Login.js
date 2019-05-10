import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const Cart = (props) => {

   
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
                    <h1>Login to your Account</h1>

                    <form>
                        <TextField
                            id="outlined-email-input"
                            style={{width: "100%"}}
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password-input"
                            style={{ width: "100%" }}
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        />
                        <Button size="large">Login</Button>
                    </form>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cart;