"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // @ts-ignore
  Box,
  Button,
  // @ts-ignore
  Heading,
  // @ts-ignore
  Grid,
  // @ts-ignore
  GridItem,
} from "@chakra-ui/react";
import { selectBooks, deleteBook, Book } from "@/lib/redux";

import BookDetail from "@/components/BookDetail";
import AddBookForm from "@/components/AddBookForm";

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
      {isModalOpen && <AddBookForm onClose={handleModalClose} />}
      {isModalOpen && selectedBook && (
        <BookDetail book={selectedBook} onClose={handleModalClose} />
      )}

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Heading as="h2" flex="1">
          Book List
        </Heading>
        <Button colorScheme="blue" onClick={() => setIsModalOpen(true)}>
          Add Book
        </Button>
      </Box>

      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
        {books.map((book) => (
          <GridItem
            key={book.id}
            onClick={() => handleEdit(book.id)}
            cursor="pointer"
            p={4}
            borderWidth="1px"
            borderRadius="md"
            borderColor="gray.200"
          >
            <Box fontWeight="semibold" mb={2}>
              Title: {book.name}
            </Box>
            <Box>
              <Box>
                <Box as="span" fontWeight="semibold">
                  Category:
                </Box>{" "}
                {book.category}
              </Box>
              <Box>
                <Box as="span" fontWeight="semibold">
                  Price:
                </Box>{" "}
                ${book.price.toFixed(2)}
              </Box>
            </Box>
            <Button
              colorScheme="red"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(book.id);
              }}
              mt={2}
            >
              Delete
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default BookList;
