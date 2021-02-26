import type { NextPage } from 'next';
import { useAuthentication } from '@/contexts/auth';
import authenticationFromServerSide from '@/utils/auth/authentication-from-server-side';

const Index: NextPage = () => {
	const { user, logout } = useAuthentication();

	return (
		<div>
			<h1>Hello</h1>
			<button onClick={(): void => { logout('/auth/sign-in'); }}>logout</button>
			<h1>State: {user!.email}</h1>
		</div>
	);
};

export const getServerSideProps = authenticationFromServerSide({
	shouldBeAuthenticated: true,
});

export default Index;
