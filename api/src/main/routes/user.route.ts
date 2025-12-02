import { Router } from "express";
import { adaptMiddleware } from "main/adapters/adapt-middleware";
import { adaptRoute } from "main/adapters/adapt-route";
import { makeCreateUserController, makeFindUserController } from "main/factories/user.factory";
import { authMiddleware } from "main/middleware/auth-middleware";

export default (router: Router): void => {
  router.get("/users/:id", adaptMiddleware(authMiddleware), adaptRoute(makeFindUserController()));
  router.post("/users", adaptRoute(makeCreateUserController()));
};
