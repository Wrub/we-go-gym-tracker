export class AlreadyExistsError extends Error {
  constructor(entityName: string) {
    super(`${entityName} already exists`);
    this.name = `${entityName}AlreadyExistsError`;
  }
}
