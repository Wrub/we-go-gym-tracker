import { Router } from "express";
import { adaptRoute } from "main/adapters/adapt-route";
import { makeListExercisesController } from "main/factories/exercise.factory";
import {
  makeAddWorkoutExerciseController,
  makeCreateWorkoutController,
  makeDeleteWorkoutController,
  makeFindWorkoutController,
  makeListWorkoutExercisesController,
  makeListWorkoutsController,
  makeUpdateWorkoutExerciseController,
} from "main/factories/workout.factory";

export default (router: Router) => {
  router.get("/workouts", adaptRoute(makeListWorkoutsController()));
  router.get("/workouts/:id", adaptRoute(makeFindWorkoutController()));
  router.get("/workouts/:id/exercises", adaptRoute(makeListWorkoutExercisesController()));
  router.post("/workouts", adaptRoute(makeCreateWorkoutController()));
  router.post("/workouts/:id", adaptRoute(makeAddWorkoutExerciseController()));
  router.delete("/workouts/:id", adaptRoute(makeDeleteWorkoutController()));
  router.patch(
    "/workouts/:id/exercises/:exercise_id",
    adaptRoute(makeUpdateWorkoutExerciseController())
  );
};
