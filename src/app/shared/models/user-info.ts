import { RoleType } from "../enums/role-type";

export interface UserInfo{
 userId: string,
 fullName: string, 
 role: RoleType
}