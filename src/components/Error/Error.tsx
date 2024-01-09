import React from "react";
import styles from "./Error.module.css"; // Import the CSS module

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
  <div className={styles.errorContainer}>
    <div className={styles.errorMessage}>Error: {message}</div>
  </div>
);

export default Error;
