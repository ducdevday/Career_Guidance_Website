import { RoleType } from "../../shared/enums/role-type";

export interface LoginNested {
 userId: string,
 fullName: string,
 role: RoleType,
 accessToken: string
}