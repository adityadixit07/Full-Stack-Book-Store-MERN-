import React from "react";
import { Button } from "@mui/material";
import "./Book.css"
const Book = (props) => {
  const { _id,name, author, description, price, available, image } = props.book;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article> BY {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs.{price}</h2>
      <h3>{available}</h3>
      <Button>Update</Button>
      <Button>Delete</Button>
    </div>
  );
};

export default Book;
