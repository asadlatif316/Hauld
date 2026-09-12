import express from 'express'
import { login,logout,getUser } from '../controller'
const router = express.Router()

router.post('/login',login)
router.post('/logout',logout)
router.get('/user/me',getUser)