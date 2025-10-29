import { IsDecimal, IsInt, IsUUID } from "class-validator";

export class ExerciseDetailDto {
  @IsUUID()
  exercise_id: string;

  @IsInt()
  sets: number;

  @IsInt()
  reps: number;

  @IsDecimal()
  weight: number;

  @IsInt()
  rest_time: number;
}
