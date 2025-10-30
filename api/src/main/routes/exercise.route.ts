import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import {
  makeCreateExerciseController,
  makeFindExerciseController,
  makeListExercisesController,
} from "main/factories/exercise.factory";

export default (router: Router) => {
  router.get("/exercises", adaptRoute(makeListExercisesController()));
  router.get("/exercises/:id", adaptRoute(makeFindExerciseController()));
  router.post("/exercises", adaptRoute(makeCreateExerciseController()));
};
