export class NotFoundError extends Error implements ControllerError {
  constructor(entity: string, paramMessage?: string) {
    super(
      paramMessage ? `${entity} with ${paramMessage} was not found.` : `${entity} was not found.`
    );
  }
}
