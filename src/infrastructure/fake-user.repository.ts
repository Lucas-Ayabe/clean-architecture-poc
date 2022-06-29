import { User } from "../entities";
import { UserRepository } from "../use-cases/boundaries/outbound";

export class FakeUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User> {
    return User.from(email, "secret123");
  }
}
