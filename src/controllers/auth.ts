import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { IUser } from "../models/User";
import { AuthService } from "../services/auth";

const registerUser = async (req: Request, res: Response) => {
  const userData = req.body as IUser;
  const registeredUser = await AuthService.registerUser(userData);
  res.status(StatusCodes.OK).json({ status: "success", user: registeredUser });
};

const loginUser = async (req: Request, res: Response) => {
  const loginData = req.body as IUser;
  const loggedInUser = await AuthService.loginUser(loginData);
  res.status(StatusCodes.OK).json({ status: "success", user: loggedInUser });
};

export const AuthController = {
  registerUser,
  loginUser,
};
