import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import User from '../models/userModel.js'

// @desc Fetch all users
// @route GET /api/users
// @access Public
router.get('/', 
    asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
}))

// @desc Fetch all products
// @route GET /api/products/:id
// @access Public
router.get(
    '/:id', 
    asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(user){
        res.json(product)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
}))

export default router