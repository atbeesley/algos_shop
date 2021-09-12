import React, {useState} from 'react'
import { Form, Button, Col, ListGroup, Image, Card, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../components/Message'
import FormContainer from '../components/FormContainer'
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
                             {basket.shippingAddress.address},{" "}
                             {basket.shippingAddress.city}{" "}
                             {basket.shippingAddress.postcode},{" "}
                             {basket.shippingAddress.country}
                         </p>
                     </ListGroup.Item>
                 </ListGroup>
             </Col>
         </Row>
        </>
    )
}

export default PlaceOrderScreen
