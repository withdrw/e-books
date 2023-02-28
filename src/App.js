import Footer from "./Components/Footer";
import Nav from "./Components/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] =useState([]);

  function addToCart(book){
   
          setCart([...cart, {...book, quantity:1}])
    
  }
  useEffect(()=>{
  
  },[cart])


function changeQuantity(book, quantity) {
  setCart(
    cart.map((item)=>
    item.id === book.id
    ?{
      ...item,
      quantity:+quantity,
    }  
    : item
    )
  )  
}  




function removeItem(item){
 setCart(cart.filter(book=>book.id!==item.id))
}

function numberofItems(){
  let counter= 0;
  cart.forEach(item => {
    counter += item.quantity
  })
  return counter
}


function totalPrice (){
  let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
}



  return (
    <Router>
        <div className="App">
          <Nav numberofItems={numberofItems()} />
          <Routes>
          <Route path="/e-books/" element={<Home></Home>}></Route>
          <Route path="/e-books/books" element={<Book books={books}></Book>}></Route>
          <Route
            path="/e-books/books/:id"
            element= <BookInfo books={books} addToCart={addToCart} />></Route>
            <Route path="e-books/cart" element ={<Cart books={books} removeItem={removeItem} cart={cart} changeQuantity= {changeQuantity} totals={totalPrice()} ></Cart>}/>
            </Routes>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
