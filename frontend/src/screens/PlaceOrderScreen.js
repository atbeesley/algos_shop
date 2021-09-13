import React, {useState} from 'react'
import { Form, Button, Col, ListGroup, Image, Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrderScreen = () => {
    const basket = useSelector(state => state.basket) 

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
         </Row>
        </>
        )
}

export default PlaceOrderScreen
