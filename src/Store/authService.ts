import {AuthDataResponse, RegistrationRequest} from "../types.ts";
import axios, {AxiosResponse} from "axios";

export class AuthService {

    public async registration(data: RegistrationRequest): Promise<AxiosResponse<AuthDataResponse>> {
        return await apiClient.post('/registration', data);
    }

    public async login(data: LoginRequestData) {
        return await apiClient.post('/registration', data);
    }

    public async checkAuth(): Promise<AxiosResponse<AuthDataResponse>> {
        return await axios.post(
            `${import.meta.env.VITE_API_URL}/refresh`,
            {},
            {
                withCredentials: true,
            },
        );
    }

    public async logout() {
        return await apiClient.post('/logout');
    }

}

export const authService = new AuthService();
//
// class AuthService {
//     public async signup(data: RegistrationRequestData): Promise<AxiosResponse<AuthDataResponse>> {
//         return await apiClient.post('/registration', data);
//     }
//
//     public async signin(data: LoginRequestData): Promise<AxiosResponse<AuthDataResponse>> {
//         return await apiClient.post('/login', data);
//     }
//
//     public async checkAuth(): Promise<AxiosResponse<AuthDataResponse>> {
//         return await axios.post(
//             `${import.meta.env.VITE_API_URL}/refresh`,
//             {},
//             {
//                 withCredentials: true,
//             },
//         );
//     }
//
//     public async logout() {
//         return await apiClient.post('/logout');
//     }
// }
//
// export const authService = new AuthService();
