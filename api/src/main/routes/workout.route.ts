import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import { makeCreateWorkoutController } from "main/factories/workout.factory";

export default (router: Router) => {
  router.post("/workout", adaptRoute(makeCreateWorkoutController()));
};
