import {AuthDataResponse, RegistrationRequest} from "../types.ts";
import axios, {AxiosResponse} from "axios";

export class AuthService {

    public async registration(data: RegistrationRequest): Promise<AxiosResponse<AuthDataResponse>> {
        return await apiClient.post('/registration', data);
    }

    public async login() {}

    public async checkAuth(): Promise<AxiosResponse<AuthDataResponse>> {
        return await axios.post(
            `${import.meta.env.VITE_API_URL}/refresh`,
            {},
            {
                withCredentials: true,
            },
        );
    }

    public async logout() {}

}

export const authService = new AuthService();

