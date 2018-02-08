import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBooks } from '../../actions/booksActions'
import { Grid, Col, Row, Button } from 'react-bootstrap'

class BooksList extends Component{
  componentDidMount() {
    this.props.getBooks()
  }

  render() {
    const booksList = this.props.books.map(book => 
      <div key={book.id}>
        <h2>{book.title}</h2>
        <h3>{book.description}</h3>
        <h3>{book.price}</h3>
        <Button bsStyle="primary" >Buy now</Button>
      </div>
    )
    return (
      <Grid>
        <Row style={{ marginTop: '15px' }}>
          {booksList}  
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.books
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getBooks }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)