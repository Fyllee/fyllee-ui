import type { NextPage } from 'next';
import Loader from '@/components/Loader';
import { useAuthentication } from '@/contexts/auth';
import authenticationFromServerSide from '@/utils/auth/authentication-from-server-side';

const Index: NextPage = () => {
	const { user, logout } = useAuthentication();

	const handleClick = (): void => {
		logout('/auth/sign-in');
	};

	if (!user)
		return <Loader />;

	return (
		<div>
			<h1>Account</h1>
			<button onClick={handleClick}>logout</button>
			{Object.entries(user).map(e => <p key={e[0]}>{e[0]}: {e[1]}</p>)}
		</div>
	);
};

export const getServerSideProps = authenticationFromServerSide({
	shouldBeAuthenticated: true,
});

export default Index;
