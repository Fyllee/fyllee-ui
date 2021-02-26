import type { NextPageContext } from 'next';
import nookies from 'nookies';
import API from '@/app/utils/api';

interface AuthenticationFromServerSideOptions {
	shouldBeAuthenticated: boolean;
}

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
const authenticationFromServerSide = (options: AuthenticationFromServerSideOptions) => {
	const { shouldBeAuthenticated } = options;

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	return async (ctx: NextPageContext) => {
		const { token } = nookies.get(ctx);

		if (!shouldBeAuthenticated && token)
			return { redirect: { destination: '/app', permanent: false } };
		else if (shouldBeAuthenticated && !token)
			return { redirect: { destination: '/auth/sign-in', permanent: false } };
		else if (!shouldBeAuthenticated && !token)
			return { props: {} };

		// Else, we have a token, and we need to be authenticated
		try {
			const { data } = await new API().getUserData(token);

			return { props: { user: data } };
		} catch (e: unknown) {
			console.error('An error has occured while login user', e);
			nookies.destroy(ctx, 'token');

			return { redirect: { destination: '/auth/sign-in', permanent: false } };
		}
	};
};

export default authenticationFromServerSide;
