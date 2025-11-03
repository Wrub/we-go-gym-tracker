import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import { makeCreateUserController, makeFindUserController } from "main/factories/user.factory";

export default (router: Router): void => {
  router.get("/users/:id", adaptRoute(makeFindUserController()));
  router.post("/users", adaptRoute(makeCreateUserController()));
};
