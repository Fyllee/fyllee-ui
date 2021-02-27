import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import type { ReactChild, ReactElement } from 'react';
import { createContext, useContext, useState } from 'react';
import type { User } from '@/@types/index';
import API from '@/utils/api';

interface Authentication {
	user: User | null;
	error: number | null;
	logout(redirect?: string): void;
}

interface Props {
	user: User | null;
	children: ReactChild | ReactChild[];
}

interface Credentials {
	email?: string;
	password?: string;
	token?: string;
}

const api = new API();
const defaultAuthenticationContext: Authentication = {} as never;
const AuthenticationContext = createContext<Authentication>(defaultAuthenticationContext);

export function AuthenticationProvider(props: Props): ReactElement {
	const router = useRouter();
	const [user, setUser] = useState<User | null>(props.user);
	const [error, setError] = useState<number | null>(null);

	const login = async ({ email, password, token }: Credentials, redirect?: string): Promise<void> => {
		if (email && password) {
			const { data: { token: _token, user } } = await api.loginUser(email, password);
			if (!_token)
				return;

			setUser({ ...user, _token });
			setCookie(null, 'token', _token, { sameSite: 'strict', maxAge: 3600 * 24 * 365, path: '/' });
		} else if (token) {
			const { data: user } = await api.getUserData(token);
			setUser({ ...user, token });
		}

		if (redirect)
			void router.push(redirect);
			const error = unknownError as AxiosError;

			setError(error.response!.status);
	};

	const logout = (redirect?: string): void => {
		destroyCookie(null, 'token');
		setUser(null);

		if (redirect)
			void router.push(redirect);
	};

	const { Provider } = AuthenticationContext;
	return (
			user, error, login, logout,
			{props.children}
		</Provider>
	);
}

export const useAuthentication = (): Authentication => useContext(AuthenticationContext);
