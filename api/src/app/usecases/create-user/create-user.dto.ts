import { IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsString()
  @MinLength(2)
  name: string;

  @IsStrongPassword()
  password: string;
}
