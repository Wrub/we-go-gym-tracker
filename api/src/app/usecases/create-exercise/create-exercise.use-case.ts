import { Exercise } from "@entities/Exercise";
import { Repository } from "typeorm";
import { CreateExerciseDTO } from "./create-exercise.dto";
import { AlreadyExistsError } from "@adapters/controllers/errors/already-exists-error";

export class CreateExerciseUseCase {
  private readonly exerciseRepository: Repository<Exercise>;

  constructor(exerciseRepository: Repository<Exercise>) {
    this.exerciseRepository = exerciseRepository;
  }

  async create(exerciseData: CreateExerciseDTO) {
    const { name } = exerciseData;

    const exerciseExists = await this.exerciseRepository.findOne({ where: { name } });

    if (exerciseExists) {
      throw new AlreadyExistsError("Exercise");
    }

    const newExercise = this.exerciseRepository.create(exerciseData);

    await this.exerciseRepository.save(newExercise);

    return newExercise;
  }
}
