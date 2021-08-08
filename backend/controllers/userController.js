import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc Fetch all users
// @route GET /api/users
// @access Public
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

// @desc Fetch a user by ID
// @route GET /api/users/:id
// @access Public
const getUserById = asyncHandler(async (req, res) => {
    const user = await user.findById(req.params.id)
    if(user){
        res.json(user)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

export { getUsers, getUserById }