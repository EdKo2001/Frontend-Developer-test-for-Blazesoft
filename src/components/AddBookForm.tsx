"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addBook } from "@/lib/redux";

import {
  Input,
  Textarea,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

interface AddBookFormProps {
  onClose: () => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onClose }) => {
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
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Add Book</ModalHeader>
          <ModalBody>
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
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Add Book
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddBookForm;
