import Joi from "joi";
import { IUser } from "../models/User";

export const createUserValidator = Joi.object<IUser>({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const loginUserValidator = Joi.object<IUser>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const resetPasswordValidator = Joi.object<IUser>({
  password: Joi.string().required(),
});
