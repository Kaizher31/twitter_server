import * as authRepository from '../data/auth.js'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { create } from '../data/tweet.js'
import { config } from '../config.js'


async function createJwtToken(id) { // 사용자 ID JWT 생성(토큰 생성)
    return jwt.sign({id}, config.jwt.secretKey, {expiresIn: config.jwt.expiresInSec})
}

// sign up
export async function signup(req, res, next) {
    const {username, password, name, email} = req.body
    const found = await authRepository.findByUsername(username)
    if(found){
        return res.status(409).json({message: `${username}이 이미 있습니다`})
    }
    // const users = await authRepository.createUser(username, password, name, email)
    const hashed = bcrypt.hashSync(password, config.bcrypt.saltRounds)
    const users = await authRepository.createUser(username, hashed, name, email) // 사용자 정보를 데이터베이스에 저장
    const token = await createJwtToken(users.id)
    res.status(201).json({token, username})
}


// login
export async function login(req, res, next) {
    const {username, password} = req.body
    const user = await authRepository.findByUsername(username)
    if(!user) {
        return res.status(401).json(`${username} 아이디를 찾을 수 없다.`)  
    }
    const isValidPassword = await bcrypt.compare(password, user.password)
    if(!isValidPassword){
        return res.status(401).json({message: `아이디 또는 비밀번호 확인`})
    }

    const token = await createJwtToken(user.id)
    res.status(200).json({token, username})
}

// 로그인 사용자 유지(토큰 유효한지 검사하고)
// 근데 이부분은 토큰의 유효성 검사 생략되어서 넘어온 토큰이 만료되지 않았는지, 변조되지 않았는지 확인과정이 필요하다.
export async function verify(req, res, next) {
    const token = req.header['Token']
    if(token){
        res.status(200).json(token)
    }
}

// 로그인 됬는지 판별(me), 사용자 정보 조회
export async function me(req, res, next) {
    const user = await authRepository.findById(req.userId)
    if(!user){
        return res.status(404).json({message: `일치하는 사용자가 없음`})
    }
    res.status(200).json({token: req.token, username: user.username})
    
}