import { Exercise } from "@entities/Exercise";
import { Repository } from "typeorm";

export class FindExerciseUseCase {
  private readonly exerciseRepository: Repository<Exercise>;

  constructor(exerciseRepository: Repository<Exercise>) {
    this.exerciseRepository = exerciseRepository;
  }

  async find(id: string) {
    return await this.exerciseRepository.findOneBy({ id });
  }
}
