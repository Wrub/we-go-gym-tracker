import { Workout } from "@entities/Workout";
import { Repository } from "typeorm";

export class DeleteWorkoutUseCase {
  private readonly workoutRepository: Repository<Workout>;

  constructor(workoutRepository: Repository<Workout>) {
    this.workoutRepository = workoutRepository;
  }

  async delete(id: string) {
    return await this.workoutRepository.delete({ id });
  }
}
