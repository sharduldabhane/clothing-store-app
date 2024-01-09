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
        maxHeight: `calc(100vh - /* header height */ - /* footer height */)`,
        overflowY: "scroll",
      }}
    >
      {products.map((product) => (
        <Card
          sx={{ display: "flex", mb: 2, alignItems: "center" }}
          key={product.id}
          onClick={() => onProductClick(product)}
        >
          <CardMedia
            component="img"
            sx={{ width: 88, height: 88, objectFit: "cover" }} // Made images smaller
            image={product.image}
            alt={product.title}
          />
          <CardContent
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" noWrap>
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {product.description}
            </Typography>
            <Typography variant="body1">${product.price}</Typography>
            <Typography variant="body2">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </Typography>
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
