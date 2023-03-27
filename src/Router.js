import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import {
    HomePage,
    Login,
    Dashboard,
    FormPage,
    Table
} from './pages';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/formPage" element={<FormPage />} />
                <Route path="/table" element={<Table/>} />

            </Routes>
        </BrowserRouter>
    );
}