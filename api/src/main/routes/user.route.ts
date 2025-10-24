import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import { makeCreateUserController, makeGetUserControler } from "main/factories/user";

export default (router: Router): void => {
  router.get("/user/:id", adaptRoute(makeGetUserControler()));
  router.post("/user", adaptRoute(makeCreateUserController()));
};
