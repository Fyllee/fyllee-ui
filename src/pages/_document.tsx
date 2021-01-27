import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class Document extends NextDocument {
	static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);

    return initialProps;
  }
	
	render() {
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
