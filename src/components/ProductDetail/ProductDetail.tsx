// Importing React for JSX usage
import React from "react";
// Importing the Item type from the types folder
import { Item } from "../../types";
// Importing Material-UI components for UI design
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
// Importing icons from Material-UI for star ratings
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

// Interface for the props passed to ProductDetail component
interface ProductDetailProps {
  product: Item | null; // The product item to display or null if none
}

// Functional component 'ProductDetail' for displaying product details
const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  // Display a message if no product is selected
  if (!product) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6">Nothing to display...</Typography>
        <Typography>Select an Item to display</Typography>
      </Box>
    );
  }

  // Generate star icons for the product rating
  const ratingStars = [];
  for (let i = 0; i < 5; i++) {
    ratingStars.push(
      // Filled star for each point in the rating, outline star otherwise
      i < Math.round(product.rating.rate) ? (
        <StarRateIcon key={i} sx={{ color: "#ffd700" }} />
      ) : (
        <StarOutlineIcon key={i} />
      )
    );
  }

  // Render the product details in a card format
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
