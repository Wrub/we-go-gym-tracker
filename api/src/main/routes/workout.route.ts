import { Router } from "express";
import { adaptMiddleware } from "main/adapters/adapt-middleware";
import { adaptRoute } from "main/adapters/adapt-route";
import {
  makeAddWorkoutExerciseController,
  makeCreateWorkoutController,
  makeDeleteWorkoutController,
  makeFindWorkoutController,
  makeListWorkoutExercisesController,
  makeListWorkoutsController,
  makeUpdateWorkoutExerciseController,
} from "main/factories/workout.factory";
import { authMiddleware } from "main/middleware/auth-middleware";

export default (router: Router) => {
  const protect = adaptMiddleware(authMiddleware);
  router.use(protect);

  router.get("/workouts", adaptRoute(makeListWorkoutsController()));
  router.get("/workouts/:id", adaptRoute(makeFindWorkoutController()));
  router.get("/workouts/:id/exercises", adaptRoute(makeListWorkoutExercisesController()));

  router.post("/workouts", adaptRoute(makeCreateWorkoutController()));
  router.post("/workouts/:id", adaptRoute(makeAddWorkoutExerciseController()));

  router.delete("/workouts/:id", adaptRoute(makeDeleteWorkoutController()));

  router.patch(
    "/workouts/:id/exercises/:exercise_id",
    adaptRoute(makeUpdateWorkoutExerciseController()),
  );
};
