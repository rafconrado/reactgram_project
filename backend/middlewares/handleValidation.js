const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  // Use errors.isEmpty() para verificar se há erros
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];

  // Extraindo mensagens de erro corretamente
  errors.array().map((err) => extractedErrors.push(err.msg));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = validate;
