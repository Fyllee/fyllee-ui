import { HTMLAttributes, ReactElement } from 'react';
import ScribbleArrow from '../assets/arrows/scribble.svg';
import cls from '../utils/multi-classes';

interface IScribble extends HTMLAttributes<HTMLDivElement> {
	content: string;
	direction?: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
}

Scribble.defaultProps = {
	direction: 'bottom-left',
}

export default function Scribble(props: IScribble): ReactElement {
	const { content, className, direction } = props;
	
	return (
		<div className={cls('scribble', className, direction)}>
			<div className="float">
				<ScribbleArrow />
				<span>{content}</span>
			</div>
		</div>
	)
}