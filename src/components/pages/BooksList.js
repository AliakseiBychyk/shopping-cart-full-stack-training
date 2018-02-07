import React, { Component } from 'react'
import { connect } from 'react-redux'


class BooksList extends Component{
  render() {
    const booksList = this.props.books.map(book => 
      <div key={book.id}>
        <h2>{book.title}</h2>
        <h3>{book.description}</h3>
        <h3>{book.price}</h3>
      </div>
    )
    return (
      <div>
        <h1>Hello React</h1>
        {booksList} 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps)(BooksList)