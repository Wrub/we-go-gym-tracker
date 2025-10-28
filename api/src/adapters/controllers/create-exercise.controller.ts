import { CreateExerciseUseCase } from "@usecases/create-exercise/create-exercise.use-case";
import { HttpRequest, HttpResponse } from "./ports/http";
import { CreateExerciseDTO } from "@usecases/create-exercise/create-exercise.dto";
import { badRequest, conflict, created, serverError } from "./helpers/http-helpers";
import { MissingParamError } from "./errors";
import { AlreadyExistsError } from "./errors/already-exists-error";

export class CreateExerciseController {
  private readonly createExerciseUseCase: CreateExerciseUseCase;

  constructor(createExerciseUseCase: CreateExerciseUseCase) {
    this.createExerciseUseCase = createExerciseUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest;
      const requiredFields = ["name", "description", "category"];

      for (const field of requiredFields) {
        if (!body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const exerciseDto: CreateExerciseDTO = {
        name: body.name,
        description: body.description,
        category: body.category,
      };

      const exercise = await this.createExerciseUseCase.create(exerciseDto);

      return created(exercise);
    } catch (error) {
      if (error instanceof AlreadyExistsError) {
        return conflict(error);
      }
      return serverError(error);
    }
  }
}
