import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBUilder from './containers/BurgerBuilder/BurgerBuilder'
class App extends Component {
  render() {
    return (
      <div>
       <Layout>
         <BurgerBUilder />
       </Layout>
      </div>
    );
  }
}

export default App;
