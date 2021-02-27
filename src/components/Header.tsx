import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useAuthentication } from '@/contexts/auth';
import stl from '@/styles/layout/header.module.scss';
import cls from '@/utils/multi-classes';

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
	);
}

export default function Header(): ReactElement {
	const { user } = useAuthentication();

	const nav: IActiveProps[] = [{ content: 'Home', href: '/' }, { content: 'Price', href: '/price' }, { content: 'Contact Us', href: '/contact' }, { content: 'Help', href: '/help' }];
	const sign: IActiveProps[] = [{ content: 'Sign In', href: '/auth/sign-in' }, { content: 'Sign Up', href: '/auth/sign-up', className: 'button--blue' }];

	return (
		<header id={stl.header}>
			<div className="layout flex--center">
				<Link href="/">
					<a className={stl.logo}>
						<img src="/images/global/logo.svg" alt="Temporary logo" />
					</a>
				</Link>
				<nav>
					<ul className={cls('flex--center', stl.menu)}>
						{nav.map(({ href, content }) => (
							<li key={content}>
								<ActiveLink href={href} content={content} />
							</li>
						))}
					</ul>
				</nav>
				<ul className={cls('flex--center', stl.sign)}>
					{user ? (
						<li>
							<ActiveLink href="/app" content="Account" className="button--blue" />
						</li>
					) : sign.map(({ href, content, className }) => (
						<li key={content}>
							<ActiveLink href={href} content={content} className={className} />
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
