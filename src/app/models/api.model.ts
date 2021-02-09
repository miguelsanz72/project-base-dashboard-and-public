import { IUser} from "./user.model";

export type TLnag = 'ES' | 'EN';

export interface RespApi {
    ok: boolean;
    data: any;
    message: string;
    language: TLnag,
    err: IErrorApi;
}

export interface RespApiAuth {
    ok: boolean;
    user: IUser | null;
    token: string | null;
    message: string;
    language: TLnag,
    err: IErrorApi;
}

export interface IErrorApi {
    message: string,
    stack: any,
    name: string,
}