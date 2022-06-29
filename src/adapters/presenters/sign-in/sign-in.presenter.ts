import { SignInResponseModel } from "../../../use-cases/sign-in";
import { Presenter } from "../presenter";

export interface JsonSignInViewModel {
  error: Error | null;
  content: {
    token: string | null;
  };
}

export interface SignInPresenter
  extends Presenter<SignInResponseModel, JsonSignInViewModel> {}
