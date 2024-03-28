import { toast } from "react-toastify";

// Function to show a toast message using react-toastify library
export const showToastMessage = (message, type) => {
  toast[type](message, {
    position: toast.POSITION.TOP_CENTER, // Set the position of the toast message
  });
};
