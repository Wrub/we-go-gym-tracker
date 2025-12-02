import { AuthenticateUserController } from "@adapters/controllers/authenticate-user.controller";
import { ormUserRepository } from "@repositories/user.repository";
import { AuthenticateUserUseCase } from "@usecases/authenticate-user/authenticate-user.use-case";
import { JwtProvider } from "infrastructure/providers/jwt.provider";

export const makeAuthenticateUserController = (): AuthenticateUserController => {
  const userRepository = ormUserRepository;
  const tokenProvider = new JwtProvider();
  const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository, tokenProvider);
  const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);
  return authenticateUserController;
};
