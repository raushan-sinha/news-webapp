import React from 'react'
import Navbar from '../components/layout/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../main-pages/Home';
import Blog from '../main-pages/Blog';

const AppRoutes = () => {
    return (
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            </BrowserRouter>
    )
}

export default AppRoutes;