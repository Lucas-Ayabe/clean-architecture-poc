import { SignInResponseModel } from "../../../use-cases/sign-in";
import { JsonSignInViewModel, SignInPresenter } from "./sign-in.presenter";

export class JsonSignInPresenter implements SignInPresenter {
  present(responseModel: SignInResponseModel | Error): JsonSignInViewModel {
    if (typeof responseModel !== "string") {
      return {
        error: responseModel,
        content: {
          token: null,
        },
      };
    }

    return {
      error: null,
      content: {
        token: responseModel,
      },
    };
  }
}
