import React, { Component } from 'react';
import './App.css';
import { ApolloProvider} from "react-apollo";
import ApolloClient from 'apollo-boost';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import StationListContainer from './container/StationListContainer';


const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql" //"https://api.digitransit.fi/graphiql/hsl"
});

class App extends Component {



  render() {
    return (
      <ApolloProvider client={client}>
          <Query
            query={gql`
              query Stations{
                bikeRentalStations {
                  stationId
                  name
                  bikesAvailable
                  spacesAvailable
                  state
                  realtime
                }
              }
            `}
          >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Oops...</p>;
            
          return <StationListContainer stations={data.bikeRentalStations} />
        }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
