import type { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import type { ReactChild, ReactElement } from 'react';
import {
 createContext, useContext, useEffect, useState,
} from 'react';
import type { User } from '@/@types/index';
import API from '@/utils/api';

interface Authentication {
	user: User | null;
	error: number | null;
	login(email: string, password: string, redirect?: string): Promise<void>;
	logout(redirect?: string): void;
}

interface Props {
	user: User | null;
	children: ReactChild | ReactChild[];
}

const api = new API();
const defaultAuthenticationContext: Authentication = {} as never;
const AuthenticationContext = createContext<Authentication>(defaultAuthenticationContext);

export function AuthenticationProvider(props: Props): ReactElement {
	const router = useRouter();
	const [user, setUser] = useState<User | null>(props.user);
	const [error, setError] = useState<number | null>(null);

	const login = async (email: string, password: string, redirect?: string): Promise<void> => {
		try {
			const { data: { token, user } } = await api.loginUser(email, password);
			if (!token)
				return;

			setUser({ ...user, token });
			setCookie(null, 'token', token, { sameSite: 'strict', path: '/' });

			if (redirect)
				void router.push(redirect);
		} catch (unknownError: unknown) {
			const error = unknownError as AxiosError;

			setError(error.response!.status);
		}
	};

	useEffect(() => {
		void (async function fetchData(): Promise<void> {
			const { token } = parseCookies();
			if (!token)
				return;

			const { data } = await api.getUserData(token);
			setUser({ ...data, token });
		}());
	}, [props.user]);

	const logout = (redirect?: string): void => {
		destroyCookie({}, 'token', { path: '/' });
		setUser(null);

		if (redirect)
			void router.push(redirect);
	};

	const { Provider } = AuthenticationContext;
	return (
		<Provider value={{
			user, error, login, logout,
		}}>
			{props.children}
		</Provider>
	);
}

export const useAuthentication = (): Authentication => useContext(AuthenticationContext);
