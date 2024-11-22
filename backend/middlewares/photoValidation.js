const { body } = require("express-validator");

const photoInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O título é obrigatório.")
      .isString(0)
      .withMessage("O título é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O título precisa ter no mínimo 3 caracteres"),
  ];
};
