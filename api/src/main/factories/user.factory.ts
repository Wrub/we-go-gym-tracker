import { CreateUserController } from "@adapters/controllers/create-user.controller";
import { FindUserController } from "@adapters/controllers/find-user.controller";
import { ormUserRepository } from "@repositories/user.repository";
import { CreateUserUseCase } from "@usecases/create-user/create-user.use-case";
import { FindUserUseCase } from "@usecases/find-user/find-user.use-case";

export const makeFindUserController = (): FindUserController => {
  const userRepository = ormUserRepository;
  const findUserUseCase = new FindUserUseCase(userRepository);
  const findUserController = new FindUserController(findUserUseCase);
  return findUserController;
};

export const makeCreateUserController = (): CreateUserController => {
  const userRepository = ormUserRepository;
  const createUserUseCase = new CreateUserUseCase(userRepository);
  const createUserController = new CreateUserController(createUserUseCase);
  return createUserController;
};
