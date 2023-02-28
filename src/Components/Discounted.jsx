import React from 'react';
import {books} from '../data'
import Books from './ui/Books';


const Discounted = () => {
    return (
    <section id='recent'>
        <div className='container'>
            <div className="row">
                <div className='section__title'>
                    Discount <span>Books</span>
                </div>
                <div className='books'>
                    {books.filter(book=>book.salePrice>0).slice(0,8).map((book)=>(
                        <Books book={book} key={book.id}/>
                    ))}
                </div>
            </div>
        </div>
    </section>

    );
}

export default Discounted;
