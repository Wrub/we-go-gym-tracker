import { Workout } from "@entities/Workout";
import { AppDataSource } from "infrastructure/db/data-source";

export const ormWorkoutRepository = AppDataSource.getRepository(Workout);
