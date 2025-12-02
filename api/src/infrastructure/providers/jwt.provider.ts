import { ITokenPayload, ITokenProvider } from "app/providers/Token";
import { sign, verify } from "jsonwebtoken";

export class JwtProvider implements ITokenProvider {
  private readonly secret: string = process.env.JWT_SECRET;

  constructor() {}

  public generate(payload: ITokenPayload): string {
    return sign(payload, this.secret, { expiresIn: "1d" });
  }

  public verify(token: string): ITokenPayload | null {
    try {
      const payload = verify(token, this.secret) as ITokenPayload;
      return payload;
    } catch (error) {
      return null;
    }
  }
}
