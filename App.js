import React from 'react';
import './src/App.css';
import Dashboard from './src/Dashboard';
import Login from './src/Login';
import {  Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <main>
        <Switch>
            <PrivateRoute path="/" exact>
                <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
        </Switch>
    </main>
  )
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
         true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
