import { ReactElement } from 'react';
import Link from 'next/link';
import cls from '../utils/multi-classes';
import stl from '../styles/layout/header.module.scss';
import { useRouter } from 'next/router';

interface INavs {
	title: string,
	slug: string;
}

function ActiveLink({ href, content }: { href: string, content: string }) {
  return (
		<Link href={href}>
			{useRouter().pathname === href ? (
				<a className={stl.active}>{content}</a>
			) : (
				<a>{content}</a>
			)}
		</Link>
	)
}

export default function Header(): ReactElement {
	const nav: INavs[] = [{ title: 'Home', slug: '/' }, { title: 'Contact Us', slug: '/contact' }, { title: 'Help', slug: '/help' }];
	const sign: INavs[] = [{ title: 'Sign In', slug: '/auth/sign-in' }, { title: 'Sign Up', slug: '/auth/sign-up' }];
	
	return (
		<header id={stl.header} className={cls('layout', 'flex--center')}>
			<nav>
				<ul className={cls('flex--center', stl.menu)}>
					{nav.map(({title, slug}) => (
						<li key={slug}>
							<ActiveLink href={slug} content={title} />
						</li>
					))}
				</ul>
			</nav>
			<ul className={cls('flex--center', stl.sign)}>
				{sign.map(({title, slug}) => (
					<li key={slug}>
						<ActiveLink href={slug} content={title} />
					</li>
				))}
			</ul>
		</header>
	)
}
