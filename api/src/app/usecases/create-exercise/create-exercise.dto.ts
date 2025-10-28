import { ExerciseCategory } from "@entities/Exercise";
import { IsEnum, IsString } from "class-validator";

export class CreateExerciseDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(ExerciseCategory)
  category: ExerciseCategory;
}
