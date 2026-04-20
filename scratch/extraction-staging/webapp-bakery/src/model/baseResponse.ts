export interface BaseError {
  code: string;
  message: string;
}
export interface BaseResponse {
  success: boolean;
  error?: BaseError;
}

export interface BaseResponseGeneric<T> extends BaseResponse {
  results: T;
}
