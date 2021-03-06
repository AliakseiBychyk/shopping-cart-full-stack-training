import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postBook } from '../../actions/booksActions'

class BooksForm extends Component{

  handleSubmit = () => {
    const book = {
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value
    }
    this.props.postBook(book)
  }

  render() {
    return (
      <Well>
        <Panel style={{ padding: '20px' }}>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Title"
              ref="title"
            />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Description"
              ref="description"
            />
            </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Price"
              ref="price"
            />
          </FormGroup>
          <Button onClick={this.handleSubmit} bsStyle="primary">Save book</Button>
        </Panel>
      </Well>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({postBook}, dispatch)
)

export default connect(null, mapDispatchToProps)(BooksForm)
