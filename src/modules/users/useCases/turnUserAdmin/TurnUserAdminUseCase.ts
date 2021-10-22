import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userMakingRequest = this.usersRepository.findById(user_id);

    if (!userMakingRequest) {
      throw new Error("User making request not found!");
    }

    const userTurnedAdmin = this.usersRepository.turnAdmin(userMakingRequest);

    return userTurnedAdmin;
  }
}

export { TurnUserAdminUseCase };
