import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.json(users);
    } catch (error) {
      return response.status(error.status).json({ error });
    }
  }
}

export { ListAllUsersController };
