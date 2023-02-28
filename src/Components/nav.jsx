import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg';
import { Link } from "react-router-dom";

const Nav = ({numberofItems}) => {
    function openMenu(){
        document.body.classList += " menu--open"
    }
    function closeMenu(){
        document.body.classList.remove("menu--open")
    }

    return (
        <nav>
            <div className="nav__container">
                <Link to="e-books/">
                <img src={LibraryLogo} className='logo' alt="" />
                </Link>
                <ul className='nav__links'>
                <li className="nav__list">
            <Link to="e-books/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
          <Link to="e-books/books" className="nav__link nav__link--primary">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <Link to="e-books/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {numberofItems > 0 && (
              <span className="cart__length">{numberofItems}</span>
            )}         
          </li>
                </ul>
                <div className="menu__backdrop">
                    <button className='btn__menu btn__menu--close' onClick={closeMenu} >
                    <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link className="menu__link" to="e-books/">Home</Link>
                        </li>
                        <li className="menu__list">
                            <Link className="menu__link" to="e-books/books">Books</Link>
                        </li>
                        <li className="menu__list">
                            <Link className="menu__link" to="e-books/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
