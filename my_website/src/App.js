import React from 'react';
import {Route, HashRouter} from 'react-router-dom';

import Header from './higher-order-components/header'
import Home from './pages/home';

const App = () => {
  
  return (
    <Header>
    <HashRouter>
      <Route exact path="/" render={(props) => <Home/>}/>
    </HashRouter>
    </Header>
  );
}

export default App;
