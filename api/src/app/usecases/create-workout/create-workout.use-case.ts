import { Workout } from "@entities/Workout";
import { Repository } from "typeorm";
import { CreateWorkoutDTO } from "./dto/create-workout.dto";
import { AlreadyExistsError } from "@adapters/controllers/errors/already-exists-error";

export class CreateWorkoutUseCase {
  private readonly workoutRepository: Repository<Workout>;

  constructor(workoutRepository: Repository<Workout>) {
    this.workoutRepository = workoutRepository;
  }

  async create(workoutData: CreateWorkoutDTO): Promise<Workout> {
    const { name } = workoutData;

    const workoutExists = await this.workoutRepository.exists({ where: { name } });

    if (workoutExists) {
      throw new AlreadyExistsError("Workout");
    }

    const newWorkout = this.workoutRepository.create(workoutData);

    await this.workoutRepository.save(newWorkout);

    return newWorkout;
  }
}
