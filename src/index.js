import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import './app.css';

require('dotenv').config();

const httpLink = createHttpLink({ uri: 'https://rose-and-liz.myshopify.com/api/graphql' })

const middlewareLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN
  }
}))

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ),
  document.getElementById('root')
);
