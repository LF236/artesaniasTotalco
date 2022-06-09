import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
const tiers = [
    {
        title: 'Ramos XV',
        price: '860',
        description: [
            'Ramos para tus 15 años',
            'Diversos colores',
            'Camios hasta 10 dias antes del evento',
        ],
        buttonText: 'Ver',
        buttonVariant: 'outlined',
        url: '/ramosXv'
    },
    {
        title: 'Ramos de Boda',
        subheader: 'Mas popular',
        price: '1000',
        description: [
            'Ramos para tu boda',
            'Cambios hasta 5 dias antes del evento',
            'El personal va hasta tu fiesta',
        ],
        buttonText: 'Ver',
        buttonVariant: 'contained',
        url: '/ramosBoda'
    },
    {
        title: 'Ramos Presentación',
        price: '700',
        description: [
            'Ramos para tu presentación',
            'Cambios hasta 20 dias antes del evento',
            'Soporte remoto',
        ],
        buttonText: 'Ver',
        buttonVariant: 'outlined',
        url: '/ramosPresentacion'
    },
];

const CmpTipoProductos = () => {
    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            {/* Hero unit */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Artesanias Totalco
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Las mejores artesanias de la región, nos especializamos en la creaciónde ramos
                    para diferentes tipos de eventos, nos destacamos en Bodas, XV Años y creando ramos
                    de presentación.
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-start">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /max
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={ tier.buttonVariant } component={ Link } to={ tier.url }>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default CmpTipoProductos;