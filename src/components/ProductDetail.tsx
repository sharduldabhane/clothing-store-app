// ProductDetail.tsx
import React from "react";
import { Item } from "../types";
import { Box, Typography } from "@mui/material";

interface ProductDetailProps {
  product: Item | null;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return <Typography>Select an item to display</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4">{product.title}</Typography>
      <Box
        component="img"
        sx={{
          my: 2,
          maxHeight: { xs: "200px", md: "400px" }, // Responsive image sizes
          objectFit: "contain",
        }}
        src={product.image}
        alt={product.title}
      />
      <Typography variant="body1">
        {product.title} - ${product.price}
      </Typography>
      <Typography variant="body2">{product.description}</Typography>
      <Typography variant="body2">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </Typography>
    </Box>
  );
};

export default ProductDetail;
