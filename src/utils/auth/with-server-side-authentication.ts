import type { NextPageContext } from 'next';
import type { AuthenticationFromServerSide, AuthenticationFromServerSideOptions, AuthenticationFromServerSideProps } from './authentication-from-server-side';
import authenticationFromServerSide from './authentication-from-server-side';

type GetServerSideProps = Record<string, unknown>;
type WithServerSideAuthentication = AuthenticationFromServerSideProps | GetServerSideProps;

/**
 * This helper allow you to use 2 differents 'getServerSideProps' functions
 * @param getServerSideProps - The 2nd 'getServerSideProps' function to use
 * with 'authenticationFromServerSide'
 * @param options - An object with property 'shouldBeAuthenticated' that
 * indicate if the user has to be logged to access to this page
 * @returns An objet of type 'GetServerSidePropsResult'
 * @example Return application props with authentication props
 * ```
 * export const getServerSideProps = withServerSideAuthentication(async (ctx) => {
 *   const { data: { applications } } = await new API().getApplications();
 *   return {
 *     props: {
 *       applications,
 *     },
 *   };
 * }, { shouldBeAuthenticated: true });
 * ```
 */
export default function withServerSideAuthentication(
	getServerSideProps: (ctx: NextPageContext) => AuthenticationFromServerSide<GetServerSideProps>,
	options: AuthenticationFromServerSideOptions,
): ((ctx: NextPageContext) => AuthenticationFromServerSide<WithServerSideAuthentication>) {
	return async (ctx: NextPageContext): AuthenticationFromServerSide<WithServerSideAuthentication> => {
		const authenticationProps = await authenticationFromServerSide(options)(ctx);
		if (!('props' in authenticationProps))
			return authenticationProps;

		const newServerSideProps = await getServerSideProps(ctx);
		if (!('props' in newServerSideProps))
			return newServerSideProps;

		return {
			props: {
				user: authenticationProps.props.user,
				...newServerSideProps.props,
			},
		};
	};
}
