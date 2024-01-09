// ProductDetail.tsx
import React from "react";
import { Item } from "../../types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

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

  // Generate stars for the rating
  const ratingStars = [];
  for (let i = 0; i < 5; i++) {
    ratingStars.push(
      i < Math.round(product.rating.rate) ? (
        <StarRateIcon key={i} sx={{ color: "#ffd700" }} />
      ) : (
        <StarOutlineIcon key={i} />
      )
    );
  }

  return (
    <Card sx={{ maxWidth: "90%", margin: "auto", overflow: "visible" }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", padding: 2 }}
      />
      <CardContent>
        <Typography
          variant="subtitle2"
          component="div"
          sx={{ color: "purple" }}
        >
          {product.category}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1, mb: 1 }}>
          {ratingStars}
          <Typography variant="body2" sx={{ ml: 1 }}>
            {product.rating.rate} ({product.rating.count})
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
