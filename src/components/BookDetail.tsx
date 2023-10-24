"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { updateBook } from "@/lib/redux";

interface BookDetailProps {
  book: {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
  };
  onClose: () => void;
}

const BookDetail: React.FC<BookDetailProps> = ({ book, onClose }) => {
  const dispatch = useDispatch();
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    dispatch(updateBook(updatedBook));
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleUpdate}>
          <ModalHeader>Edit Book</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              name="name"
              value={updatedBook.name}
              onChange={handleInputChange}
              mb={2}
              placeholder="Book Name"
              required
            />
            <Input
              type="number"
              name="price"
              value={updatedBook.price}
              onChange={handleInputChange}
              mb={2}
              placeholder="Price"
              required
            />
            <Input
              type="text"
              name="category"
              value={updatedBook.category}
              onChange={handleInputChange}
              mb={2}
              placeholder="Category"
              required
            />
            <Textarea
              name="description"
              value={updatedBook.description}
              onChange={handleInputChange}
              mb={4}
              placeholder="Description"
              required
            />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default BookDetail;
