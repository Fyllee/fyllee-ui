import type { NextPage } from 'next';
import nookies from 'nookies';
import Loader from '@/components/Loader';
import { useAuthentication } from '@/contexts/auth';
import API from '@/utils/api';
import withServerSideAuthentication from '@/utils/auth/with-server-side-authentication';

const Index: NextPage = (props) => {
	const { user } = useAuthentication();

	console.log('PROPS', props);

	if (!user)
		return <Loader />;

	return (
		<div>
			<h1>Account / Applications</h1>
			{Object.entries(user).map(e => <p key={e[0]}>{e[0]}: {e[1]}</p>)}
		</div>
	);
};

export const getServerSideProps = withServerSideAuthentication(async (ctx) => {
	const { token } = nookies.get(ctx);
	const { data: { applications } } = await new API().getApplications(token);

	return {
		props: {
			applications,
		},
	};
}, { shouldBeAuthenticated: true });

export default Index;
