export default function multiClasses(...classes: (string | null | undefined)[]): string {
	const filtered: string[] = classes.filter((e): e is string => typeof e === 'string');
	
	return filtered.join(' ');
}
