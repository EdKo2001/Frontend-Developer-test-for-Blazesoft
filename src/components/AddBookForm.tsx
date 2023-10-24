"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addBook } from "@/lib/redux";

import { Box, Input, Textarea, Button, Heading } from "@chakra-ui/react";

const AddBookForm: React.FC = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    name: "",
    price: 0,
    category: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addBook({ ...book, id: Date.now() }));
    // Reset form fields
    setBook({
      name: "",
      price: 0,
      category: "",
      description: "",
    });
  };

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        Add Book
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Book Name"
          value={book.name}
          onChange={handleInputChange}
          mb={2}
          required
        />
        <Input
          type="number"
          name="price"
          placeholder="Price"
          value={book.price}
          onChange={handleInputChange}
          mb={2}
          required
        />
        <Input
          type="text"
          name="category"
          placeholder="Category"
          value={book.category}
          onChange={handleInputChange}
          mb={2}
          required
        />
        <Textarea
          name="description"
          placeholder="Description"
          value={book.description}
          onChange={handleInputChange}
          mb={4}
          required
        />
        <Button type="submit" colorScheme="teal">
          Add Book
        </Button>
      </form>
    </Box>
  );
};

export default AddBookForm;
