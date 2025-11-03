import { DeleteWorkoutUseCase } from "@usecases/delete-workout/delete-workout.use-case";
import { HttpRequest, HttpResponse } from "./ports/http";
import {
  badRequest,
  notFoundError,
  ok,
  okWithoutContent,
  serverError,
} from "./helpers/http-helpers";
import { MissingParamError } from "./errors";

export class DeleteWorkoutController {
  private readonly deleteWorkoutUseCase: DeleteWorkoutUseCase;

  constructor(deleteWorkoutUseCase: DeleteWorkoutUseCase) {
    this.deleteWorkoutUseCase = deleteWorkoutUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.params.id) {
        return badRequest(new MissingParamError("id"));
      }
      const { id } = httpRequest.params;

      const deleteResult = await this.deleteWorkoutUseCase.delete(id);

      if (deleteResult.affected === 0) {
        return notFoundError(`Workout with id: '${id}' was not found to be deleted.`);
      }

      return ok("Workout deleted with success.");
    } catch (error) {
      return serverError(error);
    }
  }
}
