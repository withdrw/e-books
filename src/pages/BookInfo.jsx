import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Price from "../Components/ui/Price";
import Rating from "../Components/ui/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Book from "../Components/ui/Books";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  const [added, setadded] = useState(false)
  

  function addBookToCart(book) {
   setadded(true)
    addToCart(book)
  }

  // function bookExistsOnCart(book){
  //   return cart.find(book=> book.id ===+id)
  // }
  
  
  
  
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/e-books/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
              </Link>
              <Link to="/e-books/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating}></Rating>
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  ></Price>
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur suscipit iusto aperiam enim placeat ullam error, vel
                    omnis alias impedit.
                  </p>
                  <p className="book__summary__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur suscipit iusto aperiam enim placeat ullam error, vel
                    omnis alias impedit.
                  </p>
                </div>
                {added ?
                  <Link to={`/e-books/cart`} className="book__link">
                  <button className="btn">Checkout</button>
                  </Link>:
                  <button className="btn" onClick={()=>addBookToCart(book)}>Add to cart</button>
               }
              
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
            {books
            .filter(book=>book.rating===5 &&+book.id!==+id)
            .slice(0,4)
            .map(book=><Book book={book} key={book.id}></Book>)
          }
          </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
