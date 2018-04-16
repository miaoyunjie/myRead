import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BooksList extends Component {
	render(){
		return (
		  <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>        
              	<div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.book.filter((book) => (book.shelf === 'currentlyReading')).map((book) => (
	                      <li key={book.id}>
	                        <div className="book">
	                          <div className="book-top">
	                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + (book.imageLinks ? book.imageLinks.smallThumbnail : 'http://books.google.com/books/content?id=XRekDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api') + ")" }}></div>
	                            <div className="book-shelf-changer">
	                              <select defaultValue="currentlyReading" onChange={(event) => this.props.updateListShelf(book,event.target.value)}>
	                                <option value="null" disabled>Move to...</option>
	                                <option value="currentlyReading">Currently Reading</option>
	                                <option value="wantToRead">Want to Read</option>
	                                <option value="read">Read</option>
	                                <option value="none">None</option>
	                              </select>
	                            </div>
	                          </div>
	                          <div className="book-title">{book.title?book.title:''}</div>
	                          <div className="book-authors">{book.authors?book.authors[0]:''}</div>
	                        </div>
	                      </li>
                      ))}                      
                    </ol>
                  </div>
                </div>   
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.book.filter((book) => (book.shelf === 'wantToRead')).map((book) => (
	                      <li key={book.title}>
	                        <div className="book">
	                          <div className="book-top">
	                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + (book.imageLinks ? book.imageLinks.smallThumbnail : 'http://books.google.com/books/content?id=XRekDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api') + ")" }}></div>
	                            <div className="book-shelf-changer">
	                              <select defaultValue="wantToRead" onChange={(event) => this.props.updateListShelf(book,event.target.value)}>
	                                <option value="null" disabled>Move to...</option>
	                                <option value="currentlyReading">Currently Reading</option>
	                                <option value="wantToRead">Want to Read</option>
	                                <option value="read">Read</option>
	                                <option value="none">None</option>
	                              </select>
	                            </div>
	                          </div>
	                          <div className="book-title">{book.title?book.title:''}</div>
	                          <div className="book-authors">{book.authors?book.authors[0]:''}</div>
	                        </div>
	                      </li>
                      ))}                      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.book.filter((book) => (book.shelf === 'read')).map((book) => (
	                      <li key={book.title}>
	                        <div className="book">
	                          <div className="book-top">
	                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + (book.imageLinks ? book.imageLinks.smallThumbnail : 'http://books.google.com/books/content?id=XRekDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api') + ")" }}></div>
	                            <div className="book-shelf-changer">
	                              <select defaultValue="read" onChange={(event) => this.props.updateListShelf(book,event.target.value)}>
	                                <option value="null" disabled>Move to...</option>
	                                <option value="currentlyReading">Currently Reading</option>
	                                <option value="wantToRead">Want to Read</option>
	                                <option value="read">Read</option>
	                                <option value="none">None</option>
	                              </select>
	                            </div>
	                          </div>
	                          <div className="book-title">{book.title?book.title:''}</div>
	                          <div className="book-authors">{book.authors?book.authors[0]:''}</div>
	                        </div>
	                      </li>
                      ))}                      
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link 
                to='/search'
              >Add a book</Link>
            </div>
          </div>
		)
	}
}

export default BooksList