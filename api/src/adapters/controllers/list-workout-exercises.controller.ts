import { ListWorkoutExercisesUseCase } from "@usecases/list-workout-exercises/list-workout-exercises.use-case";
import { HttpRequest, HttpResponse } from "./ports/http";
import { badRequest, notFoundError, ok, serverError } from "./helpers/http-helpers";
import { MissingParamError } from "./errors";

export class ListWorkoutExercisesController {
  private readonly listWorkoutExercisesUseCase: ListWorkoutExercisesUseCase;

  constructor(listWorkoutExercisesUseCase: ListWorkoutExercisesUseCase) {
    this.listWorkoutExercisesUseCase = listWorkoutExercisesUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.params.id) {
        return badRequest(new MissingParamError("id"));
      }

      const { id } = httpRequest.params;

      const result = await this.listWorkoutExercisesUseCase.list(id);

      if (!result) {
        return notFoundError(`Workout with id: '${id}' was not found.`);
      }

      return ok(result);
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
