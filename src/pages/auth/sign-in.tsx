import { createElement, ReactElement } from 'react';
import stl from '../../styles/pages/auth.module.scss';
import cls from '../../utils/multi-classes';
import Link from 'next/link';

import * as Networks from '../../assets/auth/networks';

export default function SignIn(): ReactElement {
	return (
		<main className={cls('flex--center', 'layout', stl.auth)}>
			<div id={stl['sign-msg']}>
				<h1 className={stl.title}>Sign In to<br />Manage content</h1>
				<p className={stl.text}>If you don't have an account,<br />You can <Link href="/auth/sign-up"><a>sign up here</a></Link>.</p>
			</div>
			<form id={stl['sign-form']} className="flex--column" autoComplete="off">
				<input type="text" name="email" className={cls(stl['input--id'])} placeholder="Email" />
				<div id={stl.password}>
					<input type="password" name="password" className={cls(stl['input--id'])} placeholder="Password" />
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
	)
}
