import React, { Component } from 'react';

import Layout from "./hoc/Layout/Layout";
import Artists from "./components/Artists/Artists";

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Artists />
      </Layout>
    );
  }
}

export default App;
