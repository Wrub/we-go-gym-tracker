import { FindWorkoutUseCase } from "@usecases/find-workout/find-workout.use-case";
import { HttpRequest, HttpResponse } from "./ports/http";
import { badRequest, notFoundError, ok, serverError } from "./helpers/http-helpers";
import { MissingParamError } from "./errors";

export class FindWorkoutController {
  private readonly findWorkoutUseCase: FindWorkoutUseCase;

  constructor(findWorkoutUseCase: FindWorkoutUseCase) {
    this.findWorkoutUseCase = findWorkoutUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.params.id) {
        return badRequest(new MissingParamError("id"));
      }

      const { id } = httpRequest.params.id;

      const workout = await this.findWorkoutUseCase.find(id);

      if (!workout) {
        return notFoundError(`Workout with id: '${id}' was not found.`);
      }

      return ok(workout);
    } catch (error) {
      return serverError(error);
    }
  }
}
