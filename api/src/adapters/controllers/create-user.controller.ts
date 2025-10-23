import type { Request, Response } from "express";
import { badRequest, ok, serverError } from "./helpers/http-helpers";
import { MissingParamError } from "./errors";
import { HttpRequest, HttpResponse } from "./ports/http";
import { CreateUserUseCase } from "@usecases/create-user/create-user.use-case";

export class CreateUserController {
  private readonly createUser: CreateUserUseCase;

  constructor(createUser: CreateUserUseCase) {
    this.createUser = createUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.body.name || !httpRequest.body.password) {
        const field = !httpRequest.body.name ? "name" : "password";
        return badRequest(new MissingParamError(field));
      }

      const userData = { name: httpRequest.body.name, password: httpRequest.body.password };

      const createUserResponse = await this.createUser.create(userData);

      return ok(createUserResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
