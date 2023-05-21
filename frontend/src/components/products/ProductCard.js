import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.tumnail_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          LKR {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.discription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small" component={Link} to={`/product/${product._id}`}> View More </Button>
      </CardActions>
    </Card> 
    );
};

export default ProductCard;