import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Message from '../components/Message'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToBasket } from '../actions/basketActions'

const BasketScreen = ({ match, location, history }) => {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1 

    console.log('qty: ', qty)

    const dispatch = useDispatch()

    const basket = useSelector(state => state.basket)
    const { basketItems } = basket

    console.log('basketItems: ', basketItems)

    useEffect(() => {
        if(productId){
            dispatch(addToBasket(productId, qty))
        }
    }, [dispatch, productId, qty])

    return (
       <Col md={8}>
           <h1>Shopping Basket</h1>
           {basketItems.length === 0 ? 
           <Message>
               Your basket is empty! 
               <br />
               <Link to='/'>Go back</Link>
            </Message> : ('your basket is not empty')}
       </Col>
    )
}

export default BasketScreen


