import type { GetServerSidePropsResult, NextPageContext } from 'next';
import nookies from 'nookies';
import type { User } from '@/app/@types';
import API from '@/app/utils/api';

interface AuthenticationFromServerSideOptions {
	shouldBeAuthenticated: boolean;
}

type AuthenticationFromServerSide = GetServerSidePropsResult<Record<string, never> | { user: User }>;

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
const authenticationFromServerSide = (options: AuthenticationFromServerSideOptions) => {
	const { shouldBeAuthenticated } = options;

	return async (ctx: NextPageContext): Promise<AuthenticationFromServerSide> => {
		const { token } = nookies.get(ctx);

		if (!shouldBeAuthenticated && token)
			return { redirect: { destination: '/app', permanent: false } };
		else if (shouldBeAuthenticated && !token)
			return { redirect: { destination: '/auth/sign-in', permanent: false } };
		else if (!shouldBeAuthenticated && !token)
			return { props: {} };

		// Else, we have a token, and we need to be authenticated
		try {
			const { data: user } = await new API().getUserData(token);

			return { props: { user } };
		} catch (e: unknown) {
			console.error('An error has occured while login user', e);
			nookies.destroy(ctx, 'token');

			return { redirect: { destination: '/auth/sign-in', permanent: false } };
		}
	};
};

export default authenticationFromServerSide;
