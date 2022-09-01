import React from "react";
import axios from "axios";
import "../Book/Book.css"
import { useState, useEffect } from "react";
import Book from "./Book";
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.book));
  }, []);
  console.log(books);

  return (
    <div>
      {/* <h1>All books are here.</h1> */}
      <ul>
        {books &&
          books.map((book, i) => {
            <li key={i}>
              <Book book={book} />
            </li>;
          })}
      </ul>
    </div>
  )
};

export default Books;
