import { validationResult } from "express-validator";

// 유효성 검사
export const validate = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){ //유효성 검사 오류 없을때 true 반환해서 next 호출해서 다음으로 넘김
        return next()
    }
    return res.status(400).json({message: errors.array()[0].msg})
}