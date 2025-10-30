import { Workout } from "@entities/Workout";
import { Repository } from "typeorm";

export class ListWorkoutsUseCase {
  private readonly workoutRepository: Repository<Workout>;

  constructor(workoutRepository: Repository<Workout>) {
    this.workoutRepository = workoutRepository;
  }

  async list() {
    return await this.workoutRepository.find();
  }
}
