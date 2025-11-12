import { Workout } from "@entities/Workout";
import { Repository } from "typeorm";
import { UpdateExerciseDetailDto } from "./update-workout-exercise.dto";
import { NotFoundError } from "@adapters/controllers/errors/not-found-error";

export class UpdateWorkoutExerciseUseCase {
  private readonly workoutRepository: Repository<Workout>;

  constructor(workoutRepository: Repository<Workout>) {
    this.workoutRepository = workoutRepository;
  }

  async update(
    workout_id: string,
    workout_exercise_id: string,
    exerciseData: UpdateExerciseDetailDto
  ) {
    const workout = await this.workoutRepository.findOne({
      where: { id: workout_id },
      relations: ["exercises"],
    });

    if (!workout) {
      throw new NotFoundError("Workout", `id:'${workout_id}'`);
    }

    const workoutExerciseToEdit = workout.exercises.find((ex) => ex.id === workout_exercise_id);

    if (!workoutExerciseToEdit) {
      throw new NotFoundError("Workout Exercise", `id:'${workout_exercise_id}'`);
    }

    Object.assign(workoutExerciseToEdit, exerciseData);

    await this.workoutRepository.save(workout);

    return workoutExerciseToEdit;
  }
}
