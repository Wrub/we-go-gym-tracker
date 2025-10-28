import { Exercise } from "@entities/Exercise";
import { AppDataSource } from "infrastructure/db/data-source";

export const ormExerciseRepository = AppDataSource.getRepository(Exercise);
