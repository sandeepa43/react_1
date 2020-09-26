import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import List from './pages/list'
function App() {
  return (
      <BrowserRouter>
       <Switch>
          <Route path="/" name="List" component={List} />
        </Switch>
        </BrowserRouter>
  );
}

export default App;
