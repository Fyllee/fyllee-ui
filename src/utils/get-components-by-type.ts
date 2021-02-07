import { Children, ReactElement, ReactNode } from 'react';

export default function getComponentsByType(children: ReactNode, component: Function): ReactElement[] {
	const c = Children.map(children, c => c) || [];

	return c.filter((e): e is ReactElement => {
		const type = (e as ReactElement).type;

		if (typeof type === 'function')
			return type.name === component.name;
		return type === component.name;
	});
}
