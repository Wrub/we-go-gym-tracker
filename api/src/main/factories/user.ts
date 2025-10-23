import { CreateUserController } from "@adapters/controllers/create-user.controller";
import { ormUserRepository } from "@repositories/user.repository";
import { CreateUserUseCase } from "@usecases/create-user/create-user.use-case";

export const makeCreateUserController = (): CreateUserController => {
  const userRepository = ormUserRepository;
  const createUserUseCase = new CreateUserUseCase(userRepository);
  const createUserController = new CreateUserController(createUserUseCase);
  return createUserController;
};
