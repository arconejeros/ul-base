import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserContext from './contexts/userContext';
import NavContext from './contexts/navContext';

ReactDOM.render(
  <NavContext.Provider>
    <UserContext.Provider>
      <App/>
    </UserContext.Provider>
  </NavContext.Provider>, document.getElementById('root'));
