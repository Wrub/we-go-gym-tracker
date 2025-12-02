export interface ITokenPayload {
  sub: string;
}

export interface ITokenProvider {
  generate(payload: ITokenPayload): string;
  verify(token: string): ITokenPayload | null;
}
