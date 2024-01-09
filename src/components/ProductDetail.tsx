// ProductDetail.tsx
import React from "react";
import { Item } from "../types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProductDetailProps {
  product: Item | null;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6">Nothing to display...</Typography>
        <Typography>Select an Item to display</Typography>
      </Box>
    );
  }

  return (
    <Card sx={{ maxWidth: "90%", margin: "auto", overflow: "visible" }}>
      {" "}
      <CardMedia
        component="img"
        height="200" // Increased height
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", padding: 2 }} // Adjusted padding for spacing
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1" sx={{ my: 1 }}>
          ${product.price}
        </Typography>
        <Typography variant="body2">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
