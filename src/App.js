import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import LoginPage from './components/Login/LoginPage/LoginPage';
import NavigationBar from './components/Home/NavigationBar/NavigationBar';
import Footer from './components/Shared/Footer/Footer';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Checkout from './components/Dashboard/Checkout/Checkout';
import NewAdmin from './components/Dashboard/NewAdmin/NewAdmin';
import NewCourse from './components/Dashboard/NewCourse/NewCourse';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MyCourses from './components/Dashboard/MyCourses/MyCourses';
import AddReview from './components/Dashboard/AddReview/AddReview';
import ManageCourses from './components/Dashboard/MangeCourses/ManageCourses';
export const ContextApi = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedCourseID, setSelectedCourseID] = useState(null);
  return (
    <ContextApi.Provider value={[loggedInUser, setLoggedInUser, selectedCourseID, setSelectedCourseID]}>
      <Router>
      <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/account/:login">
              <LoginPage></LoginPage>
          </Route>
          <PrivateRoute path="/checkout">
              <Checkout></Checkout>
          </PrivateRoute>
          {/* private */}
          <PrivateRoute path="/newAdmin">
              <NewAdmin></NewAdmin>
          </PrivateRoute>
          <PrivateRoute path="/newCourse">
              <NewCourse></NewCourse>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/mycourses">
              <MyCourses></MyCourses>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
              <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/manageCourses">
              <ManageCourses></ManageCourses>
          </PrivateRoute>
        </Switch>
      <Footer></Footer>
      </Router>
    </ContextApi.Provider>
  );
}

export default App;
