import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/basketActions'

export const ShippingScreen = ({ history }) => {
    const basket = useSelector(state => state.basket)
    const { shippingAddress } = basket

    const [address, setAddress] = useState(shippingAddress.address || "")
    const [city, setCity] = useState(shippingAddress.city || "")
    const [postcode, setPostcode] = useState(shippingAddress.postcode || "")
    const [country, setCountry] = useState(shippingAddress.country || "")

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        console.log('starting proceeding to payment page')
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postcode, country }))
        history.push('/payment')
        console.log('ending proceeding to payment page')
    }

    return (
        <FormContainer>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter name' 
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter city' 
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='postcode'>
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter postcode' 
                        value={postcode}
                        required
                        onChange={(e) => setPostcode(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter country' 
                        value={country}
                        required
                        onChange={(e) => setCountry(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>
                </Form>
        </FormContainer>
    )
}
export default ShippingScreen
