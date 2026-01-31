import Joi from "joi"
export const registerValidation =(data)=>{
    const schema=Joi.object({
        username: Joi.string().min(3).required(),
        branch: Joi.string().required(),
        password: Joi.string().min(6).required(),
        repeat_password: Joi.string().valid(Joi.ref("password")).required(),
        birthdate: Joi.string(),
        gender: Joi.string().valid("male","female"),
        role: Joi.string().valid("Admin", "SuperAdmin","Staff").default("Staff")
    })
    return schema.validate(data)
}