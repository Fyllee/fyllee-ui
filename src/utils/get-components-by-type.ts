import type { FC, ReactElement, ReactNode } from 'react';
import { Children } from 'react';

export default function getComponentsByType(children: ReactNode, component: FC): ReactElement[] {
	const c = Children.map(children, c => c) ?? [];

	return c.filter((e): e is ReactElement => {
		const { type } = e as ReactElement;

		if (typeof type === 'function')
			return type.name === component.name;
		return type === component.name;
	});
}
