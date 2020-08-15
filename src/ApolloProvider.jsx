import React from "react";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "http://localhost:8080/graphql",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
