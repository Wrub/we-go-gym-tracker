import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import { makeCreateExerciseController } from "main/factories/exercise";

export default (router: Router) => {
  router.post("/exercise", adaptRoute(makeCreateExerciseController()));
};
