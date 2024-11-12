import { name } from "ejs"
import express from "express"

const router = express.Router()

let tweets = [
    {
        id: '1',
        name: '설윤',
        username: 'NMixx',
        text: '안녕하세요',
        createdAt: Date.now().toString(),
        url: 'https://sungyesa.com/new/data/file/free/2950632301_YpCvzx1S_23ffsdsdfsdfsdf.jpg'
    },
    {
        id: '2',
        name: '카리나',
        username: 'Karina',
        text: 'Hello 트윗 여러분',
        createdAt: Date.now().toString(),
        url: 'https://i.namu.wiki/i/pKp6bM6ovVkqzTlwj5lkWjCfyLCITAU3bP5chwJc7TcsgEh9dJxNGbAUfnTTlFsjAzmIG586bMk56Oa5OgHEZw.webp'
    },
    {
        id: '3',
        name: '장원영',
        username: 'IVE',
        text: '첫 트윗',
        createdAt: Date.now().toString(),
        url: 'https://www.cosinkorea.com/data/photos/20240414/art_17120529936565_2a8f34.jpg'
    },
    {
        id: '4',
        name: '미연',
        username: 'I-DLE',
        text: '회사 차리자',
        createdAt: Date.now().toString(),
        url: 'https://pimg.mk.co.kr/news/cms/202411/08/news-p.v1.20241108.2222bad919ff477a9691265e943ce110_P1.png'
    }
]




// 해당 아이디에 대한 트윗 가져오기
// GET 방식 사용할꺼고
// http://127.0.0.1:8080/tweets?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username
    const data = username ? tweets.filter((tweet) => tweet.username == username) : tweets
    res.status(200).json(data)
})


// 글번호에 대한 트윗 가져오기
// GET 방식 사용할꺼고
// http://127.0.0.1:8080/tweets/:id
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet) {
        res.status(200).json(tweet)
    }else{
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
})




// 트윗하기
// POST 사용할 것이고
// http://127.0.0.1:8080/tweets
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력
router.post('/', (req, res ,next) => {
    const {username, name, text} = req.body
    const tweet = {
        id:'5',
        username: username,
        name: name,
        text: text,
        createdAt: Date.now().toString()
    }
    tweets = [tweet, ...tweets]
    res.status(201).json(tweets)
})


// 트윗 수정하기
// PUT
// http://127.0.0.1:8080/tweets/:id
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력
router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const text = req.body
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet){
        tweet.text = text
        res.status(201).json(tweet)
    }else{
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
})

// 트윗 삭제하기
// DELETE 사용할 것이고
// http://127.0.0.1:8080/tweets/:id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    tweets = tweets.filter((tweet) => tweet.id !== id)
    res.status(200).json(tweets)    // 204 는 삭제되면 다른 내용은 안 나옴 
})




export default router