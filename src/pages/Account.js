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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const styles = theme => ({
    page: {
        minHeight: "73vh"
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: "10px",
    },
    margin: {
        marginTop: theme.spacing.unit * 25
    },
    table: {
        overflowX: 'auto',
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
          lineItems(first:250){
            edges{
              node{
                quantity
                title
                variant{
                  image{
                    originalSrc
                  }
                  title
                }
              }
            }
          }
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

                const rows = res.orders.edges
                console.log(rows);

                return (

                    <Grid
                        container
                        justify="center"
                    >
                        <Grid item xs={11} sm={8}>
                            <h1>Order History</h1>
                            <Divider></Divider>
                            {res.orders.edges.length <= 0 ?
                                <h3>You have no recent orders.</h3>
                                :
                                <div className={classes.table}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Order Number</TableCell>
                                                <TableCell align="right">Order Date</TableCell>
                                                <TableCell align="right">Status</TableCell>
                                                <TableCell align="right">Total</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell component="th" scope="row">
                                                        <h3>{row.node.orderNumber}</h3>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <h3> {new Date(row.node.processedAt).getDay()}/{new Date(row.node.processedAt).getMonth()}/{new Date(row.node.processedAt).getFullYear()}</h3>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <h3><a target="_blank" href={row.node.statusUrl}>Order Status</a></h3>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <h3>${row.node.totalPriceV2.amount}</h3>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            }


                        </Grid>

                        <Grid item xs={11} sm={3}>
                            <Paper elevation={1} className={classes.root}>
                                <h1>{res.firstName} {res.lastName}</h1>
                                <h3>{res.email}</h3>
                                {address ?
                                    <div>
                                        <h3> {address.address1} </h3>
                                        <h3> {address.address2} </h3>
                                        <h3> {address.city}, {address.province} {address.zip} </h3>
                                    </div>

                                    : null}
                            </Paper>
                        </Grid>
                    </Grid>
                );
            }}
        </Query>
    );



    const authToken = sessionStorage.getItem(AUTH_TOKEN);
    if (authToken) {

        return (
            <div className={classes.page}>
                <Grid
                    className={classes.margin}
                    container
                    direction="column"
                    alignItems="center"
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
                </Grid>




                {customerInfo(sessionStorage.getItem(AUTH_TOKEN))}

            </div>
        )
    } else {
        return (
            <Redirect to="/" />
        );
    }

}



export default withStyles(styles)(Account);