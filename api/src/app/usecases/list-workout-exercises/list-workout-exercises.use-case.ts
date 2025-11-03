import { Workout } from "@entities/Workout";
import { Repository } from "typeorm";

export class ListWorkoutExercisesUseCase {
  private readonly workoutRepository: Repository<Workout>;

  constructor(workoutRepository: Repository<Workout>) {
    this.workoutRepository = workoutRepository;
  }

  async list(id: string) {
    const workout = await this.workoutRepository.findOne({
      where: { id },
      relations: ["exercises"],
    });
    if (workout) {
      return workout.exercises;
    }

    return null;
  }
}
