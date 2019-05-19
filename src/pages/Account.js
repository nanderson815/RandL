import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { AUTH_TOKEN } from '../Constants';
import { Redirect } from 'react-router';
import gql from 'graphql-tag';

const GET_CUSTOMER_INFO = gql`
query customer ($customerAccessToken: String!){
    customer(customerAccessToken: $customerAccessToken) {
    lastName
    firstName
    id
    defaultAddress {
      address1
      address2
      city
      zip
    }
  }
}
`;



const Account = (props) => {
    const authToken = sessionStorage.getItem(AUTH_TOKEN);

    if (authToken) {
        return (
            <div>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '60vh' }}
                >

                    <Grid item xs={11}>
                        <h1>My Account</h1>
                        <Button
                            size="large"
                            color="inherit"
                            onClick={() => {
                                sessionStorage.removeItem(AUTH_TOKEN);
                                props.history.push(`/`);
                            }}>
                            <span className="headerBtn">
                                Logout</span>
                        </Button>
                    </Grid>
                    <Grid item xs={11}>

                    </Grid>

                </Grid>
            </div>
        )
    } else {
        return (
            <Redirect to="/" />
        );
    }

}

export default Account;