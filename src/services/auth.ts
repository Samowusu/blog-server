import bcrypt from "bcrypt";
import { UnauthenticatedError } from "../errors";
import User, { IUser } from "../models/User";
import {
  createUserValidator,
  loginUserValidator,
} from "../schema-validators/user";

const registerUser = async (userData: IUser) => {
  const { error } = createUserValidator.validate(userData);

  if (error) {
    throw new Error(error.details[0].message);
  }

  const newUser = await User.create(userData);
  const token = newUser.createJWT();

  return { name: newUser.name, token };
};

const loginUser = async (loginData: IUser) => {
  const { error, value } = loginUserValidator.validate(loginData);

  if (error) {
    throw new Error(error.details[0].message);
  }

  const user = await User.findOne({ email: value.email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Email");
  }

  const isPasswordCorrect = await user.comparePassword(value.password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Password");
  }

  const token = user.createJWT();
  return { name: user.name, token };
};

export const AuthService = {
  registerUser,
  loginUser,
};
