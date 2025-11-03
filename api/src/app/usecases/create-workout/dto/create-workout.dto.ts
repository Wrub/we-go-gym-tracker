import { IsArray, IsString, IsUUID, ValidateNested } from "class-validator";
import { ExerciseDetailDto } from "../../../dtos/exercise-detail.dto";

export class CreateWorkoutDTO {
  @IsUUID()
  user_id: string;

  @IsString()
  name: string;

  @IsArray({})
  @ValidateNested({ each: true })
  exercises: ExerciseDetailDto[];
}
