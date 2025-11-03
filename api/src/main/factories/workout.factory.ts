import { CreateWorkoutController } from "@adapters/controllers/create-workout.controller";
import { DeleteWorkoutController } from "@adapters/controllers/delete-workout.controller";
import { FindWorkoutController } from "@adapters/controllers/find-workout.controller";
import { ListWorkoutsController } from "@adapters/controllers/list-workouts.controller";
import { ormWorkoutRepository } from "@repositories/workout.repository";
import { CreateWorkoutUseCase } from "@usecases/create-workout/create-workout.use-case";
import { DeleteWorkoutUseCase } from "@usecases/delete-workout/delete-workout.use-case";
import { FindWorkoutUseCase } from "@usecases/find-workout/find-workout.use-case";
import { ListWorkoutsUseCase } from "@usecases/list-workouts/list-workouts.use-case";

export const makeListWorkoutsController = (): ListWorkoutsController => {
  const workoutRepository = ormWorkoutRepository;
  const listWorkoutsUseCase = new ListWorkoutsUseCase(workoutRepository);
  const listWorkoutsController = new ListWorkoutsController(listWorkoutsUseCase);
  return listWorkoutsController;
};

export const makeFindWorkoutController = (): FindWorkoutController => {
  const workoutRepository = ormWorkoutRepository;
  const findWorkoutUseCase = new FindWorkoutUseCase(workoutRepository);
  const findWorkoutController = new FindWorkoutController(findWorkoutUseCase);
  return findWorkoutController;
};

export const makeCreateWorkoutController = (): CreateWorkoutController => {
  const workoutRepository = ormWorkoutRepository;
  const createWorkoutUseCase = new CreateWorkoutUseCase(workoutRepository);
  const createWorkoutController = new CreateWorkoutController(createWorkoutUseCase);
  return createWorkoutController;
};

export const makeDeleteWorkoutController = (): DeleteWorkoutController => {
  const workoutRepository = ormWorkoutRepository;
  const deleteWorkoutUseCase = new DeleteWorkoutUseCase(workoutRepository);
  const deleteWorkoutController = new DeleteWorkoutController(deleteWorkoutUseCase);
  return deleteWorkoutController;
};
