import { ApiError } from "../../../../errors/errors";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new ApiError(400, "User already Exists");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
