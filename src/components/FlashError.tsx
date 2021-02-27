import type { FC, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLParagraphElement> {
	error: number;
	message: string;
	code?: number;
	not?: number[];
}

const FlashError: FC<Props> = ({
 error, code, message, not, ...props
}: Props) => {
	if (error === code)
		return <p {...props}>{message}</p>;

	else if (error && !code && !not?.includes(error))
		return <p {...props}>{message}</p>;

	return null;
};

export default FlashError;
