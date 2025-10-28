import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { WorkoutExercise } from "./WorkoutExercise";

export enum ExerciseCategory {
  CARDIO = "cardiovascular",
  STRENGTH = "strength",
  FLEX = "flexibility",
}

@Entity("exercises")
export class Exercise {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
  })
  description: string;

  @Column({ type: "enum", enum: ExerciseCategory, default: ExerciseCategory.STRENGTH })
  category: ExerciseCategory;

  @OneToMany(() => WorkoutExercise, (we) => we.exercise)
  workout_details: WorkoutExercise[];
}
