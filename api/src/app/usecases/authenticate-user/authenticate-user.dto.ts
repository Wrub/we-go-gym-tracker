import { IsString, IsStrongPassword } from "class-validator";

export class AuthenticateUserDTO {
  @IsString()
  name: string;

  @IsStrongPassword()
  password: string;
}
