import {UserRoleType} from "../common/commonType";

export interface ILoginDataType {
  userName: string;
  password: string;
}

<<<<<<< HEAD
export interface ILoginResponse {
  status: number;
  code: string;
  message: string;
}

=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
export interface ICheckLoggedInType {
  userId: number;
  role: UserRoleType;
  username: string;
}
<<<<<<< HEAD

export interface IFailedCheckLoggedInType {
  code: string;
  message: string;
}
=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
