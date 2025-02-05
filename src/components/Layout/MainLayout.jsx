import PropTypes from 'prop-types';
import { useState } from 'react';
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
   
    
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Navbar />
            <main>
               
                {children || <Outlet />}
            </main>
        </Box>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout;