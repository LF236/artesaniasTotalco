import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const CmpRamosPresentacion = () => {

    const [ramosPresentacion, setRamosPresentacion] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/api/getRamosPresentacion')
            .then(res => {
                setRamosPresentacion(res.data);
            })
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <section>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Ramos de Presentación
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Ramos de Presentación, aprovecha este paquete que tenemos para ti, es el más barato
                            pero con calidad asegurada.
                        </Typography>
                    </Container>
                </Box>
                <Container maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {ramosPresentacion.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', mt: 5 }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            // pt: '56.25%',
                                        }}
                                        image={`http://localhost:8001/ramos/${card.ruta}`}
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {`Ramos Presentación `}
                                        </Typography>
                                        <Typography>
                                            {`Precio: $${card.precio}`}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant='contained'>Agregar al carrito</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>
        </ThemeProvider>
    );
}

export default CmpRamosPresentacion;