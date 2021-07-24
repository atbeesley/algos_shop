import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'adminuser@algos.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Bob Fish',
        email: 'BobFish@algos.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Admin User',
        email: 'adminuser@algos.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users