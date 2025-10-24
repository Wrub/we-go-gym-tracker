import { GetUserUseCase } from "@usecases/get-user/get-user.use-case";
import { HttpRequest } from "./ports/http";
import { badRequest, notFoundError, ok, serverError } from "./helpers/http-helpers";
import { MissingParamError } from "./errors";

export class GetUserController {
  private readonly getUserUseCase: GetUserUseCase;

  constructor(getUserUseCase: GetUserUseCase) {
    this.getUserUseCase = getUserUseCase;
  }

  async handle(httpRequest: HttpRequest) {
    try {
      if (!httpRequest.params.id) {
        return badRequest(new MissingParamError("id"));
      }

      const id = httpRequest.params.id;

      const getUserResponse = await this.getUserUseCase.find(id);

      if (!getUserResponse) {
        return notFoundError(`User with id: '${id}' was not found.`);
      }

      return ok(getUserResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
