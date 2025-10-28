import { FindExerciseUseCase } from "@usecases/find-exercise/find-exercise.use-case";
import { HttpRequest } from "./ports/http";
import { badRequest, notFoundError, ok, serverError } from "./helpers/http-helpers";
import { MissingParamError } from "./errors";

export class FindExerciseController {
  private readonly findExerciseUseCase: FindExerciseUseCase;

  constructor(findExerciseUseCase: FindExerciseUseCase) {
    this.findExerciseUseCase = findExerciseUseCase;
  }

  async handle(httpRequest: HttpRequest) {
    try {
      const { id } = httpRequest.params;

      if (!id) {
        return badRequest(new MissingParamError("id"));
      }

      const exercise = await this.findExerciseUseCase.find(id);

      if (!exercise) {
        return notFoundError(`Exercise with id: '${id}' was not found.`);
      }

      return ok(exercise);
    } catch (error) {
      return serverError(error);
    }
  }
}
