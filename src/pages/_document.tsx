import type { DocumentContext, DocumentInitialProps } from 'next/document';
import NextDocument, {
 Head, Html, Main, NextScript,
} from 'next/document';
import type { ReactElement } from 'react';

class Document extends NextDocument {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return await NextDocument.getInitialProps(ctx);
  }

	render(): ReactElement {
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
