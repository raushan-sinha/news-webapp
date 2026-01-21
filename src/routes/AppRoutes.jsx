import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../main-pages/Home';
import Blog from '../main-pages/Blog';
import MainLayout from '../components/layout/MainLayout';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/blog' element={<Blog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;