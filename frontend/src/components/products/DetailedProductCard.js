import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DetailedProductCard = ({ product }) => {
    
  return (
    <Card style={{ maxWidth: '100%', maxHeight: '100%', height: '100%' }}>
        <Typography gutterBottom variant="h4" component="div">
          Product Details
        </Typography>

      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.thumbnail_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small" color="primary" variant="contained">Buy It Now</Button>
      </CardActions>
    </Card>
  );
};

export default DetailedProductCard;