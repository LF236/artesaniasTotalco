import React from 'react';
import { Routes, Route, BrowserRouter as Router, useRoutes, Navigate, Outlet } from 'react-router-dom';
import CmpCategorias from './components/CmpCategorias';
import CmpFooter from './components/CmpFooter';
import CmpHeader from './components/CmpHeader';
import CmpHome from './components/CmpHome';
import CmpOfertas from './components/TiposRamos/CmpOfertas';
import CmpRamosBoda from './components/TiposRamos/CmpRamosBoda';
import CmpRamosPresentacion from './components/TiposRamos/CmpRamosPresentacion';
import CmpRamosXv from './components/TiposRamos/CmpRamosXv';
import './style.css';


const CmpArtesanias = () => {
    const RouterList = () => {
        const routesArr = useRoutes([
            { path: '/', element: <CmpHome /> },
            { path: '/ramosXv', element: <CmpRamosXv /> },
            { path: '/ramosBoda', element: <CmpRamosBoda /> },
            { path: '/ramosPresentacion', element: <CmpRamosPresentacion /> },
            { path: '/ofertas', element: <CmpOfertas /> },
            { path: '/categorias', element: <CmpCategorias /> }
        ]);
        return routesArr;
    }

    return (
        <>
            <CmpHeader />
            <main>
                <Router>
                    <RouterList />
                </Router>
            </main>
            <CmpFooter />
        </>
    );
}

export default CmpArtesanias;