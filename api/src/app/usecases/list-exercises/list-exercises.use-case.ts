import { Exercise } from "@entities/Exercise";
import { Repository } from "typeorm";

export class ListExercisesUseCase {
  private readonly exerciseRepository: Repository<Exercise>;

  constructor(exerciseRepository: Repository<Exercise>) {
    this.exerciseRepository = exerciseRepository;
  }

  async list() {
    return await this.exerciseRepository.find();
  }
}
