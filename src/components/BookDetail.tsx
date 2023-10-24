"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateBook } from "@/lib/redux";

import styles from "@/styles/BookDetail.module.scss";

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
    <div className={styles["book-detail-form"]}>
      <h2>Edit Book</h2>
      <form>
        <input
          type="text"
          name="name"
          value={updatedBook.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          value={updatedBook.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="category"
          value={updatedBook.category}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          value={updatedBook.description}
          onChange={handleInputChange}
          required
        />
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookDetail;
