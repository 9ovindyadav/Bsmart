import React from 'react';
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

function App() {

window.addEventListener("contextmenu",(e)=>(
  e.preventDefault()
))

  return (
<Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/courses" element={<Courses />}/>
    <Route path="/courses/:id" element={<CoursePage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/request" element={<Request/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/forgetpassword" element={<ForgetPassword/>}/>
    <Route path="/resetpassword" element={<ResetPassword/>}/>
    <Route path="/resetpassword/:token" element={<ResetPassword/>}/>

    <Route path="*" element={<NotFound/>} />

    <Route path="/subscribe" element={<Subscribe/>}/>
    <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
    <Route path="/paymentfail" element={<PaymentFail/>}/>

    <Route path="/profile" element={<Profile/>}/>
    <Route path="/changepassword" element={<ChangePassword/>}/>
    <Route path="/updateprofile" element={<UpdateProfle/>}/>

    {/* Admin Routes */}

    <Route path="/admin/dashboard" element={<Dashboard/>}/>
    <Route path="/admin/createcourses" element={<CreateCourses/>}/>
    <Route path="/admin/courses" element={<AdminCourses/>}/>
    <Route path="/admin/users" element={<Users/>}/>
      
  </Routes>
  <Footer/>
</Router>
  );
}

export default App;
