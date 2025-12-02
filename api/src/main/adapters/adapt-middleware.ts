import { Request, Response, NextFunction } from "express";
import { HttpRequest, type HttpResponse } from "../../adapters/controllers/ports/http";

export interface Middleware {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>;
}
export type MiddlewareHandler = (httpRequest: HttpRequest) => Promise<HttpResponse>;

export const adaptMiddleware = (middleware: MiddlewareHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      headers: req.headers,
      cookies: req.cookies,
    };

    const httpResponse = await middleware(httpRequest);

    if (httpResponse.statusCode === 200) {
      if (httpResponse.body) {
        Object.assign(req, httpResponse.body);
      }
      next();
    } else {
      res.status(httpResponse.statusCode).json(httpResponse.body.error || httpResponse.body);
    }
  };
};
