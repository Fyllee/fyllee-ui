import { ReactElement } from 'react';
import stl from '../../styles/pages/auth.module.scss';
import cls from '../../utils/multi-classes';
import Link from 'next/link';

import Google from '../../assets/networks/google.svg';
import Apple from '../../assets/networks/apple.svg';
import Facebook from '../../assets/networks/facebook.svg';

export default function SignUp(): ReactElement {
	return (
		<main className={cls('flex--center', 'layout', stl.auth)}>
			<div id={stl['sign-msg']}>
				<h1 className={stl.title}>Sign Up to<br />Manage images</h1>
				<p className={stl.text}>If you already have an account,<br />You can <Link href="/auth/sign-up"><a>sign in here</a></Link>.</p>
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
					<button type="submit">
						<Google />
					</button>
					<button type="submit">
						<Apple />
					</button>
					<button type="submit">
						<Facebook />
					</button>
				</div>
			</form>
		</main>
	)
}
