import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className="light" style={{ colorScheme: 'light' } }>
            <Head />
            <body>
                <Main />
                <div id={'modal-root'} />
                <NextScript />
            </body>
        </Html>
    )
}
