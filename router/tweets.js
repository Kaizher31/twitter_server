import express from "express"
import * as tweetController from '../controller/tweet.js'
import {body} from 'express-validator'
import { validate } from "../middleware/validator.js"
import { isAuth } from "../middleware/auth.js"

const router = express.Router()

/*
    아이디: 공백없음, 최소 3자이상(최소 3자이상 입력)
    비밀번호: 공백없음, 최소 4자이상 (최소 4자이상 입력)
*/
const validateTweet = [
    body('text').trim().isLength({min:3}).withMessage('최소 3자이상 입력'), validate
]


// 해당 아이디에 대한 트윗 가져오기
// GET 방식 사용할꺼고
// http://127.0.0.1:8080/tweets?username=:username
router.get('/', isAuth, tweetController.getTweets)


// 글번호에 대한 트윗 가져오기
// GET 방식 사용할꺼고
// http://127.0.0.1:8080/tweets/:id
router.get('/:id', isAuth, tweetController.getTweet)



// 트윗 추가하기
// POST 사용할 것이고
// http://127.0.0.1:8080/tweets
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력
router.post('/', isAuth, validateTweet, tweetController.createTweet)



// 트윗 수정하기
// PUT
// http://127.0.0.1:8080/tweets/:id
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력
router.put('/:id', isAuth, validateTweet, tweetController.updateTweet)


// 트윗 삭제하기
// DELETE 사용할 것이고
// http://127.0.0.1:8080/tweets/:id
router.delete('/:id', isAuth, tweetController.deleteTweet)



export default router