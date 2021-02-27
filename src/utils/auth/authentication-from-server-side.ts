import type { GetServerSidePropsResult, NextPageContext } from 'next';
import nookies from 'nookies';
import type { User } from '@/@types/index';
import API from '@/utils/api';

export type AuthenticationFromServerSideProps = Record<string, never> | { user: User };
export type AuthenticationFromServerSide<P> = Promise<GetServerSidePropsResult<P>>;
export interface AuthenticationFromServerSideOptions {
	shouldBeAuthenticated: boolean;
}

export default function authenticationFromServerSide(
	options: AuthenticationFromServerSideOptions,
): ((ctx: NextPageContext) => AuthenticationFromServerSide<AuthenticationFromServerSideProps>) {
	const { shouldBeAuthenticated } = options;

	return async (ctx: NextPageContext): AuthenticationFromServerSide<AuthenticationFromServerSideProps> => {
		const { token } = nookies.get(ctx);

		if (!shouldBeAuthenticated && token)
			return { redirect: { destination: '/dashboard', permanent: false } };
		else if (shouldBeAuthenticated && !token)
			return { redirect: { destination: '/auth/sign-in', permanent: false } };
		else if (!shouldBeAuthenticated && !token)
			return { props: {} };

		// Else, we have a token, and we need to be authenticated
		try {
			const { data: user } = await new API().getUserData(token);

			return { props: { user: { ...user, token } } };
		} catch (e: unknown) {
			console.error('An error has occured while login user', e);
			nookies.destroy(ctx, 'token');

			return { redirect: { destination: '/auth/sign-in', permanent: false } };
		}
	};
}
