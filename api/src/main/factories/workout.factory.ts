import { ListWorkoutExercisesUseCase } from "@usecases/list-workout-exercises/list-workout-exercises.use-case";
import { AddWorkoutExerciseController } from "@adapters/controllers/add-workout-exercise.controller";
import { CreateWorkoutController } from "@adapters/controllers/create-workout.controller";
import { DeleteWorkoutController } from "@adapters/controllers/delete-workout.controller";
import { FindWorkoutController } from "@adapters/controllers/find-workout.controller";
import { ListWorkoutExercisesController } from "@adapters/controllers/list-workout-exercises.controller";
import { ListWorkoutsController } from "@adapters/controllers/list-workouts.controller";
import { ormExerciseRepository } from "@repositories/exercise.repository";
import { ormWorkoutRepository } from "@repositories/workout.repository";
import { AddWorkoutExerciseUseCase } from "@usecases/add-workout-exercise/create-workout-exercise.use-case";
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

export const makeListWorkoutExercisesController = (): ListWorkoutExercisesController => {
  const workoutRepository = ormWorkoutRepository;
  const listWorkoutExercisesUseCase = new ListWorkoutExercisesUseCase(workoutRepository);
  const listWorkoutExercisesController = new ListWorkoutExercisesController(
    listWorkoutExercisesUseCase
  );
  return listWorkoutExercisesController;
};

export const makeAddWorkoutExerciseControler = (): AddWorkoutExerciseController => {
  const workoutRepository = ormWorkoutRepository;
  const exerciseRepository = ormExerciseRepository;
  const addWorkoutExerciseUseCase = new AddWorkoutExerciseUseCase(
    workoutRepository,
    exerciseRepository
  );
  const addWorkoutExerciseController = new AddWorkoutExerciseController(addWorkoutExerciseUseCase);
  return addWorkoutExerciseController;
};
