import * as bcrypt from 'bcrypt'

const password = '3333'
const hashed = bcrypt.hashSync(password, 10)
// const hashed2 = bcrypt.hashSync(password, 10)
console.log(`password: ${password}, hashed: ${hashed}`)
// console.log(`password: ${password}, hashed: ${hashed2}`)

// password: abcd1234, hashed: $2b$10$oD.zV5K1APrv9vIhyrpy2OTzCIWj8mb1/MzwdE4hW.OEnBGVgA8Zq
// 10$: 라운드수
// oD.zV5K1APrv9vIhyrpy2: 해싱에 사용된 slat 값
// (위에 이후) 해시값

const result = bcrypt.compareSync('abcd1234', hashed)
console.log(result)