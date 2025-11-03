import { AddWorkoutExerciseUseCase } from "@usecases/add-workout-exercise/create-workout-exercise.use-case";
import { HttpRequest, HttpResponse } from "./ports/http";
import { badRequest, created, serverError } from "./helpers/http-helpers";
import { MissingParamError } from "./errors";

export class AddWorkoutExerciseController {
  private readonly addWorkoutExerciseUseCase: AddWorkoutExerciseUseCase;

  constructor(addWorkoutExerciseUseCase: AddWorkoutExerciseUseCase) {
    this.addWorkoutExerciseUseCase = addWorkoutExerciseUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const exerciseDetail = httpRequest.body;

      if (!id) {
        return badRequest(new MissingParamError("id"));
      }

      if (!exerciseDetail) {
        return badRequest(new MissingParamError("body"));
      }

      if (!exerciseDetail.exercise_id) {
        return badRequest(new MissingParamError("exercise_id"));
      }

      const result = await this.addWorkoutExerciseUseCase.add(id, exerciseDetail);

      if (result && "statusCode" in result) {
        return result;
      }

      return created(result);
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
