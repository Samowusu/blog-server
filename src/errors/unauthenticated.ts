import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customApi";

class UnauthenticatedError extends CustomAPIError {
  statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

export default UnauthenticatedError;
