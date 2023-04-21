import React, { useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/home/home.jsx"
import Header from "./components/header/header.jsx"
import {Footer} from "./components/footer/footer.jsx"
import {Courses} from "./components/courses/courses.jsx"
import Login from "./components/auth/login.jsx"
import Register from "./components/auth/register.jsx"
import ForgetPassword from './components/auth/forgetpassword.jsx';
import ResetPassword from './components/auth/resetpassword.jsx';
import Contact from './components/contacts/contact.jsx';
import Request from './components/contacts/request.jsx';
import About from './components/about/about.jsx';
import NotFound from './components/footer/notfound.jsx';
import Subscribe from './components/payments/subscribe.jsx';
import PaymentSuccess from './components/payments/paymentsuccess.jsx';
import PaymentFail from './components/payments/paymentfail.jsx';
import CoursePage from './coursepage/coursepage.jsx';
import Profile from './components/profile/profile.jsx';
import ChangePassword from './components/profile/changepassword.jsx';
import UpdateProfle from './components/profile/updateprofile.jsx';
import Dashboard from "./admin/dashboard.jsx"
import CreateCourses from './admin/createcourses.jsx';
import Users from './admin/users.jsx';
import AdminCourses from "./admin/admincourses.jsx"
import { useDispatch, useSelector } from 'react-redux';
import toast,{ Toaster } from 'react-hot-toast';
import { loadUser } from './Redux/Actions/user.js';
import {ProtectedRoute} from "protected-route-react";
import Loader from './components/Loader/loader.jsx';


function App() {

window.addEventListener("contextmenu",(e)=>(
  e.preventDefault()
))

const {isAuthenticated,user,message,error,loading} = useSelector(state=>state.user);

const dispatch = useDispatch();
useEffect(()=>{

  if(error){
    toast.error(error);
    dispatch({type:"clearError"});
  }

  if(message){
    toast.success(message);
    dispatch({type:"clearMessage"});
  }
},[dispatch,error,message]);

useEffect(()=>{
  dispatch(loadUser());
},[dispatch]);



  return (
<Router>
  {
       loading ? ( <Loader/>) : (
        <>
        <Header isAuthenticated={isAuthenticated} user={user}/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/courses" element={<Courses />}/>
    <Route path="/courses/:id" element={<CoursePage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/request" element={<Request/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                                       <Login/>
                                  </ProtectedRoute>}/>
    <Route path="/register" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile" >
                                          <Register/>
                                        </ProtectedRoute>}/>
    <Route path="/forgetpassword" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                                            <ForgetPassword/>
                                          </ProtectedRoute>}/>
    <Route path="/resetpassword/:token" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                                            <ResetPassword/>
                                          </ProtectedRoute>}/>

    <Route path="*" element={<NotFound/>} />

    <Route path="/subscribe" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                                        <Subscribe/>
                                      </ProtectedRoute>}/>
    <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
    <Route path="/paymentfail" element={<PaymentFail/>}/>

    <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                                        <Profile user={user}/>
                                    </ProtectedRoute>}
                                  />

    <Route path="/changepassword" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                                          <ChangePassword/>
                                        </ProtectedRoute>}/>
    <Route path="/updateprofile" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                                          <UpdateProfle user={user}/>
                                        </ProtectedRoute>}/>

    {/* Admin Routes */}

    <Route path="/admin/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} 
                                                            adminRoute={true} 
                                                            isAdmin={user && user.role==="admin"}>
                                                <Dashboard/>
                                              </ProtectedRoute>
                                            }/>

    <Route path="/admin/createcourses" element={<ProtectedRoute isAuthenticated={isAuthenticated} 
                                                            adminRoute={true} 
                                                            isAdmin={user && user.role==="admin"}>
                                                <CreateCourses/>
                                              </ProtectedRoute>}
                                              />

    <Route path="/admin/courses" element={<ProtectedRoute isAuthenticated={isAuthenticated} 
                                                            adminRoute={true} 
                                                            isAdmin={user && user.role==="admin"}>
                                                <AdminCourses/>
                                              </ProtectedRoute>
                                            }/>

    <Route path="/admin/users" element={<ProtectedRoute isAuthenticated={isAuthenticated} 
                                                            adminRoute={true} 
                                                            isAdmin={user && user.role==="admin"}>
                                                <Users/>
                                              </ProtectedRoute>
                                            }/>
      
  </Routes>
  <Footer/>
  <Toaster/>
        </>
       )
  }
</Router>
  );
}

export default App;
