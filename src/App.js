import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import LoginPage from './components/Login/LoginPage/LoginPage';
export const ContextApi = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <ContextApi.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/:login">
              <LoginPage></LoginPage>
          </Route>
        </Switch>
      </Router>
    </ContextApi.Provider>
  );
}

export default App;
