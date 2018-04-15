import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
	state = {
		query:'',
		searchBooks: []
	};
	//调用搜索接口
	updateQuery = (query) => {
	  if(query === ''){
	  	this.setState({
	  	  query: '',
	  	  searchBooks: []
	  	});
	  	return ;
	  }

	  this.setState(
		{
		  query: query,
		  searchBooks: []
		},
		function stateUpdateComplete(){
			this.search();
		}.bind(this)
	  );
	}
	search = () => {
		const query = this.state.query;
		if (query.trim() === '') {
			this.setState({
				query: '',
				searchBooks: []
			});
			return ;
		}
		BooksAPI.search(query).then((searchBooks) =>{
			if(query !== this.state.query){
				return;
			}
			if(!Array.isArray(searchBooks)){
				searchBooks = [];
			}
			this.setState({ searchBooks })
		});
	}
	//获取书架数据
	getShelf = (book) => {
		let a = [];
		for (let i=0; i<this.props.listBooks.length; i++){
			if(this.props.listBooks[i].id === book.id){
				a.push(this.props.listBooks[i]);
			} 
		}
		if(a.length !== 0){
			return (a[0].shelf)
		} else {
			return ('none')
		}
	}
	
	render() {
		return (
		  <div className="search-books">
            <div className="search-books-bar">
              <Link 
                className="close-search" 
                to='/'
              >Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author" 
                  value={this.state.query} 
                  onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              	{this.state.searchBooks.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + book.imageLinks.smallThumbnail + ")" }}></div>
                        <div className="book-shelf-changer">
                          <select defaultValue={this.getShelf(book)} onChange={(event) => this.props.updateSearchShelf(book,event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors[0]}</div>
                    </div>
                  </li>
              	))}
              </ol>
            </div>
          </div>
		)
	}
}

export default SearchBooks