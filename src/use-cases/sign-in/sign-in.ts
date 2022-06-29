import { UseCase } from "../use-case";

export interface SignInRequestModel {
  email: string;
  password: string;
}

export type SignInResponseModel = string;

export interface SignInUseCase
  extends UseCase<SignInRequestModel, SignInResponseModel> {}
