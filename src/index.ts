import "express-async-errors";
import express, { Express } from "express";
import dotenv from "dotenv";
import helmet from "helmet";

//MIDDLEWARE IMPORTS
import errorHandlerMiddleware from "./middleware/errorHandler";
import notFound from "./middleware/notFound";
import AuthenticateUser from "./middleware/authentication";

//ROUTES IMPORTS
import { AuthRoute, PostRoute } from "./routes/index";
import connectDB from "./db/connect";

// CONFIGURATIONS
dotenv.config();
const app: Express = express();

const BASE_ROUTE = "/api/v1";

//MIDDLEWARES
app.use(express.json({ limit: "200mb" }));
app.use(
  express.urlencoded({ limit: "200mb", extended: true, parameterLimit: 50000 })
);
app.use(helmet());

//ROUTES
app.use(`${BASE_ROUTE}/auth`, AuthRoute);
app.use(`${BASE_ROUTE}/posts`, AuthenticateUser, PostRoute);
//ERROR HANDLER MIDDLEWARES
app.use(notFound);
app.use(errorHandlerMiddleware);

//START SERVER
const PORT = process.env.PORT || 5000;
const init = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

init();
