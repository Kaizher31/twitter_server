import express from "express"
import * as authController from '../controller/auth.js'
import { validate } from "../middleware/validator.js"
import { body } from "express-validator"
import { isAuth } from "../middleware/auth.js"

const router = express.Router()

// 아이디, 비밀번호
const validateLogin = [
    body('username').trim().isLength({min:4}).withMessage('아이디는 최소 4자이상 입력해야 합니다.').matches(/^[a-zA-Z0-9]*$/).withMessage('특수문자 사용 불가'),
    body('password').trim().isLength({min:8}).withMessage('비밀번호는 최소 8자이상 입력해야 합니다.'),
    validate
]

const validateSignup = [
    ...validateLogin,
    body('name').trim().notEmpty().withMessage('name을 입력'),
    body('email').trim().isEmail().withMessage('이메일 형식 확인'),
    validate
]

// 회원가입
router.post('/signup', validateLogin, authController.signup)

// 로그인
router.post('/login', validateLogin, authController.login)

// 로그인 유지(로그인 됬는지 판별)
router.get('/me', isAuth, authController.me)





export default router