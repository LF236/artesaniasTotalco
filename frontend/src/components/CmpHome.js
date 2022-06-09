import { Container, CssBaseline, Grid } from '@mui/material';
import React from 'react';
import CmpCarrusel from './CmpCarrusel';
import CmpTipoProductos from './CmpTipoProductos';

const CmpHome = () => {
    return (
        <>
        <CssBaseline />
        <Container  maxWidth='lg' sx={{ mt: 4, m: 0 }}>
            <Grid item  sx={{ position: 'absolute', width: '100%', left: 0  }}>
                <Grid item>
                    <CmpCarrusel />
                </Grid>
                <Grid item>
                    <CmpTipoProductos />
                </Grid>
            </Grid>
        </Container>
        </>
    );
}

export default CmpHome;