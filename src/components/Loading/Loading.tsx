// Loading.tsx

// Importing React for JSX usage
import React from "react";
// Importing the CSS module for styling
import styles from "./Loading.module.css";

// Functional component 'Loading' for displaying a loading spinner
const Loading: React.FC = () => (
  // Using a container div with a specific style from the CSS module
  <div className={styles.loadingContainer}>
    <div className={styles.loadingSpinner}></div>
  </div>
);

export default Loading;
