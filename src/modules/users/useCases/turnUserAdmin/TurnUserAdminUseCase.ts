import { ApiError } from "../../../../errors/errors";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const existsUser = this.usersRepository.findById(user_id);

    if (!existsUser) {
      throw new ApiError(404, "Users doesn't exists");
    }

    return this.usersRepository.turnAdmin(existsUser);
  }
}

export { TurnUserAdminUseCase };
