"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addBook } from "@/lib/redux";

import styles from "@/styles/AddBookForm.module.scss";

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
    <div className={styles["add-book-form"]}>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Book Name"
          value={book.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={book.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={book.category}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={book.description}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
