import { CreateUserController } from "@adapters/controllers/create-user.controller";
import { GetUserController } from "@adapters/controllers/get-user.controller";
import { ormUserRepository } from "@repositories/user.repository";
import { CreateUserUseCase } from "@usecases/create-user/create-user.use-case";
import { GetUserUseCase } from "@usecases/get-user/get-user.use-case";

export const makeGetUserControler = (): GetUserController => {
  const userRepository = ormUserRepository;
  const getUserUseCase = new GetUserUseCase(userRepository);
  const getUserController = new GetUserController(getUserUseCase);
  return getUserController;
};

export const makeCreateUserController = (): CreateUserController => {
  const userRepository = ormUserRepository;
  const createUserUseCase = new CreateUserUseCase(userRepository);
  const createUserController = new CreateUserController(createUserUseCase);
  return createUserController;
};
