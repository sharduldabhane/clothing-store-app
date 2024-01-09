// Rating interface representing the structure of a product rating
export interface Rating {
  rate: number; // The average rating of the product
  count: number; // The total number of ratings the product has received
}

// Item interface representing the structure of a product item
export interface Item {
  id: number; // Unique identifier for the product
  title: string; // Title or name of the product
  price: number; // Price of the product
  description: string; // Detailed description of the product
  category: string; // Category that the product belongs to
  image: string; // URL of the product image
  rating: Rating; // Rating of the product, following the Rating interface
}
