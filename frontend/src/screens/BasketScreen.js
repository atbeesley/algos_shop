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
        <div>
            hi from BasketScreen
        </div>
    )
}

export default BasketScreen


