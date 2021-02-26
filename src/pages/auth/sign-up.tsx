import type { NextPage } from 'next';
import Link from 'next/link';
import { createElement } from 'react';
import * as Networks from '@/assets/auth/networks';
import stl from '@/styles/pages/auth.module.scss';
import authenticationFromServerSide from '@/utils/auth/authentication-from-server-side';
import cls from '@/utils/multi-classes';

const SignUp: NextPage = () => (
	<main id={stl.auth} className="flex--center layout">
		<div id={stl['sign-msg']}>
			<h1 className={stl.title}>Sign Up to<br />Manage content</h1>
			<p className={stl.text}>If you already have an account,<br />You can <Link href="/auth/sign-in"><a>sign in here</a></Link>.</p>
		</div>
		<form id={stl['sign-form']} className="flex--column" autoComplete="off">
			<input type="text" name="firstname" className={cls(stl['input--id'])} placeholder="Firstname" />
			<input type="text" name="lastname" className={cls(stl['input--id'])} placeholder="Lastname" />
			<input type="text" name="email" className={cls(stl['input--id'])} placeholder="Email" />
			<input type="password" name="password" className={cls(stl['input--id'])} placeholder="Password" />
			<input type="password" name="passwordverif" className={cls(stl['input--id'])} placeholder="Repeat Password" />
			<input type="submit" className={stl['input--submit']} value="Sign Up" />
			<p className={cls('flex--center', stl.continue)}>or continue with</p>
			<div id={stl.external}>
				{Object.keys(Networks).map(e => (
					<button type="submit" key={e}>
						{createElement((Networks as SVG)[e])}
					</button>
				))}
			</div>
		</form>
	</main>
);

export const getServerSideProps = authenticationFromServerSide({
	shouldBeAuthenticated: false,
});

export default SignUp;
