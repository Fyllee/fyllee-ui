import Link from 'next/link';
import { createElement, ReactElement } from 'react';
import stl from '../styles/layout/footer.module.scss';
import cls from '../utils/multi-classes';
import * as Networks from '../assets/global/networks/index';

export default function Footer(): ReactElement {
	return (
		<footer id={stl.footer} className="layout flex--column">
			<div className={cls('flex', stl.content)}>
				<div className={stl.brand}>
					<Link href="/">
						<a className={stl.brand__logo}>
							<img src="/images/global/logo.svg" alt="Temporary logo" />
						</a>
					</Link>
					<p className={stl.brand__slogan}><b>Bild</b> allows you to host and manage static content for your websites or application.</p>
					<ul className={stl.brand__networks}>
						{Object.keys(Networks).map(e => (
							<li key={e}>
								<a href="">
									{createElement((Networks as SVG)[e])}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className={cls('flex', stl.links)}>
					<div className={stl.links__list}>
						<h5 className={stl.links__title}>Product</h5>
						<ul>
							<li>Overview</li>
							<li>Pricing</li>
							<li>Features</li>
						</ul>
					</div>
					<div className={stl.links__list}>
						<h5 className={stl.links__title}>Account</h5>
						<ul>
							<li>Dashboard</li>
							<li>Sign In</li>
							<li>Sign Up</li>
						</ul>
					</div>
					<div className={stl.links__list}>
						<h5 className={stl.links__title}>Developers</h5>
						<ul>
							<li>Documentation</li>
							<li>SDK</li>
						</ul>
					</div>
					<div className={stl.links__list}>
						<h5 className={stl.links__title}>Company</h5>
						<ul>
							<li>About Us</li>
							<li>Contact Us</li>
							<li>Term Of Use</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={cls('flex--center', stl.mentions)}>
				<p>&copy; 2021 Bild.</p>
				<p className={stl.mentions__made}>Made with <span className={stl.mentions__made__heart}>♥</span> from France</p>
				<p>All rights reserved.</p>
			</div>
		</footer>
	);
}
