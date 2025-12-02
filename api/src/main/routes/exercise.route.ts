import { Router } from "express";
import { adaptMiddleware } from "main/adapters/adapt-middleware";
import { adaptRoute } from "main/adapters/adapt-route";
import {
  makeCreateExerciseController,
  makeFindExerciseController,
  makeListExercisesController,
} from "main/factories/exercise.factory";
import { authMiddleware } from "main/middleware/auth-middleware";

export default (router: Router) => {
  const protect = adaptMiddleware(authMiddleware);
  router.use(protect);

  router.get("/exercises", adaptRoute(makeListExercisesController()));
  router.get("/exercises/:id", adaptRoute(makeFindExerciseController()));
  router.post("/exercises", adaptRoute(makeCreateExerciseController()));
};
