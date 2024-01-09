// Importing React for JSX usage
import React from "react";
// Importing the CSS module for styling
import styles from "./Error.module.css";

// Defining the props structure for the Error component
interface ErrorProps {
  message: string; // The error message to be displayed
}

// Functional component 'Error' to display error messages
const Error: React.FC<ErrorProps> = ({ message }) => (
  // Using a container div with a specific style from the CSS module
  <div className={styles.errorContainer}>
    <div className={styles.errorMessage}>Error: {message}</div>
  </div>
);

export default Error;
