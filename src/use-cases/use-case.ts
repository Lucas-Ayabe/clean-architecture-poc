export interface UseCase<RequestModel = any, ResponseModel = any> {
  execute(command: RequestModel): Promise<ResponseModel>;
}
