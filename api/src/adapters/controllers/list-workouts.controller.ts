import { ListWorkoutsUseCase } from "@usecases/list-workouts/list-workouts.use-case";
import { HttpResponse } from "./ports/http";
import { ok, serverError } from "./helpers/http-helpers";

export class ListWorkoutsController {
  private readonly listWorkoutsUseCase: ListWorkoutsUseCase;

  constructor(listWorkoutsUseCase: ListWorkoutsUseCase) {
    this.listWorkoutsUseCase = listWorkoutsUseCase;
  }

  async handle(): Promise<HttpResponse> {
    try {
      return ok(await this.listWorkoutsUseCase.list());
    } catch (error) {
      return serverError(error);
    }
  }
}
