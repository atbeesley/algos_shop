import React, {useEffect} from 'react'
import { Button, Col, ListGroup, Image, Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../components/Message'
import Loader from '../components/Loader'
import CheckoutSteps from '../components/CheckoutSteps'
import { getOrderDetails } from '../actions/orderActions'

const OrderScreen = ({ match }) => {
    const orderId = match.params.id
    const dispatch = useDispatch()

const orderDetails = useSelector((state) => state.orderCreate)
const { order, success, error, loading } = orderDetails

useEffect(() => {
    dispatch(getOrderDetails(orderId))
}, [])

    return loading ? <Loader/> : error ? <Message variant='danger'>{error}</
    Message> : <>
        <h1>Order {order._id}</h1>
        <Row>
             <Col md={8}>
                 <ListGroup variant="flush">
                     <ListGroup.Item>
                         <h2>Shipping</h2>
                         <p>
                             <strong>Address: </strong>
                             {order.shippingAddress.address},{" "}{order.shippingAddress.city}{" "}
                             {order.shippingAddress.postcode},{" "}
                             {order.shippingAddress.country}
                         </p>
                     </ListGroup.Item>
                     <ListGroup.Item>
                         <h2>Payment Method</h2>
                         <strong>Method: </strong>
                         {order.paymentMethod}
                     </ListGroup.Item>
                     <ListGroup.Item>
                         <h2>Order Items</h2>
                         {order.orderItems.length === 0 ? (
                            <Message>Your order is empty!</Message>) : (
                            <ListGroup variant="flush">
                                {order.orderItems.map((item, index) => (
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                                <Image 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    fluid 
                                                    rounded
                                                />
                                            </Col>
                                            <Col>
                                                <Link to={`/product/${item.product}`}>
                                                    {item.name}
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                {item.qty} x £{item.price} = £{item.qty * item.price}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>

                            )}
                     </ListGroup.Item>
                 </ListGroup>
             </Col>
             <Col md={4}>
                 <Card>
                     <ListGroup variant='flush'>
                         <ListGroup.Item>
                             <h2>Order Summary</h2>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Row>
                                 <Col>Items</Col>
                                 <Col>£{order.itemsPrice}</Col>
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Row>
                                 <Col>Shipping</Col>
                                 <Col>£{order.shippingPrice}</Col>
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Row>
                                 <Col>VAT</Col>
                                 <Col>£{order.taxPrice}</Col>
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Row>
                                 <Col>Total</Col>
                                 <Col>£{order.totalPrice}</Col>
                             </Row>
                         </ListGroup.Item>
                        <ListGroup.Item>
                            {error && <Message variant='danger'>{error}</Message>}
                        </ListGroup.Item>
                         <ListGroup.Item>
                             <Button type='button' 
                                     className='btn-block' 
                                     disabled={order.orderItems === 0} 
                                    //  onClick={}
                             >Place Order</Button>
                         </ListGroup.Item>
                     </ListGroup>
                 </Card>
             </Col>
         </Row>
    </>

}

export default OrderScreen
