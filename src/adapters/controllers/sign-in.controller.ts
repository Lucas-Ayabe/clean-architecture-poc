import { Request, Response } from "express";
import {
  SignInUseCase,
  InvalidCredentialsError,
} from "../../use-cases/sign-in";
import { SignInPresenter } from "../presenters/sign-in";

export class SignInController {
  constructor(
    private signInUseCase: SignInUseCase,
    private presenter: SignInPresenter
  ) {
    this.handle = this.handle.bind(this);
  }

  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await this.signInUseCase.execute({ email, password });

      res.status(200).json(this.presenter.present(token));
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        res.status(400).json(this.presenter.present(error as Error));
      }
    }
  }
}
