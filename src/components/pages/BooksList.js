import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBooks } from '../../actions/booksActions'
import { Grid, Col, Row, Button } from 'react-bootstrap'
import BookItem from './BookItem'

class BooksList extends Component{
  componentDidMount() {
    this.props.getBooks()
  }

  render() {
    const booksList = this.props.books.map(book => 
      <Col xs={12} sm={6} md={4} key={book.id}>
        <BookItem {...book} />
      </Col>
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