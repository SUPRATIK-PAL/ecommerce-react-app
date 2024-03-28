import * as React from "react";
import Rating from "@mui/material/Rating";

// Component that renders a basic rating component
export default function BasicRating({ value }) {
  // Render the Rating component from Material-UI
  return <Rating name="simple-controlled" value={value ? value : 0} />;
}
