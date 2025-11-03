import { notFoundError } from "@adapters/controllers/helpers/http-helpers";
import { ExerciseDetailDto } from "@dtos/exercise-detail.dto";
import { Exercise } from "@entities/Exercise";
import { Workout } from "@entities/Workout";
import { WorkoutExercise } from "@entities/WorkoutExercise";
import { Repository } from "typeorm";

export class AddWorkoutExerciseUseCase {
  private readonly workoutRepository: Repository<Workout>;
  private readonly exerciseRepository: Repository<Exercise>;

  constructor(workoutRepository: Repository<Workout>, exerciseRepository: Repository<Exercise>) {
    this.workoutRepository = workoutRepository;
    this.exerciseRepository = exerciseRepository;
  }

  async add(workout_id: string, exerciseDetail: ExerciseDetailDto) {
    const workout = await this.workoutRepository.findOne({
      where: { id: workout_id },
      relations: ["exercises"],
    });

    if (!workout) {
      return notFoundError(`Workout with id: '${workout_id}' was not found.`);
    }

    const exercise = await this.exerciseRepository.findOne({
      where: { id: exerciseDetail.exercise_id },
    });

    if (!exercise) {
      return notFoundError(`Exercise with id: '${exerciseDetail.exercise_id}' was not found.`);
    }

    const newWorkoutExercise = new WorkoutExercise();
    Object.assign(newWorkoutExercise, exerciseDetail);

    workout.exercises.push(newWorkoutExercise);

    await this.workoutRepository.save(workout);

    return newWorkoutExercise;
  }
}
