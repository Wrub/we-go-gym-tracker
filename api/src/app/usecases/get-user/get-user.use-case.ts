import { User } from "@entities/User";
import { Repository } from "typeorm";

export class GetUserUseCase {
  private readonly userRepository: Repository<User>;

  constructor(userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  async find(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    return user;
  }
}
