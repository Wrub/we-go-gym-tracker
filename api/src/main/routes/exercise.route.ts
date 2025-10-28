import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import {
  makeCreateExerciseController,
  makeFindExerciseController,
  makeListExercisesController,
} from "main/factories/exercise";

export default (router: Router) => {
  router.get("/exercise", adaptRoute(makeListExercisesController()));
  router.get("/exercise/:id", adaptRoute(makeFindExerciseController()));
  router.post("/exercise", adaptRoute(makeCreateExerciseController()));
};
