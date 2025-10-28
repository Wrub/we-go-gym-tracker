import { User } from "@entities/User";
import { AppDataSource } from "infrastructure/db/data-source";

export const ormUserRepository = AppDataSource.getRepository(User);
