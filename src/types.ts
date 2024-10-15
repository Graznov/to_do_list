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

export type FetchStatus =  'idle' | 'failed' | 'succeeded' ;