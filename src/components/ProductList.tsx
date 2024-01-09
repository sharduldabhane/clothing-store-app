// ProductList.tsx
import React from "react";
import { Item } from "../types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Pagination,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate"; // Importing StarRate icon

interface ProductListProps {
  products: Item[];
  onProductClick: (product: Item) => void;
  paginate: (pageNumber: number) => void;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductClick,
  paginate,
  totalItems,
  itemsPerPage,
  currentPage,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    <Box
      sx={{
        maxHeight: "calc(100vh - /* header height */ - /* footer height */)",
        overflowY: "scroll",
      }}
    >
      {products.map((product) => (
        <Card
          sx={{ display: "flex", mb: 2 }}
          key={product.id}
          onClick={() => onProductClick(product)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 1,
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 88, height: 88, objectFit: "cover" }}
              image={product.image}
              alt={product.title}
            />
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5 }}>
              <StarRateIcon sx={{ color: "#ffd700", fontSize: "small" }} />
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                {product.rating.rate} ({product.rating.count})
              </Typography>
            </Box>
          </Box>
          <CardContent
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
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
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={(event, page) => paginate(page)}
        sx={{ display: "flex", justifyContent: "center", p: 2 }}
      />
    </Box>
  );
};

export default ProductList;
