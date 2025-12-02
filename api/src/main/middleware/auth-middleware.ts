import type { HttpRequest, HttpResponse } from "@adapters/controllers/ports/http";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export async function authMiddleware(req: HttpRequest): Promise<HttpResponse> {
  try {
    if (!req.cookies || !req.cookies["auth_token"]) {
      return {
        statusCode: 401,
        body: "No token provided",
      };
    }

    const token = req.cookies["auth_token"];

    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret) as TokenPayload;

    return {
      statusCode: 200,
      body: { userId: decoded.id },
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: "Invalid or expired token",
    };
  }
}
