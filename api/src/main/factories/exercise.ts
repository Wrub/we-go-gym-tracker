import { CreateExerciseController } from "@adapters/controllers/create-exercise.controller";
import { ListExercisesController } from "@adapters/controllers/list-exercises.controller";
import { ormExerciseRepository } from "@repositories/exercise.repository";
import { CreateExerciseUseCase } from "@usecases/create-exercise/create-exercise.use-case";
import { ListExercisesUseCase } from "@usecases/list-exercises/list-exercises.use-case";

export const makeListExercisesController = (): ListExercisesController => {
  const exerciseRepository = ormExerciseRepository;
  const listExercisesUseCase = new ListExercisesUseCase(exerciseRepository);
  const listExercisesController = new ListExercisesController(listExercisesUseCase);
  return listExercisesController;
};

export const makeCreateExerciseController = (): CreateExerciseController => {
  const exerciseRepository = ormExerciseRepository;
  const createExerciseUseCase = new CreateExerciseUseCase(exerciseRepository);
  const createExerciseController = new CreateExerciseController(createExerciseUseCase);

  return createExerciseController;
};
