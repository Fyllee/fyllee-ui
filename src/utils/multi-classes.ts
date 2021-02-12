/**
 * Returns a class string
 * @remarks
 * This function permit to you to join strings, variables, null, undefind into one string
 * @param classes - You classes in strings or in variables
 * @returns A string that contains all classes
 */
export default function multiClasses(...classes: (string | null | undefined)[]): string {
	const filtered: string[] = classes.filter((e): e is string => typeof e === 'string');
	
	return filtered.join(' ');
}
