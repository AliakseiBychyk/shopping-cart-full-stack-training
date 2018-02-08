import React, { Component } from 'react'
import { Well, Col, Row, Button } from 'react-bootstrap'

class BookItem extends Component{
  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h2>{this.props.title}</h2>
            <h3>{this.props.description}</h3>
            <h3>$ {this.props.price}</h3>
            <Button bsStyle="primary" >Buy now</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

export default BookItem