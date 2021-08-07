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

    const removeFromBasketHandler = (id) => {
        console.log('remove')
    }

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
            </Message> : (
            <ListGroup variant='flush'>
                {basketItems.map(item => (
                    <ListGroup.Item key={item.product}>
                        <Row>
                            <Col md={2}>
                                <Image src={item.image} alt={item.name} fluid rounded />
                            </Col>
                            <Col>
                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                            </Col>
                            <Col md={2}>
                                {item.price}
                            </Col>
                            <Col md={2}>
                                <Form.Control 
                                    as='select' 
                                    value={item.qty} 
                                    onChange={(e) => dispatch(addToBasket(item.product, Number(e.target.value)))}>
                                        {[...Array(item.countInStock).keys()].map(x => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                </Form.Control>
                            </Col>
                            <Col>
                             <Button type='button' variant='light' onClick={removeFromBasketHandler(item.handler)}>
                                 <i className='fas fa-trash'></i>
                             </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>)}
       </Col>
    )
}

export default BasketScreen


