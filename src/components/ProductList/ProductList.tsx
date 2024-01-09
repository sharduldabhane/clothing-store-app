// Importing React for JSX usage
import React from "react";
// Importing the Item type from types folder
import { Item } from "../../types";
// Importing components from Material-UI for UI design
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Pagination,
} from "@mui/material";
// Importing StarRate icon from Material-UI icons
import StarRateIcon from "@mui/icons-material/StarRate";

// Interface for the props passed to ProductList component
interface ProductListProps {
  products: Item[]; // Array of product items
  onProductClick: (product: Item) => void; // Function to handle product click
  paginate: (pageNumber: number) => void; // Function to handle pagination
  totalItems: number; // Total number of products
  itemsPerPage: number; // Number of products per page
  currentPage: number; // Current page number
}

// Functional component 'ProductList' for displaying a list of products
const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductClick,
  paginate,
  totalItems,
  itemsPerPage,
  currentPage,
}) => {
  // Calculating the total number of pages needed
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    // Container Box for the product list
    <Box
      sx={{
        maxHeight: "calc(100vh - /* header height */ - /* footer height */)",
        overflowY: "auto",
      }}
    >
      {/* Mapping through each product to display them */}
      {products.map((product) => (
        // Card for each product
        <Card
          sx={{
            display: "flex",
            mb: 2,
            ":hover": {
              boxShadow: 3, // Shadow effect on hover
            },
          }}
          key={product.id}
          onClick={() => onProductClick(product)}
        >
          {/* Box for product image and rating */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 1,
              ":hover img": {
                cursor: "pointer",
              },
            }}
          >
            {/* Product image */}
            <CardMedia
              component="img"
              sx={{
                width: 88,
                height: 88,
                objectFit: "contain",
                borderRadius: 1,
                ":hover": {
                  transform: "scale(1.05)",
                },
              }}
              image={product.image}
              alt={product.title}
            />
            {/* Box for star rating and rating count */}
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5 }}>
              <StarRateIcon sx={{ color: "#ffd700", fontSize: "small" }} />
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                {product.rating.rate} ({product.rating.count})
              </Typography>
            </Box>
          </Box>
          {/* Card content for product details */}
          <CardContent
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Displaying product category, title, description, and price */}
            <Typography variant="subtitle2" color="purple" gutterBottom>
              {product.category}
            </Typography>
            <Typography variant="h6" noWrap>
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {product.description}
            </Typography>
            <Typography variant="body1">${product.price}</Typography>
          </CardContent>
        </Card>
      ))}
      {/* Pagination component to navigate between pages */}
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={(event, page) => paginate(page)}
        sx={{ display: "flex", justifyContent: "center", p: 2 }}
      />
    </Box>
  );
};

// Exporting the ProductList component for use in other parts of the application
export default ProductList;
