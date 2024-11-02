export interface AuthDataResponse {
    id:number,
    username:string,
    email:string,
    userPic:string,
    accessToken:string
}

export type ErrorResponse = {
    statusCode: number;
    message: string;
    timestamp: string;
    path: string;
}

export type FetchStatus =  'idle' | 'failed' | 'succeeded' | 'loading';

export interface RegistrationRequest{
    username:string,
    email: string,
    password: string,
    confirmPassword: string
}
export interface LoginRequestData {
    email: string,
    password: string
}
