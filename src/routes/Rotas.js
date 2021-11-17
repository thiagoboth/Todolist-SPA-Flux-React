import React from 'react';
import Index from '../pages/index'
import { Route, BrowserRouter, Routes } from "react-router-dom";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas