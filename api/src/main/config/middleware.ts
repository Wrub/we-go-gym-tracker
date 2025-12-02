import { Express } from "express";
import { bodyParser, cookieParser } from "../middleware";
import helmet from "helmet";
import cors from "cors";

export default (app: Express): void => {
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser);
  app.use(cookieParser);
};
