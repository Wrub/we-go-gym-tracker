import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import { makeListExercisesController } from "main/factories/exercise.factory";
import {
  makeCreateWorkoutController,
  makeFindWorkoutController,
} from "main/factories/workout.factory";

export default (router: Router) => {
  router.get("/workouts", adaptRoute(makeListExercisesController()));
  router.get("/workouts/:id", adaptRoute(makeFindWorkoutController()));
  router.post("/workouts", adaptRoute(makeCreateWorkoutController()));
};
