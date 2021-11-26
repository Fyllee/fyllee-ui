/* eslint-disable max-len */
import type { FC, HTMLAttributes } from 'react';
import { Fragment } from 'react';
import stl from '@/styles/components/highlight.module.scss';
import cls from '@/utils/multi-classes';

// Global elements
const Break: FC<{ lines?: number }> = ({ lines }) => <Fragment>{Array.from({ length: lines ?? 1 }).map(_ => '\n')}</Fragment>;

// Editor elements
const CodeEditor: FC = (props: HTMLAttributes<HTMLElement>) => <pre className={cls(stl.highlight, stl['code-editor'])}><code>{props.children}</code></pre>;
const Keyword: FC = (props: HTMLAttributes<HTMLElement>) => <span className={stl.keyword}>{props.children}</span>;
const Variable: FC = (props: HTMLAttributes<HTMLElement>) => <span className={stl.variable}>{props.children}</span>;
const String: FC = (props: HTMLAttributes<HTMLElement>) => <span className={stl.string}>{props.children}</span>;
const Punctuation: FC = (props: HTMLAttributes<HTMLElement>) => <span className={stl.punctuation}>{props.children}</span>;
const Operator: FC = (props: HTMLAttributes<HTMLElement>) => <span className={stl.operator}>{props.children}</span>;
const Function: FC = (props: HTMLAttributes<HTMLElement>) => <span className={stl.function}>{props.children}</span>;
const Class: FC = (props: HTMLAttributes<HTMLElement>) => <span className={stl.class}>{props.children}</span>;
const Tab: FC<{ length?: number }> = ({ length }) => <Fragment>{Array.from({ length: length ?? 1 }).map(_ => '  ')}</Fragment>;

export const Editor: FC = () => (
	<CodeEditor>
		<Keyword>import</Keyword> Fyllee <Keyword>from</Keyword> <String>'fyllee'</String><Punctuation>;</Punctuation>
		<Break />
		<Keyword>import</Keyword> img <Keyword>from</Keyword> <String>'./image.png'</String><Punctuation>;</Punctuation>
		<Break lines={2} />
		<Keyword>const</Keyword> <Variable>fyllee</Variable><Punctuation>:</Punctuation> <Variable>Fyllee</Variable> <Operator>=</Operator> <Keyword>new</Keyword> <Class>Fyllee</Class><Punctuation>(</Punctuation><String>'BQokikJOvBi2Hl4olfQ2'</String><Punctuation>)</Punctuation><Punctuation>;</Punctuation>
		<Break lines={2} />
		<Keyword>await</Keyword> <Variable>fyllee</Variable><Punctuation>.</Punctuation><Function>upload</Function><Punctuation>(</Punctuation><Punctuation>{'{'}</Punctuation>
		<Break />
		<Tab />image<Punctuation>:</Punctuation> img<Punctuation>,</Punctuation>
		<Break />
		<Tab />name<Punctuation>:</Punctuation> <String>'demo.png'</String>
		<Break />
		<Punctuation>{'}'}</Punctuation><Punctuation>)</Punctuation><Punctuation>;</Punctuation>
		<Break lines={2} />
		<Variable>console</Variable><Punctuation>.</Punctuation><Function>log</Function><Punctuation>(</Punctuation><String>'Image successfully uploaded!'</String><Punctuation>)</Punctuation><Punctuation>;</Punctuation>
	</CodeEditor>
);

// Terminal elements
const CodeTerminal: FC = (props: HTMLAttributes<HTMLElement>) => <pre className={cls(stl.highlight, stl['code-terminal'])}><code>{props.children}</code></pre>;
const PromptSign: FC = () => <span className={stl['prompt-sign']}>$</span>;

export const Terminal: FC = () => (
	<CodeTerminal>
		<PromptSign /> ts-node ./app.ts
		<Break />
		{'>'} Image successfully uploaded!
	</CodeTerminal>
);
