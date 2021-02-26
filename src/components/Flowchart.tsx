import type { FC, HTMLAttributes } from 'react';
import { Children } from 'react';
import stl from '../styles/components/flowchart.module.scss';
import getComponentsByType from '../utils/get-components-by-type';
import cls from '../utils/multi-classes';

interface IStage {
	title: string;
	subtitle: string;
	start?: boolean;
	end?: boolean;
	dark?: boolean;
}

export const Stage: FC<IStage> = (props: IStage) => {
	const {
		title, subtitle, start, end, dark,
	} = props;

	if (!title || !subtitle)
		throw new Error('Flowchart stage component require title and subtitle.');

	return (
		<div className={cls(stl.stage, dark ? stl.darker : null)}>
			{start && <span className={stl.dot} />}
			<p className={stl.title}>{title}</p>
			<span className={stl.subtitle}>{subtitle}</span>
			{end && <span className={stl.dot} />}
		</div>
	);
};

Stage.displayName = 'Stage';
Stage.defaultProps = {
	start: false,
	end: false,
};

const Flowchart: FC = (props: HTMLAttributes<HTMLDivElement>) => {
	const { children } = props;

	if (!children)
		throw new Error('Flowchart component require stage component.');

	const stages = getComponentsByType(children, Stage);

	return (
		<div className={stl.flowchart}>
			{stages.map((c, i) => {
				const { title, subtitle, dark } = c.props;

				const isFirst = i === 0;
				const isLast = i + 1 === Children.count(children);
				const isDark = dark ?? isFirst;

				return <Stage title={title} subtitle={subtitle} start={!isFirst} end={!isLast} dark={isDark} key={i} />;
			})}
		</div>
	);
};

Flowchart.defaultProps = {
	animated: false,
};

export default Flowchart;
