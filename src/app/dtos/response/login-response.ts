import { BaseApiResponse } from "../../shared/interfaces/base-api-response";
import { LoginNested } from "../nest/login-nested";

export interface LoginResponse extends BaseApiResponse<LoginNested | null>{}