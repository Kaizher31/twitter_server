import jwt, { decode } from "jsonwebtoken"

const secret = 'abcdefg1234%^&*'
const token = jwt.sign(
    {
        id:'apple',
        isAdmin: false
    },secret, {expiresIn: '2h'}
)

setTimeout(() => {
    jwt.verify(token, secret, (error, decoded) => {
        console.log(error,decoded)
    })
}, 3000)

console.log(token)