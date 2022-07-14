import { Provider } from 'react-redux'
import { useStore } from '../store'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import '../styles/global.css'
import 'antd/dist/antd.css';
import Layout from "../components/layout/layout";
import ScrollArrow from "../components/scrollToTop/scroll";
import ScrollToTop from "../components/scrollToTop/scroll";


const progress = new ProgressBar({
    size: 4,
    color: "#38a169",
    className: "bar-of-progress",
    delay: 100,
});
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}