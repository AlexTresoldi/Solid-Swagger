import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userMakingRequest = this.usersRepository.findById(user_id);

    if (!userMakingRequest) {
      throw new Error("User making request not found!");
    }

    if (!userMakingRequest.admin) {
      throw new Error("Just User admin can do this action!");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
