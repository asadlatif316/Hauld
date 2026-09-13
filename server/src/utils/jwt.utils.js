import jwt from 'jsonwebtoken'

const createToken = (payload) => {
    const secret = process.env.JWT_SECRET
    const options = {
        algorithm: 'HS256',
        expiresIn: '7d'
    }
    const token = jwt.sign(payload, secret, options)
    return token
}

const verifyToken = (token) => {
    const secret = process.env.JWT_SECRET
    const verifiedToken = jwt.verify(token, secret)
    return verifiedToken
}

export {createToken,verifyToken}