import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import { makeListExercisesController } from "main/factories/exercise.factory";
import {
  makeCreateWorkoutController,
  makeDeleteWorkoutController,
  makeFindWorkoutController,
  makeListWorkoutsController,
} from "main/factories/workout.factory";

export default (router: Router) => {
  router.get("/workouts", adaptRoute(makeListWorkoutsController()));
  router.get("/workouts/:id", adaptRoute(makeFindWorkoutController()));
  router.post("/workouts", adaptRoute(makeCreateWorkoutController()));
  router.delete("/workouts/:id", adaptRoute(makeDeleteWorkoutController()));
};
