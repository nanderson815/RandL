import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { AUTH_TOKEN } from '../Constants';
import { Redirect } from 'react-router';
import gql from 'graphql-tag';
import { Query } from "react-apollo";




const Account = (props) => {

    const GET_CUSTOMER_INFO = gql`
query customer ($customerAccessToken: String!){
    customer(customerAccessToken: $customerAccessToken) {
    lastName
    firstName
    id
    email
    defaultAddress {
      address1
      address2
      city
      zip
      country
    }
  }
}
`;
    const customerInfo = (token) => (
        <Query query={GET_CUSTOMER_INFO} variables={{ customerAccessToken: token.toString() }}>
            {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return `Error! ${error}`;

                console.log(data);
                return (
                    <div>
                        <h1>{data.customer.firstName} {data.customer.lastName}</h1>
                        <h2>{data.customer.email}</h2>
                        <h4>{data.customer.defaultAddress ? data.customer.defaultAddress.address1 : null}</h4>
                        <h4>{data.customer.defaultAddress ? data.customer.defaultAddress.address2 : null}</h4>
                        <h4>{data.customer.defaultAddress ? data.customer.defaultAddress.city : null}</h4>
                        <h4>{data.customer.defaultAddress ? data.customer.defaultAddress.zip : null}</h4>

                    </div>
                );
            }}
        </Query>
    );



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
                        {customerInfo(sessionStorage.getItem(AUTH_TOKEN))}

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