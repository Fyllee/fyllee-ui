import Link from 'next/link';
import type { FC } from 'react';

// Assets and style
import {
 Email, Facebook, Instagram, Twitter,
} from '@/assets/global/networks/index';
import stl from '@/styles/layout/footer.module.scss';
import cls from '@/utils/multi-classes';

type TPage = [name: string, route: `/${string}`];
interface ILinks {
	Product: TPage[];
	Account: TPage[];
	Developers: TPage[];
	Company: TPage[];
}

const Footer: FC = () => {
	const networks: Array<[FC, string]> = [[Twitter, 'https://twitter.com/bild'], [Instagram, 'https://instagram.com/bild'], [Facebook, 'https://facebook.com/bild'], [Email, 'mailto:contact@bild.com']];
	const links: ILinks = {
		Product: [
			['Overview', '/overview'],
			['Pricing', '/pricing'],
			['Features', '/features'],
		],
		Account: [
			['Dashboard', '/dashboard'],
			['Sign In', '/auth/sign-in'],
			['Sign Up', '/auth/sign-up'],
		],
		Developers: [
			['Documentation', '/developer/documentation'],
			['SDK', '/developer/sdk'],
		],
		Company: [
			['About Us', '/about'],
			['Contact Us', '/contact'],
			['Term Of Use', '/term-of-use'],
			['Support', '/support'],
		],
	};

	return (
		<footer id={stl.footer} className="flex--column">
			<div className="layout">
				<div className={cls('flex', stl.content)}>
					<div className={stl.brand}>
						<Link href="/">
							<a className={stl.brand__logo}>
								<img src="/images/global/logo.svg" alt="Temporary logo" />
							</a>
						</Link>
						<p className={stl.brand__slogan}>
							<b>Bild</b> allows you to host and manage static content for your websites or application.
						</p>
						<ul className={stl.brand__networks}>
							{networks.map((e, i) => (
								<li key={i}>
									<a href={e[1]} target="_blank" rel="noreferrer">
										{e[0]({})}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className={cls('flex', stl.links)}>
						{Object.entries(links).map((e) => {
							const [title, pages] = e;
							return (
								<div className={stl.links__list} key={title.toLowerCase()}>
									<h5 className={stl.links__title}>{title}</h5>
									<ul>
										{pages.map((e: TPage) => {
											const [name, route] = e;
											return (
												<li key={name}>
													<Link href={route}>
														<a>{name}</a>
													</Link>
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</div>
				<div className={cls('flex--center', stl.mentions)}>
					<p>&copy; 2021 Bild.</p>
					<p className={stl.mentions__made}>
						Made with <span className={stl.mentions__made__heart}>♥</span> from France.
					</p>
					<p>All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
