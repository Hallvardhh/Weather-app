import React from 'react';
import { useSelector, } from 'react-redux';
import LoginPage from './Login';
import Weather from './Weather';
const App = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  return (
    <div className="App">
      {isLoggedIn ? <Weather /> : <LoginPage />}
    </div>
  );
}

export default App;
