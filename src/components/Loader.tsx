import type { FC } from 'react';
import stl from '@/styles/layout/loader.module.scss';

const Loader: FC = () => (
	<main id={stl.loader} className="flex--column">
		<h1 className={stl.title}>Loading</h1>
		<div className={stl.loading} />
	</main>
);

export default Loader;
