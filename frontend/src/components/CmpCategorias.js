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
        subheader: 'El que las jovenes necesitan',
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
        subheader: 'Mas Barato',
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

const CmpCategorias = () => {
    return (
        <Container maxWidth="md" component="main" sx={{ mt: 5 }}>
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
                            
                            <CardActions>
                                <Button fullWidth variant={tier.buttonVariant} component={Link} to={tier.url}>
                                    {tier.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CmpCategorias;