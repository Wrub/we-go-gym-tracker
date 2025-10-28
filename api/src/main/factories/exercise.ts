import { CreateExerciseController } from "@adapters/controllers/create-exercise.controller";
import { ormExerciseRepository } from "@repositories/exercise.repository";
import { CreateExerciseUseCase } from "@usecases/create-exercise/create-exercise.use-case";

export const makeCreateExerciseController = (): CreateExerciseController => {
  const exerciseRepository = ormExerciseRepository;
  const createExerciseUseCase = new CreateExerciseUseCase(exerciseRepository);
  const createExerciseController = new CreateExerciseController(createExerciseUseCase);

  return createExerciseController;
};
