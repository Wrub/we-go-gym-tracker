import { User } from "@entities/User";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./create-user.dto";
import { AlreadyExistsError } from "@adapters/controllers/errors/already-exists-error";

export class CreateUserUseCase {
  private readonly userRepository: Repository<User>;

  constructor(userRepo: Repository<User>) {
    this.userRepository = userRepo;
  }

  async create(userData: CreateUserDTO): Promise<User> {
    const { name, password } = userData;

    const userExists = await this.userRepository.findOne({ where: { name } });

    if (userExists) {
      throw new AlreadyExistsError("User");
    }

    const newUser = this.userRepository.create({ name, password });

    await this.userRepository.save(newUser);

    return newUser;
  }
}
