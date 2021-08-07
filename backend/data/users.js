import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@algos.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Bob Fish',
        email: 'BobFish@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jane Fish',
        email: 'JaneFish@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Frank Apple',
        email: 'FrankApple@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users