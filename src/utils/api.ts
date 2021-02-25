import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

interface Request {
	url: string;
	method: Method;
	token?: string;
	data?: object; 
}

export default class API {
	private async requestAPI({ url, method, token, data }: Request): Promise<AxiosResponse> {
		const config: AxiosRequestConfig = {
			url,
			method,
			baseURL: process.env.API_BASE_URL as string
		};
		if (token)
			config.headers = { Authorization: `Bearer ${token}` };
		if (data)
			config.data = data;
		
		return await axios(config);
	}
	
	public async getUserData(token: string): Promise<AxiosResponse> {
		return await this.requestAPI({
			method: 'GET',
			url: '/user',
			token,
		});
	}
	
	public async loginUser(email: string, password: string): Promise<AxiosResponse> {
		return await this.requestAPI({
			method: 'POST',
			url: '/auth/login',
			data: {
				email,
				password,
			}
		});
	}
}
