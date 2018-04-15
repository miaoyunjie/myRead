import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import BooksList from './BooksList'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  //调用更新接口
  update = (book,value) => {
    BooksAPI.update(book,value).then(() =>{
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      });
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksList book={this.state.books} updateListShelf={this.update}/>
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks updateSearchShelf={this.update} listBooks={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
