import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>MY DAYMADE</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
