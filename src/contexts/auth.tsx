import { createContext, useState, useContext, ReactElement, ReactChild } from 'react';
import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import API from '@/app/utils/api';
import { User } from '@/app/@types';

interface Authentication {
	user: User | null;
	login({ email, password, token }: { email?: string, password?: string, token?: string }, redirect?: string): void;
	logout(redirect?: string): void;
}

interface Props {
	user: User | null;
	children: ReactChild | ReactChild[];
}

const api = new API();
const defaultAuthenticationContext: Authentication = {} as any
const AuthenticationContext = createContext<Authentication>(defaultAuthenticationContext);

export function AuthenticationProvider(props: Props): ReactElement {
	const router = useRouter();
	const [ user, setUser ] = useState<User | null>(props.user);

	const login = async ( { email, password, token }: { email?: string, password?: string, token?: string }, redirect?: string): Promise<void> => {
		if (email && password) {
			const { data: { token: _token, user } } = await api.loginUser(email, password);
			if (!_token)
				return;

			setUser({...user, _token});
			setCookie(null, 'token', _token, { sameSite: 'strict', maxAge: 3600*24*365, path: '/' });
		} else if (token) {
			const { data: user } = await api.getUserData(token as string);
			setUser({...user, token});
		}
		
		if (redirect)
			router.push(redirect);	
	}

	const logout = (redirect?: string): void => {
		destroyCookie(null, 'token');
		setUser(null);
		
		if (redirect)
			router.push(redirect);
	}

	const { Provider } = AuthenticationContext;
	return (
		<Provider value={{ user, login, logout }}>
			{props.children}
		</Provider>
	)
}

export const useAuthentication = (): Authentication => useContext(AuthenticationContext);
