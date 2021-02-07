import { HTMLAttributes, ReactElement } from 'react';
import ScribbleArrow from '../assets/arrows/scribble.svg';
import cls from '../utils/multi-classes';

interface IScribble extends HTMLAttributes<HTMLDivElement> {
	content: string;
	direction?: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
	arrow?: boolean;
}

Scribble.defaultProps = {
	direction: 'bottom-left',
	arrow: true
}

export default function Scribble(props: IScribble): ReactElement {
	const { content, className, direction, arrow } = props;
	
	return (
		<div className={cls('scribble', className, direction)}>
			{arrow && <ScribbleArrow />}
			<span>{content}</span>
		</div>
	)
}
