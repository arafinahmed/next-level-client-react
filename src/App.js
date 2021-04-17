import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
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
import CourseStatus from './components/Dashboard/CourseStatus/CourseStatus';
import NotFound from './components/NotFound/NotFound';
import Courses from './components/Home/Courses/Courses';

export const ContextApi = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedCourseID, setSelectedCourseID] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (loggedInUser.email) {
      fetch(`https://nextlevel1.herokuapp.com/isAdmin?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }
  }, [loggedInUser])

  return (
    <ContextApi.Provider value={[loggedInUser, setLoggedInUser, selectedCourseID, setSelectedCourseID, isAdmin]}>
      <Router>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/account/:login">
            <LoginPage></LoginPage>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          {/* private */}
          {
            isAdmin ? <>
              <PrivateRoute path="/newAdmin">
                <NewAdmin></NewAdmin>
              </PrivateRoute>
              <PrivateRoute path="/newCourse">
                <NewCourse></NewCourse>
              </PrivateRoute>
              <PrivateRoute path="/manageCourses">
                <ManageCourses></ManageCourses>
              </PrivateRoute>
              <PrivateRoute path="/courseStatus">
                <CourseStatus></CourseStatus>
              </PrivateRoute>
            </> : <>
              <Switch>
                <PrivateRoute path="/checkout">
                  <Checkout></Checkout>
                </PrivateRoute>
                <PrivateRoute path="/mycourses">
                  <MyCourses></MyCourses>
                </PrivateRoute>
                <PrivateRoute path="/addReview">
                  <AddReview></AddReview>
                </PrivateRoute>
                <Route exact path="*">
                  <NotFound></NotFound>
                </Route>
              </Switch>
            </>
          }
        </Switch>
        <Footer></Footer>

      </Router>
    </ContextApi.Provider>
  );
}

export default App;
