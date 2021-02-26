import type { DocumentContext, DocumentInitialProps } from 'next/document';
import NextDocument, {
 Head, Html, Main, NextScript,
} from 'next/document';

class Document extends NextDocument {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return await NextDocument.getInitialProps(ctx);
  }

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Document;
