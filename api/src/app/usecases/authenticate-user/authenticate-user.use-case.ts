import { User } from "@entities/User";
import { ITokenProvider } from "app/providers/Token";
import { Repository } from "typeorm";
import { AuthenticateUserDTO } from "./authenticate-user.dto";
import { NotFoundError } from "@adapters/controllers/errors/not-found-error";
import { InvalidCredentialsError } from "@adapters/controllers/errors/invalid-credentials-error";

export class AuthenticateUserUseCase {
  private readonly userRepository: Repository<User>;
  private readonly tokenProvider: ITokenProvider;

  constructor(userRepository: Repository<User>, tokenProvider: ITokenProvider) {
    this.userRepository = userRepository;
    this.tokenProvider = tokenProvider;
  }

  async authenticate({ name, password }: AuthenticateUserDTO) {
    const user = await this.userRepository.findOne({
      where: { name },
      select: ["id", "name", "password"],
    });

    if (!user) {
      throw new NotFoundError("User", `name: ${name}`);
    }

    const isPasswordValid = await user.validatePassword(password);

    if (!isPasswordValid) {
      throw new InvalidCredentialsError();
    }

    const token = this.tokenProvider.generate({
      sub: user.id,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
      },
      token,
    };
  }
}
