import { ReactElement } from 'react';
import Link from 'next/link';
import cls from '../utils/multi-classes';
import stl from '../styles/layout/header.module.scss';
import { useRouter } from 'next/router';

interface IActiveProps {
	href: string;
	content: string;
	className?: string;
}

function ActiveLink({ href, content, className }: IActiveProps): ReactElement {
  return (
		<Link href={href}>
			{useRouter().pathname === href ? (
				<a className={cls('active', className)}>{content}</a>
			) : (
				<a className={className}>{content}</a>
			)}
		</Link>
	)
}

export default function Header(): ReactElement {
	const nav: IActiveProps[] = [{ content: 'Home', href: '/' }, { content: 'Contact Us', href: '/contact' }, { content: 'Price', href: '/price' }, { content: 'Help', href: '/help' }];
	const sign: IActiveProps[] = [{ content: 'Sign In', href: '/auth/sign-in' }, { content: 'Sign Up', href: '/auth/sign-up', className: 'button--dark' }];
	
	return (
		<header id={stl.header} className={cls('layout', 'flex--center')}>
			<Link href="/">
				<a>
					<img className={stl.logo} src="/images/global/logo.svg" alt="Temporary logo" />
				</a>
			</Link>
			<nav>
				<ul className={cls('flex--center', stl.menu)}>
					{nav.map(({href, content}) => (
						<li key={content}>
							<ActiveLink href={href} content={content} />
						</li>
					))}
				</ul>
			</nav>
			<ul className={cls('flex--center', stl.sign)}>
				{sign.map(({href, content, className}) => (
					<li key={content}>
						<ActiveLink href={href} content={content} className={className} />
					</li>
				))}
			</ul>
		</header>
	)
}
