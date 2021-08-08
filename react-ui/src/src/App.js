import React from 'react';
import './App.css';
import Login from './views/Login';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import styles from './App.module.scss';
import LeftMenu from './components/LeftMenu';

function App() {
  const token=localStorage.getItem('loggedUser');

  if (!token) {
    return <Login/>;
  }
  return (
    <div className={`${styles.container}`}>
      <BrowserRouter>
        <LeftMenu />
        <Switch>
          <Route path="/">Holaaa soy el Home</Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
