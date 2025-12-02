import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import { makeAuthenticateUserController } from "main/factories/auth.factory";

export default (router: Router): void => {
  router.post("/auth", adaptRoute(makeAuthenticateUserController()));
};
