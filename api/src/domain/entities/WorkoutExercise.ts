import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Workout } from "./Workout";
import { Exercise } from "./Exercise";

@Entity("workout_exercises")
export class WorkoutExercise {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // Workout relations
  @Column({ type: "uuid" })
  workout_id: string;

  @ManyToOne(() => Workout, (workout) => workout.exercises, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "workout_id" })
  workout: Workout;

  // Exercise Relations
  @Column({ type: "uuid" })
  exercise_id: string;

  @ManyToOne(() => Exercise, (exercise) => exercise.workout_details)
  @JoinColumn({ name: "exercise_id" })
  exercise: Exercise;

  // Extra details
  @Column("int")
  sets: number;

  @Column("int")
  reps: number;

  @Column({ type: "decimal", precision: 5, scale: 2, nullable: true })
  weight: number;

  @Column({ type: "int", nullable: true })
  rest_time: number;
}
