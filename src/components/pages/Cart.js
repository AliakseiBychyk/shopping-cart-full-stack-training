import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Col, Row, Well, Button, ButtonGroup, Label } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { deleteCartItem } from '../../actions/cartActions'

class Cart extends Component {

  onDelete = id => {
    console.log('this.props.cart', this.props.cart)
    const cartAfterDelete = [...this.props.cart].filter(({_id}) => _id !== id) 
    this.props.deleteCartItem(cartAfterDelete)
  }

  renderCart = () => {
    const cartItemsList = this.props.cart.map(cartItem => ( 
      <Panel key={cartItem._id} style={{ marginTop: '10px', marginBottom: '10px'}}>
        <Row>
          <Col xs={12} sm={4}>
            <h6>{cartItem.title}</h6><span>    </span>
          </Col>
          <Col xs={12} sm={2}>
            <h6>usd.{cartItem.price}</h6><span>    </span>
          </Col>
          <Col xs={12} sm={2}>
            <h6>qty. <Label bsStyle="success"></Label></h6><span>    </span>
          </Col>
          <Col xs={6} sm={4}>
            <ButtonGroup style={{minWidth: '300px'}}>
              <Button bsStyle="default" bsSize="small">-</Button>
              <Button bsStyle="default" bsSize="small">+</Button>
              <span>     </span>
              <Button
                onClick={() => this.onDelete(cartItem._id)} 
                bsStyle="danger" 
                bsSize="small"
              >DELETE</Button>
            </ButtonGroup>
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

const mapDispatchToProps = dispatch => bindActionCreators({ deleteCartItem }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
