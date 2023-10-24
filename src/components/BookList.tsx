"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectBooks, deleteBook } from "@/lib/redux";

import styles from "@/styles/BookList.module.scss";

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className={styles["book-list"]}>
      <h1>Bookstore</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name} - {book.price} - {book.category}
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
