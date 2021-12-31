import { ApiError } from "../../../../errors/errors";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const existsUser = this.usersRepository.findById(user_id);

    if (!existsUser) {
      throw new ApiError(400, "Users doesn't exists");
    }

    if (!existsUser.admin) {
      throw new ApiError(400, "User needs to be an admin to get users");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
