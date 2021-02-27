import type { GetServerSidePropsResult, NextPageContext } from 'next';
import nookies from 'nookies';
import type { User } from '@/@types/index';
import API from '@/utils/api';

interface AuthenticationFromServerSideOptions {
	shouldBeAuthenticated: boolean;
}

type AuthenticationFromServerSide = Promise<GetServerSidePropsResult<Record<string, never> | { user: User }>>;

// eslint-disable-next-line max-len
const authenticationFromServerSide = (options: AuthenticationFromServerSideOptions): ((ctx: NextPageContext) => AuthenticationFromServerSide) => {
	const { shouldBeAuthenticated } = options;

	return async (ctx: NextPageContext): AuthenticationFromServerSide => {
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
};

export default authenticationFromServerSide;
