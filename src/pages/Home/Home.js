import React from 'react';
import './Home.css';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Cart from '../../components/Cart';
import PageBreak from "../../components/PageBreak";



const Home = (props) => {
    return (
        <div>
            <Cart
                checkout={props.checkout}
                isCartOpen={props.isCartOpen}
                handleCartClose={props.handleCartClose}
                updateQuantityInCart={props.updateQuantityInCart}
                removeLineItemInCart={props.removeLineItemInCart}
            />
            <header className="header">
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className="center">

                    <Grid item
                        xs={8}
                        md={6}
                        className="center mt-50">

                        <Grid item className="homeTxt">
                            <h1 className="homeMessage">Pretty enough for a lunch date. </h1>
                            <h1 className="homeMessage"> Practical enough for a board meeting.</h1>
                            <h2 className="homeMessage">
                            </h2>
                        </Grid>

                        <Grid item className="homeMessage">
                            <Link className="headerLink" to="/shop">
                                <div className="homeBtn">
                                    <span className="homeBtnTxt">Shop Now</span>
                                </div>
                            </Link>
                        </Grid>
                    </Grid>

                </Grid>
            </header>

            <PageBreak />

            <section className="section">

                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className="center">

                    <Grid item
                        xs={10}
                        md={6}
                        className="center homeMessage">

                        <h1>Practical, Professional, Feminine.</h1>
                        <h2>Our bags cater to the modern working woman, and are designed to help her tackle all
                                the challenges that come her way.</h2>
                    </Grid>

                </Grid>

            </section>

        </div>
    )
}

export default Home;