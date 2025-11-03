import { CreateWorkoutUseCase } from "@usecases/create-workout/create-workout.use-case";
import { HttpRequest, HttpResponse } from "./ports/http";
import { badRequest, conflict, created, serverError } from "./helpers/http-helpers";
import { MissingParamError } from "./errors";
import { CreateWorkoutDTO } from "@usecases/create-workout/dto/create-workout.dto";
import { AlreadyExistsError } from "./errors/already-exists-error";
import { ExerciseDetailDto } from "@usecases/create-workout/dto/exercise-detail.dto";

export class CreateWorkoutController {
  private readonly createWorkoutUseCase: CreateWorkoutUseCase;

  constructor(createWorkoutUseCase: CreateWorkoutUseCase) {
    this.createWorkoutUseCase = createWorkoutUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest;
      const requiredFields = ["name", "user_id", "exercises"];

      for (const field of requiredFields) {
        if (!body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const exerciseDetails: ExerciseDetailDto[] = body.exercises.map((ex: any) => ({
        exercise_id: ex.exercise_id,
        sets: ex.sets,
        reps: ex.reps,
        weight: ex.weight,
        rest_time: ex.rest_time,
      }));

      const workoutDto: CreateWorkoutDTO = {
        name: body.name,
        user_id: body.user_id,
        exercises: exerciseDetails,
      };

      const workout = await this.createWorkoutUseCase.create(workoutDto);

      return created(workout);
    } catch (error) {
      if (error instanceof AlreadyExistsError) {
        return conflict(error);
      }
      return serverError(error);
    }
  }
}
