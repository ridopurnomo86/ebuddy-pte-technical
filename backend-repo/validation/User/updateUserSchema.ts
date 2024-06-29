import Joi from "joi";

const updateUserSchema = Joi.object().keys({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().required(),
    name: Joi.string().required(),
    country: Joi.string().required(),
    bio: Joi.string().required().allow(null, ""),
});

export default updateUserSchema;
