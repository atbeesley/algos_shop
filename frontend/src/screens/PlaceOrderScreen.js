import React, {useState} from 'react'
import { Form, Button, Col, ListGroup, Image, Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'

const PlaceOrderScreen = () => {
    const dispatch = useDispatch()

    const basket = useSelector(state => state.basket) 

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    basket.itemsPrice = 
        addDecimals(basket.basketItems.reduce((acc, item) => acc + item.price * item.qty, 0))

    basket.shippingPrice = 
        addDecimals(basket.itemsPrice > 100 ? 0 : 100)

    basket.taxPrice = 
        addDecimals(Number((0.175 * basket.itemsPrice).toFixed(2)))

    basket.totalPrice = (
        Number(basket.itemsPrice) + 
        Number(basket.shippingPrice) + 
        Number(basket.taxPrice)
    ).toFixed(2)

const placeOrderHandler = () => {
    dispatch(createOrder({
        orderItems: basket.orderItems,
        shippingAdress: basket.shippingAddress,
        paymentMethod: basket.paymentMethod,
        itemsPrice: basket.itemsPrice,
        shippingPrice: basket.shippingPrice,
        taxPrice: basket.taxPrice,
        totalPrice: basket.totalPrice
    }))
}

    return (
    <>
         <CheckoutSteps step1 step2 step3 step4 />
         <Row>
             <Col md={8}>
                 <ListGroup variant="flush">
                     <ListGroup.Item>
                         <h2>Shipping</h2>
                         <p>
                             <strong>Address: </strong>
                             {basket.shippingAddress.address},{" "}{basket.shippingAddress.city}{" "}
                             {basket.shippingAddress.postcode},{" "}
                             {basket.shippingAddress.country}
                         </p>
                     </ListGroup.Item>
                     <ListGroup.Item>
                         <h2>Payment Method</h2>
                         <strong>Method: </strong>
                         {basket.paymentMethod}
                     </ListGroup.Item>
                     <ListGroup.Item>
                         <h2>Order Items</h2>
                         {basket.basketItems.length === 0 ? (
                            <Message>Your basket is empty!</Message>) : (
                            <ListGroup variant="flush">
                                {basket.basketItems.map((item, index) => (
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
                                 <Col>£{basket.itemsPrice}</Col>
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Row>
                                 <Col>Shipping</Col>
                                 <Col>£{basket.shippingPrice}</Col>
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Row>
                                 <Col>VAT</Col>
                                 <Col>£{basket.taxPrice}</Col>
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Row>
                                 <Col>Total</Col>
                                 <Col>£{basket.totalPrice}</Col>
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Button type='button' 
                                     className='btn-block' 
                                     disabled={basket.basketItems === 0} 
                                     onClick={placeOrderHandler}
                             ></Button>
                         </ListGroup.Item>
                     </ListGroup>
                 </Card>
             </Col>
         </Row>
        </>
        )
}

export default PlaceOrderScreen
