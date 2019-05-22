import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { AUTH_TOKEN } from '../Constants';
import { Redirect } from 'react-router';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: "0px 10px"
    },
    margin: {
        marginTop: theme.spacing.unit * 15
    }
});


const Account = (props) => {
    const { classes } = props;

    const GET_CUSTOMER_INFO = gql`
query customer ($customerAccessToken: String!){
    customer(customerAccessToken: $customerAccessToken) {
    lastName
    firstName
    id
    email
    orders(first:10){
      edges{
        node{
          orderNumber
          totalPriceV2{
            amount
            currencyCode
          }
          processedAt
          statusUrl
        }
      }
    }
    defaultAddress {
      address1
      address2
      city
      province 
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

                let res = data.customer;
                let address = data.customer.defaultAddress;

                return (
                    <Grid item xs={11} md={4}>
                        <Paper elevation={1} className={classes.root}>
                            <h1>{res.firstName} {res.lastName}</h1>
                            <h2>{res.email}</h2>
                            {address ?
                                <div>
                                    <h3> {address.address1} </h3>
                                    <h3> {address.address2} </h3>
                                    <h3> {address.city}, {address.province} {address.zip} </h3>
                                </div>

                                : null}
                        </Paper>
                    </Grid>
                );
            }}
        </Query>
    );



    const authToken = sessionStorage.getItem(AUTH_TOKEN);
    if (authToken) {

        return (
            <div>
                <Grid
                    className={classes.margin}
                    container
                    // alignItems="center"
                    justify="center"
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

                    <Grid item xs={11} md={7}>
                        <h1>Order History</h1>
                        <Divider></Divider>

                    </Grid>


                    {customerInfo(sessionStorage.getItem(AUTH_TOKEN))}

                </Grid>
            </div>
        )
    } else {
        return (
            <Redirect to="/" />
        );
    }

}



export default withStyles(styles)(Account);