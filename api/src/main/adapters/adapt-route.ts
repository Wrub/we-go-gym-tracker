import { HttpRequest, HttpResponse } from "@adapters/controllers/ports/http";
import { Request, Response } from "express";

interface Controller {
  handle(httpRequest: HttpRequest, httpResponse?: HttpResponse): Promise<HttpResponse>;
}

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      params: req.params,
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.cookie) {
      res.cookie(httpResponse.cookie.name, httpResponse.cookie.value, httpResponse.cookie.options);
    }

    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
