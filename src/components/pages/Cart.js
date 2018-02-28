import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Col, Row, Well, Button } from 'react-bootstrap'

class Cart extends Component {

  renderCart = () => {
    const cartItemsList = this.props.cart.map(cartItem => ( 
      <Panel key={cartItem.id} style={{ marginTop: '10px', marginBottom: '10px'}}>
        <Row>
          <Col xs={12} sm={4}>
            <h6>{cartItem.title}</h6>
          </Col>
        </Row>
      </Panel>
    ))
    return (
      <Panel bsStyle="primary" style={{ padding: '20px' }}>
        <Panel.Heading>Cart</Panel.Heading>
        {cartItemsList}
      </Panel>
    )
  }

  render() {
    return !!this.props.cart[0]
        ? this.renderCart()
        : (<div></div>)
  }

  
}

const mapStateToProps = state => ({
  cart: state.cart.cart
})

export default connect(mapStateToProps)(Cart)
