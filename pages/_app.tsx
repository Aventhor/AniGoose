import { AppProps } from "next/app";
import Nav from "../components/nav/nav";
import "../css/bootstrap-grid.min.css";
import "../scss/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Nav />
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;
