import { User } from "@entities/User";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./create-user.dto";

export class CreateUserUseCase {
  private readonly userRepository: Repository<User>;

  constructor(userRepo: Repository<User>) {
    this.userRepository = userRepo;
  }

  async create(userData: CreateUserDTO): Promise<User> {
    const { name, password } = userData;

    const userExists = await this.userRepository.findOne({ where: { name } });

    if (userExists) {
      throw new Error("This e-mail is already in use.");
    }

    const newUser = this.userRepository.create({ name, password });

    await this.userRepository.save(newUser);

    return newUser;
  }
}
