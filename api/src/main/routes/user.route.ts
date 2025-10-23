import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import { makeCreateUserController } from "main/factories/user";

export default (router: Router): void => {
  router.post("/user", adaptRoute(makeCreateUserController()));
};
