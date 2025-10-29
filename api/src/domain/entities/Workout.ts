import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { WorkoutExercise } from "./WorkoutExercise";

@Entity("workouts")
export class Workout {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "uuid" })
  user_id: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  name: string;

  @ManyToOne(() => User, (user) => user.workouts)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => WorkoutExercise, (we) => we.workout, {
    cascade: true,
  })
  exercises: WorkoutExercise[];
}
