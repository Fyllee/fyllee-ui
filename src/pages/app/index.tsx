import { ReactElement } from 'react';
import { useAuthentication } from '../../contexts/auth';
import { authenticationFromServerSide } from '../../utils/auth/authentication-from-server-side';

function Index(): ReactElement {
	const { user, logout } = useAuthentication();

	return (
		<div>
			<h1>Hello</h1>
			<button onClick={() => logout('/auth/sign-in')}>logout</button>
			<h1>State: {user!.email}</h1>
		</div>
	);
}

export const getServerSideProps = authenticationFromServerSide({
	shouldBeAuthenticated: true,
});

export default Index;
