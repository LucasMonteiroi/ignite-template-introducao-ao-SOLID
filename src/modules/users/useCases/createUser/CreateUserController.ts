import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { email, name } = request.body;

      this.createUserUseCase.execute({ email, name });
      return response.send().status(201);
    } catch (error) {
      return response.status(error.status).json(error);
    }
  }
}

export { CreateUserController };
