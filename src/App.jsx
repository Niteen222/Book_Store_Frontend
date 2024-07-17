import React from 'react';
import Home from './home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Contacts from './contact/Contacts';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import Courses from "./courses/Courses"
import Stores from './about/Stores';

function App() {
  return (
    <>
    
        <div className='dark:bg-slate-900 dark:text-white'>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/contact' element={<Contacts />} />
              <Route path='/login' element={<Login />} />
              <Route path='/store' element={<Stores />}></Route>
            </Routes>
          </Router>
          <Toaster />
        </div>

    </>
  );
}

export default App;
