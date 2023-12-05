const {body} = require("express-validator")

const userCreateValidation = () => {
    return [body("name").isString().withMessage("O nome é obrigatório").isLength({min: 3}).withMessage("O nome precisa ter no mínimo 3 caracteres")], body("email").isString().withMessage("Insira um e-mail válido"), body("password").isString().withMessage("A senha é obrigatória"), body("confirmpassord").isString().withMessage("A confirmação de senha é obrigatória").custom((value, {req}) => {
        if (value != req.body.password) {
            throw new Error("As senhas não são iguais")
        } 
        return true   
    })
}

module.exports = { 
    userCreateValidation, 
}