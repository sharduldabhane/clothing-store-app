# Online Store Challenge

## Developer's Note

This repository contains the Online Store Challenge completed by Shardul Dabhane. It is a React-based application demonstrating a master-detail view interface for an online store. Users can browse a list of products and view detailed information upon selection.

## Project Overview

The application presents products in a master view, allowing users to click and reveal detailed information in the detail view. Details include title, description, price, category, image, and rating.

### Requirements

- **Design**: Prepared with Figma to ensure a pre-implementation visual layout.
- **Master View**: A list view showing titles and descriptions of items.
- **Detail View**:
  - Starts off empty and displays the selected product's details.
  - Details include title, description, price, category, image, and rating.
- **Data**:
  - Product data fetched with: `GET https://fakestoreapi.com/products/`
  - Individual product details fetched with: `GET https://fakestoreapi.com/products/{id}`
- **Styling**:
  - Styled with the MUI library for a responsive layout suitable for all devices.
- **React Components**: Organized into reusable components with state and props.

### Getting Started

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required libraries:
   ```sh
   npm install @mui/material @emotion/react @emotion/styled axios @mui/icons-material
   ```
4. Start the application using this command:
   ```sh
   npm start
   ```

### Future Improvements

With additional time, the project could be enhanced by:

1. **User Authentication**: Implementing login and registration functionality for a personalized shopping experience.
2. **Payment Gateway**: Integrating a secure payment portal to facilitate online transactions.
3. **Review System**: Allowing users to write and submit reviews for products.
4. **Product Recommendations**: Introducing a recommendation engine to suggest products based on user preferences.
5. **Order Tracking**: Adding functionality for users to track their orders post-purchase.
   Multi-language Support: Expanding accessibility with multiple language options.

### Acknowledgments

- Special thanks to AJMERA INFOTECH INC. for the challenge guidelines.
- Appreciation to Fake Store API for providing the endpoints for product data.
