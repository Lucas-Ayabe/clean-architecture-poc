import express from "express";

import { SignIn } from "./use-cases/sign-in";
import { SignInController } from "./adapters/controllers";
import { JsonSignInPresenter } from "./adapters/presenters/sign-in";
import { FakeEncryptionService, FakeUserRepository } from "./infrastructure";

const app = express();
const port = 3000;

const authController = new SignInController(
  new SignIn({
    userRepository: new FakeUserRepository(),
    encryptionService: new FakeEncryptionService(),
  }),
  new JsonSignInPresenter()
);

app.get("/auth", authController.handle);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
