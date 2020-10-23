import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
    )
}

export default App
