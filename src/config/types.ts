export type CustomError = {
  statusCode: number;
  message: string;
  name: string;
  code: number;
  keyValue: any;
  value: string;
  errors: {
    message: any;
  };
};
