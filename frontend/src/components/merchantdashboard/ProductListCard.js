import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ProductListCard = ({ product, onDelete }) => {
  const handleDelete = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => onDelete(product._id)
        },
        {
          label: 'No',
        }
      ]
    });
  };

  return (
    <Card sx={{ maxWidth: 520, marginTop: 3, marginLeft: 3 }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="200"
        image={product.tumnail_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.discription}
        </Typography>
      </CardContent>
      <CardActions sx={{ float: "right" }}>
        <Link to={`/sales-dashboard/product/${product._id}`} className="btn-view-more">
          View more
        </Link>
        <Button onClick={handleDelete} variant="contained" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductListCard;