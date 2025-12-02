import { AuthenticateUserUseCase } from "@usecases/authenticate-user/authenticate-user.use-case";
import { HttpRequest, HttpResponse } from "./ports/http";
import { MissingParamError, NotFoundError } from "./errors";
import { badRequest, notFoundError, ok, serverError, unauthorized } from "./helpers/http-helpers";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

export class AuthenticateUserController {
  constructor(private readonly authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, password } = req.body;

      if (!name || !password) {
        return badRequest(new MissingParamError(name ? "password" : "name"));
      }

      const authenticatedUser = await this.authenticateUserUseCase.authenticate({ name, password });

      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000,
      };

      return ok({
        message: `User ${authenticatedUser.user.name} authenticated`,
        user: authenticatedUser.user,
        cookie: {
          name: "auth_token",
          value: authenticatedUser.token,
          options: cookieOptions,
        },
      });
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        return unauthorized();
      }
      if (error instanceof NotFoundError) {
        return notFoundError(error.message);
      }

      return serverError(error);
    }
  }
}
