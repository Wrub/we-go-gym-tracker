import { ListExercisesUseCase } from "@usecases/list-exercises/list-exercises.use-case";
import { HttpResponse } from "./ports/http";
import { ok, serverError } from "./helpers/http-helpers";

export class ListExercisesController {
  private readonly listExercisesUseCase: ListExercisesUseCase;

  constructor(listExercisesUseCase: ListExercisesUseCase) {
    this.listExercisesUseCase = listExercisesUseCase;
  }

  async handle(): Promise<HttpResponse> {
    try {
      return ok(await this.listExercisesUseCase.list());
    } catch (error) {
      return serverError(error);
    }
  }
}
