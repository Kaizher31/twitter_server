import express from "express"
import tweetsRouter from './router/tweets.js'
import authRouter from './router/auth.js'
import { config } from './config.js'

const app = express()

app.use(express.json())

app.use('/tweets', tweetsRouter)
app.use('/auth', authRouter)


app.use((req, res, next) => {
    res.sendStatus(404)
})

app.listen(config.host.port)

/*
    HTTP 상태 코드
    1. 1xx(정보 응답)
    - 100: Continue (요청 일부 완료, 서버가 나머지 요청을 계속 받을 수 있음)
    - 101: Switching Protocols (클라이언트가 포로토콜 변경 요청, 이를 승인)

    2. 2xx(성공 응답)
    - 200: OK (일반적으로 GET 요청에 대한 성공 응답)
    - 201: Created (요청 성공적으로 처리되고, 새로운 리소스가 생성되었음을 나타냄, POST)
    - 202: Accepted (요청 접수되었으나 아직 미처리)
    - 204: No Content (요청 성공적으로 처리되고, 반환할 콘텐츠가 없음을 의미)

    3. 3xx(리다이렉션 응답)
    - 301 Moved Permanently (요청 리소스의 URL 변경, 새로운 URl로 영구 이동)
    - 302 Found (요청 리소스가 다른 URL로 일시적으로 이동)
    - 304 Not Modified (요청한 리소스가 변경되지 않음)

    4. 4xx (클라이언트 오류)
    - 400 Bad Request (요청이 잘못되었거나 서버가 이해할 수 없을때 반환)
    - 401 Unauthorized (인증 필요하지만 클라이언트가 인증되지 않았거나 잘못된 인증 정보를 제공)
    - 403 Forbidden (서버가 요청을 이해했지만 권환문제로 요청 거부, 권환이 없다)
    - 404 Not Found (요청 리소스를 찾을 수 없을 때 반환)
    - 405 Method Not Allowed (요청 HTTP 메서드가 서버에서 지원되지 않을 때 반환)
    - 409 Conflict (요청이 현재 서버 상태와 충돌 할때 발생, 중복된 데이터)
    - 429 Too Many Requests (클라이언트가 너무 많은 요청 보내서 서버가 제한함, 속도 제한 API 호출 한도 초과시 발생)

    5. 5xx (서버 오류)
    - 500 Internal Server Error (서버에서 예상치 못한 오류 발생 할때 반환, 코드버그 서버 문제)
    - 501 Not Implemented (서버가 요청한 기능을 지원하지 않을때 발생)
    - 502 Bad Gateway (게이트웨이나 프록시 서버가 상위 서버로부터 잘못된 응답을 받을때 발생)
    - 503 Service Unavailable: (서버가 현재 요청 처리할 수 없는 경우)
    - 504 Gateway Timeout (게이트웨이 또는 프록시 서버가 상위 서버로부터 응답을 받지 못해 타임아웃이 발생했을 때 발생)

*/