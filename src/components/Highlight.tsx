import { Fragment, HTMLAttributes, ReactElement } from 'react';
import cls from '../utils/multi-classes';
import stl from '../styles/components/highlight.module.scss';

`
import Bild from 'bild';
import img from './image.png'

const bild: Bild = Bild('BQokikJOvBi2Hl4olfQ2');

await bild.upload({
	image: img,
	name: 'demo.png'
});

console.log('Image successfully uploaded!');
`

// Global elements
const Break = ({ lines } : { lines?: number }): ReactElement => <Fragment>{Array.from({ length: lines || 1 }).map(_ => `\n`)}</Fragment>

// Editor elements
const CodeEditor = (props: HTMLAttributes<HTMLElement>): ReactElement => <pre className={cls(stl.highlight, stl['code-editor'])}><code>{props.children}</code></pre>
const Keyword = (props: HTMLAttributes<HTMLElement>): ReactElement => <span className={stl.keyword}>{props.children}</span>
const Variable = (props: HTMLAttributes<HTMLElement>): ReactElement => <span className={stl.variable}>{props.children}</span>
const String = (props: HTMLAttributes<HTMLElement>): ReactElement => <span className={stl.string}>{props.children}</span>
const Punctuation = (props: HTMLAttributes<HTMLElement>): ReactElement => <span className={stl.punctuation}>{props.children}</span>
const Operator = (props: HTMLAttributes<HTMLElement>): ReactElement => <span className={stl.operator}>{props.children}</span>
const Function = (props: HTMLAttributes<HTMLElement>): ReactElement => <span className={stl.function}>{props.children}</span>
const Class = (props: HTMLAttributes<HTMLElement>): ReactElement => <span className={stl.class}>{props.children}</span>
const Tab = ({ length } : { length?: number }): ReactElement => <Fragment>{Array.from({ length: length || 1 }).map(_ => `  `)}</Fragment>

export function Editor(): ReactElement {
	return (
		<CodeEditor>
			<Keyword>import</Keyword> Bild <Keyword>from</Keyword> <String>'bild'</String><Punctuation>;</Punctuation>
			<Break />
			<Keyword>import</Keyword> img <Keyword>from</Keyword> <String>'./image.png'</String><Punctuation>;</Punctuation>
			<Break lines={2} />
			<Keyword>const</Keyword> <Variable>bild</Variable><Punctuation>:</Punctuation> <Variable>Bild</Variable> <Operator>=</Operator> <Keyword>new</Keyword> <Class>Bild</Class><Punctuation>(</Punctuation><String>'BQokikJOvBi2Hl4olfQ2'</String><Punctuation>)</Punctuation><Punctuation>;</Punctuation>
			<Break lines={2} />
			<Keyword>await</Keyword> <Variable>bild</Variable><Punctuation>.</Punctuation><Function>upload</Function><Punctuation>(</Punctuation><Punctuation>{'{'}</Punctuation>
			<Break />
			<Tab />image<Punctuation>:</Punctuation> img<Punctuation>,</Punctuation>
			<Break />
			<Tab />name<Punctuation>:</Punctuation> <String>'demo.png'</String>
			<Break />
			<Punctuation>{'}'}</Punctuation><Punctuation>)</Punctuation><Punctuation>;</Punctuation>
			<Break lines={2} />
			<Variable>console</Variable><Punctuation>.</Punctuation><Function>log</Function><Punctuation>(</Punctuation><String>'Image successfully uploaded!'</String><Punctuation>)</Punctuation><Punctuation>;</Punctuation>
		</CodeEditor>
	)
}

// Terminal elements
const CodeTerminal = (props: HTMLAttributes<HTMLElement>): ReactElement => <pre className={cls(stl.highlight, stl['code-terminal'])}><code>{props.children}</code></pre>
const PromptSign = (): ReactElement => <span className={stl['prompt-sign']}>$</span>

export function Terminal(): ReactElement {
	return (
		<CodeTerminal>
			<PromptSign /> ts-node ./app.ts
			<Break />
			{`>`} Image successfully uploaded!
		</CodeTerminal>
	)
}
