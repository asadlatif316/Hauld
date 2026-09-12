import express from 'express'
import { login,logout,getUser } from '../controller/index.js'
const router = express.Router()

router.post('/login',login)
router.post('/logout',logout)
router.get('/user/me', getUser)

const authRouter = router

export default authRouter