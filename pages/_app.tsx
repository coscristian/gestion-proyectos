import type {AppProps} from 'next/app'

// Defining the layout

export default function App({Component, pageProps}: AppProps){
    console.log("Estoy en el app");
    return <Component {...pageProps} />
}
