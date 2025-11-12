import { UpdateWorkoutExerciseUseCase } from "@usecases/update-workout-exercise/update-workout-exercise.use-case";
import { HttpRequest, HttpResponse } from "./ports/http";
import { badRequest, notFoundError, ok, serverError } from "./helpers/http-helpers";
import { MissingParamError } from "./errors";

import { NotFoundError } from "@adapters/controllers/errors/not-found-error";

export class UpdateWorkoutExerciseController {
  private readonly updateWorkoutExerciseUseCase: UpdateWorkoutExerciseUseCase;

  constructor(updateWorkoutExerciseUseCase: UpdateWorkoutExerciseUseCase) {
    this.updateWorkoutExerciseUseCase = updateWorkoutExerciseUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id, exercise_id } = httpRequest.params;

      if (!id) {
        return badRequest(new MissingParamError("Workout id"));
      }
      if (!exercise_id) {
        return badRequest(new MissingParamError("Exercise id"));
      }

      const exerciseData = httpRequest.body;
      if (!exerciseData || Object.keys(exerciseData).length === 0) {
        return badRequest(new MissingParamError("Exercise fields"));
      }

      const updatedExercise = await this.updateWorkoutExerciseUseCase.update(
        id,
        exercise_id,
        exerciseData
      );

      return ok(updatedExercise);
    } catch (error) {
      console.error("Error in UpdateWorkoutExerciseController:", error);

      if (error instanceof NotFoundError) {
        return notFoundError(error.message);
      }

      return serverError(error);
    }
  }
}
