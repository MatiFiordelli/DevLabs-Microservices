import express from 'express'
import { validateCredentials } from '../middlewares/validationLoginData'
import { loginController } from '../controllers/loginController'
import { signupController } from '../controllers/signupController'
import { verifiedTokenOkController } from '../controllers/verifiedTokenOkController'
import { verifyToken } from '../middlewares/verifyToken'

const router = express.Router()

router.post('/login', validateCredentials, loginController)
router.post('/signup', validateCredentials, signupController)
router.get('/verify-token', verifyToken, verifiedTokenOkController)

export { router }