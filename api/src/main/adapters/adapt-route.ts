import { HttpRequest, HttpResponse } from "@adapters/controllers/ports/http";
import { Request, Response } from "express";

interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      params: req.params,
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
