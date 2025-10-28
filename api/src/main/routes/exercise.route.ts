import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import { makeCreateExerciseController, makeListExercisesController } from "main/factories/exercise";

export default (router: Router) => {
  router.get("/exercises", adaptRoute(makeListExercisesController()));
  router.post("/exercise", adaptRoute(makeCreateExerciseController()));
};
