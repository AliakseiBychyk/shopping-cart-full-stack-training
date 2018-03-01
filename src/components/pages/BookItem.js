import React, { Component } from 'react'
import { Well, Col, Row, Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addToCart, updateCart} from '../../actions/cartActions'
import Cart from './Cart'

class BookItem extends Component{
  
  handleCart = () => {
    const book = [{
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price,
      quantity: 1
    }]
    // CHECK IF CART IS EMPTY
    this.props.cart.length === 0
      // CART IS EMPTY
      ? this.props.addToCart(book)      
      // CART IS NOT EMPTY     
      : this.props.cart.findIndex(book => book._id === this.props._id) === -1
        ? this.props.addToCart(book)
        : this.props.updateCart(this.props._id, 1)
  }

  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h2>{this.props.title}</h2>
            <h3>{this.props.description}</h3>
            <h3>$ {this.props.price}</h3>
            <Button
              onClick={this.handleCart} 
              bsStyle="primary" 
            >Buy not now</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
})

const mapDispatchToProps = dispatch => bindActionCreators({ addToCart, updateCart }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)