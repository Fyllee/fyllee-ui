import { createRef, HTMLAttributes, ReactElement, ReactNode, RefObject } from 'react';

import getComponentsByType from '../utils/get-components-by-type';
import stl from '../styles/components/slider.module.scss';
import cls from '../utils/multi-classes';

interface ITab {
	children: ReactNode;
	name?: string;
}

interface IRefs {
	buttons: RefObject<HTMLLIElement>[];
	tabs: RefObject<HTMLImageElement>[];
}

function handleClick(refs: IRefs, index: number): void {
	let left = 0;	
	
	refs.tabs.forEach(e => e.current?.classList.remove(stl.visible));
	refs.buttons.forEach((e, i) => {
		e.current?.classList.remove(stl.active)
		if (i < index && e.current) {
			const { marginRight } = getComputedStyle(refs.buttons[i].current as HTMLElement)
			left += e.current?.offsetWidth + parseInt(marginRight);
		}
	});

	const btn: HTMLLIElement = refs.buttons[index].current as HTMLLIElement;
	const { parentNode } = btn;

	if (parentNode)
		(parentNode as HTMLDivElement).style.transform = `translateX(-${left}px)`;

	refs.tabs[index].current?.classList.add(stl.visible);
	btn?.classList.add(stl.active);
}

export function Tab(props: ITab): ReactElement {
	const { children } = props;

	return (
		<div className={stl.content}>
			{children}
		</div>
	);
}

// TODO: add keyboard arrows control
export function Slider(props: HTMLAttributes<HTMLDivElement>): ReactElement {
	const { children } = props;

	const tabs = getComponentsByType(children, Tab);
	const names: string[] = tabs.map(e => e.props.name);
	const refs: IRefs = { buttons: [], tabs: [] };

	return (
		<div className={cls('flex--column', stl.slider)}>
			<ul className={stl.navigation}>
				<div className={cls('flex--center', stl.overflow)}>
					{names.map((e, i) => {
						refs.buttons.push(createRef());

						return (
							<li className={cls(stl.button, i === 0 ? stl.active : null)} onClick={_ => handleClick(refs, i)} ref={refs.buttons[i]} key={names[i]}>
								{e}
							</li>
						);
					})}
				</div>
			</ul>
			<div className={stl.tabs}>
				{tabs.map((e, i) => {
					refs.tabs.push(createRef());

					return <img src={e.props.children.props.src} className={cls(stl.tab, i === 0 ? stl.visible : null)} ref={refs.tabs[i]} key={names[i]} />
				})}
			</div>
		</div>
	);
}
