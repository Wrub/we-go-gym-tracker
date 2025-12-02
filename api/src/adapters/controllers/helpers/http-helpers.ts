import { ServerError } from "../errors";
import { HttpResponse } from "../ports/http";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error.message,
});

export const conflict = (error: Error): HttpResponse => ({
  statusCode: 409,
  body: error.message,
});

export const ok = (data: any): HttpResponse => {
  const cookieData = data.cookie;

  if (cookieData) {
    delete data.cookie;
  }

  return {
    statusCode: 200,
    body: data,
    cookie: cookieData,
  };
};

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const okWithoutContent = () => ({
  statusCode: 204,
  body: {},
});

export const serverError = (reason: string): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(reason),
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: "Unauthorized",
});

export const forbidden = (): HttpResponse => ({
  statusCode: 403,
  body: "Forbidden",
});

export const notFoundError = (message: string): HttpResponse => ({
  statusCode: 404,
  body: message,
});
