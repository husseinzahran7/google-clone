import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80vh',
                textAlign: 'center',
                padding: 3,
            }}
        >
            <Typography variant="h1" color="primary" sx={{ fontSize: '6rem', mb: 2 }}>
                404
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Page Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                The page you are looking for doesn't exist or has been moved.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/flights')}
                sx={{ textTransform: 'none' }}
            >
                Back to Home
            </Button>
        </Box>
    );
};

export default NotFound;