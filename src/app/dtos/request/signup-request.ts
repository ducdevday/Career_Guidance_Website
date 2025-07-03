import { GenderType } from "../../shared/enums/gender-type";

export interface SignUpRequest{
 firstName: string,
 middleName?: string,
 lastName: string,
 gender: GenderType,
 dateOfBirth: Date,
 email: string,
 phoneNumber: string,
 password: string,
 confirmPassword: string
}