const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isString = (v) => typeof v === "string";
const isNonEmpty = (v) => isString(v) && v.trim().length > 0;

export const validators = {
  email: (v) => isString(v) && EMAIL_RE.test(v) && v.length <= 255,
  name: (v) => isNonEmpty(v) && v.length <= 100,
  password: (v) => isString(v) && v.length >= 6 && v.length <= 200,
  positiveInt: (v) => Number.isInteger(Number(v)) && Number(v) > 0,
  positiveNumber: (v) => typeof Number(v) === "number" && !Number.isNaN(Number(v)) && Number(v) > 0,
  shortText: (max = 100) => (v) => isNonEmpty(v) && v.length <= max,
  optionalShortText: (max = 100) => (v) => v == null || v === "" || (isString(v) && v.length <= max),
  oneOf: (allowed) => (v) => allowed.includes(v),
};

export const validate = (schema) => (req, res, next) => {
  const errors = [];
  for (const [field, rule] of Object.entries(schema)) {
    const value = req.body?.[field];
    if (!rule(value)) {
      errors.push(field);
    }
  }
  if (errors.length) {
    return res.status(400).json({
      message: "Date invalide",
      fields: errors,
    });
  }
  next();
};
