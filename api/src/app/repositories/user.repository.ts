import { User } from "@entities/User";
import { AppDataSource } from "infrastructure/data-source";

export const ormUserRepository = AppDataSource.getRepository(User);
