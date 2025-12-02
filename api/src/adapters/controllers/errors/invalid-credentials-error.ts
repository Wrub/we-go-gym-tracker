export class InvalidCredentialsError extends Error implements ControllerError {
  constructor() {
    super("Invalid credentials");
    this.name = "InvalidCredentialError";
  }
}
