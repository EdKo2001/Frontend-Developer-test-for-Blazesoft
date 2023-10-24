"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, List, ListItem } from "@chakra-ui/react";
import { selectBooks, deleteBook, Book } from "@/lib/redux";
import BookDetail from "@/components/BookDetail";

const BookList: React.FC = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (id: number) => {
    const book = books.find((book) => book.id === id);
    if (book) {
      setSelectedBook(book);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  return (
    <Box className="book-list" p={4}>
      <Heading as="h2" mb={4}>
        Book List
      </Heading>
      <List>
        {books.map((book) => (
          <ListItem key={book.id} display="flex" alignItems="center" mb={2}>
            <Button
              colorScheme="red"
              onClick={() => handleDelete(book.id)}
              mr={2}
            >
              Delete
            </Button>
            {book.name} - {book.price} - {book.category}
            <Button
              colorScheme="teal"
              ml="auto"
              onClick={() => handleEdit(book.id)}
            >
              Edit
            </Button>
          </ListItem>
        ))}
      </List>

      {isModalOpen && selectedBook && (
        <BookDetail book={selectedBook} onClose={handleModalClose} />
      )}
    </Box>
  );
};

export default BookList;
