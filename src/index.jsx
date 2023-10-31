import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Provider } from 'react-redux';
import { store } from "./redux";

import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import Profile from './pages/Profile';

import Header from "./layouts/Header";
import Footer from './layouts/Footer';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>       
            <Provider store={store}>
                <Header />     
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>          
                <Footer />
            </Provider>
        </Router>
    </React.StrictMode>
)