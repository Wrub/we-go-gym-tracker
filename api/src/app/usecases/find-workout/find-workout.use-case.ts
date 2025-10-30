import { Workout } from "@entities/Workout";
import { Repository } from "typeorm";

export class FindWorkoutUseCase {
  private readonly workoutRepository: Repository<Workout>;

  constructor(workoutRepository: Repository<Workout>) {
    this.workoutRepository = workoutRepository;
  }

  async find(id: string) {
    return await this.workoutRepository.findOneBy({ id });
  }
}
