import React from "react";
import styled from "styled-components";
import { useState } from "react";
import customFetch from "../apiCall";
import { addproducts } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToastMessage } from "../Notification/notify";

// Styled component for the main container
const Container = styled.div`
  width: 50%;
  margin: auto;

  @media only screen and (max-width: 976px) {
    width: 90%;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    margin: 0;
  }
`;

// Styled component for the form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
`;

// Styled component for input fields
const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Styled component for the submit button
const SubmitButton = styled.button`
  padding: 0.8rem;
  width: 9rem;
  background-color: var(--nav);
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Styled component for the ToastContainer
const ToastContainerStyled = styled(ToastContainer)`
  bottom: 0;
  right: 0;
`;

export default function AddProduct() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [thumbnail, setthumbmail] = useState("");
  const [rating, setrating] = useState("");

  let url = "https://my-json-server.typicode.com/B-Das/jsonData/products";

  function handleSubmit(e) {
    e.preventDefault();

    // Perform custom fetch with provided URL and request configuration
    let result = customFetch(url, {
      body: {
        id: Date.now(),
        title: name,
        price,
        category,
        thumbnail,
        rating,
        description,
        edit: true,
      },
      method: "POST",
    });

    // Dispatch action to add the new product to the store
    result.then((data) => {
      dispatch(addproducts([data, ...products]));
      navigate("/");
    });

    // Show success toast message
    showToastMessage("Product Added Successfully", "success");

    // Reset form fields
    setname("");
    setcategory("");
    setdescription("");
    setrating("");
    setthumbmail("");
    setprice("");
  }

  return (
    <Container className="bg-light border border-1 border-dark mt-4 p-3">
      <ToastContainerStyled position="bottom-right" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Thumbnail Image URL"
          value={thumbnail}
          onChange={(e) => setthumbmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Ratings"
          value={rating}
          onChange={(e) => setrating(e.target.value)}
        />
        <SubmitButton type="submit">Add to Cart</SubmitButton>
      </Form>
    </Container>
  );
}
