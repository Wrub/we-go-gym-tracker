import { IsDecimal, IsInt, IsUUID, IsOptional } from "class-validator";

export class UpdateExerciseDetailDto {
  @IsOptional()
  @IsUUID()
  exercise_id?: string;

  @IsOptional()
  @IsInt()
  sets?: number;

  @IsOptional()
  @IsInt()
  reps?: number;

  @IsOptional()
  @IsDecimal()
  weight?: number;

  @IsOptional()
  @IsInt()
  rest_time?: number;
}
