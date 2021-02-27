import type { NextPage } from 'next';
import Link from 'next/link';
import type { ChangeEvent, FormEvent } from 'react';
import { createElement, useState } from 'react';
import * as Networks from '@/assets/auth/networks';
import FlashError from '@/components/FlashError';
import { useAuthentication } from '@/contexts/auth';
import stl from '@/styles/pages/auth.module.scss';
import authenticationFromServerSide from '@/utils/auth/authentication-from-server-side';
import cls from '@/utils/multi-classes';

const SignIn: NextPage = () => {
	const { error, login } = useAuthentication();
	const [inputs, setInputs] = useState<{ email: string; password: string }>({
		email: 'sample@domain.com',
		password: 'test123',
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		void login(inputs.email, inputs.password, '/app');
	};

	return (
		<main id={stl.auth} className="flex--center layout">
			<div id={stl['sign-msg']}>
				<h1 className={stl.title}>Sign In to<br />Manage content</h1>
				<p className={stl.text}>If you don't have an account,<br />You can <Link href="/auth/sign-up"><a>sign up here</a></Link>.</p>
			</div>
			<form id={stl['sign-form']} className="flex--column" autoComplete="off" onSubmit={handleFormSubmit}>
				<FlashError className={stl.flash} error={error!} message="Unexpected error" not={[401, 404]} />
				<input type="text" name="email" className={cls(stl['input--id'])} placeholder="Email" value={inputs.email} onChange={handleInputChange} />
				<FlashError className={stl.flash} error={error!} code={404} message="Unexisting user" />
				<div id={stl.password}>
					<input type="password" name="password" className={cls(stl['input--id'])} placeholder="Password" value={inputs.password} onChange={handleInputChange} />
					<FlashError className={stl.flash} error={error!} code={401} message="Incorrect password" />
					<p className={stl.forgotten}>
						<Link href="/auth/reset-password">
							<a>Forgotten password</a>
						</Link>
					</p>
				</div>
				<input type="submit" className={stl['input--submit']} value="Sign In" />
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
};

export const getServerSideProps = authenticationFromServerSide({
	shouldBeAuthenticated: false,
});

export default SignIn;
