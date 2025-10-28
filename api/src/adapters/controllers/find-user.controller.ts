import { FindUserUseCase } from "@usecases/find-user/find-user.use-case";
import { HttpRequest } from "./ports/http";
import { badRequest, notFoundError, ok, serverError } from "./helpers/http-helpers";
import { MissingParamError } from "./errors";

export class FindUserController {
  private readonly findUserUseCase: FindUserUseCase;

  constructor(findUserUseCase: FindUserUseCase) {
    this.findUserUseCase = findUserUseCase;
  }

  async handle(httpRequest: HttpRequest) {
    try {
      if (!httpRequest.params.id) {
        return badRequest(new MissingParamError("id"));
      }

      const id = httpRequest.params.id;

      const findUserResponse = await this.findUserUseCase.find(id);

      if (!findUserResponse) {
        return notFoundError(`User with id: '${id}' was not found.`);
      }

      return ok(findUserResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
