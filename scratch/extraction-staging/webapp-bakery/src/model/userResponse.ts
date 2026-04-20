import { BaseResponseGeneric } from "./baseResponse";

export interface UsersResponse extends BaseResponseGeneric<User[]> {}

export interface UserResponse extends BaseResponseGeneric<User> {}

// get
export interface User {
  userId: number;
  name: string;
  phoneNo: string;
  role: string;
  birthDate: string;
  totalPoint: number;
  referralCode: string | null;
  referralId: string | null;
  avatar: string | null;
  tier: string;
  voucherIds: VoucherIds[] | null;
  language: string;
  isActive: boolean;
  createdDate: Date;
}

export interface VoucherIds {
  voucherId: number;
  expireDate: string;
}

// post: create and update
export interface UserRequest {
  name: string;
  phoneNo: string;
  birthDate: string;
  referralId: string;
}

export interface UpdateUserRequest {
  name: string;
  birthDate: string;
  avatar?: File;
}
