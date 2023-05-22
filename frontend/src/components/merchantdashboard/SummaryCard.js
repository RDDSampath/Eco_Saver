import { ShoppingCart } from '@mui/icons-material';
import { Card, CardContent, Typography } from '@mui/material';
import react from 'react';

const SummaryCard = () => {
    return (
        <Card>
            <CardContent>
            <Typography variant="h5">Summary</Typography>
            <Typography variant="h6">Total Orders: 10</Typography>
            <Typography variant="h6">Total Sales: 10</Typography>
            <Typography variant="h6">Total Revenue: 10</Typography>
            <ShoppingCart />
            </CardContent>
        </Card>
    );
};

export default SummaryCard;