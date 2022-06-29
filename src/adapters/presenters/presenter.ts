export interface Presenter<ResponseModel, ViewModel> {
  present(responseModel: ResponseModel | Error): ViewModel;
}
