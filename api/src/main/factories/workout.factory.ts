import { CreateWorkoutController } from "@adapters/controllers/create-workout.controller";
import { ormWorkoutRepository } from "@repositories/workout.repository";
import { CreateWorkoutUseCase } from "@usecases/create-workout/create-workout.use-case";

export const makeCreateWorkoutController = (): CreateWorkoutController => {
  const workoutRepository = ormWorkoutRepository;
  const createWorkoutUseCase = new CreateWorkoutUseCase(workoutRepository);
  const createWorkoutController = new CreateWorkoutController(createWorkoutUseCase);
  return createWorkoutController;
};
