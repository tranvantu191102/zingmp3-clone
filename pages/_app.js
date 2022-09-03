import '../styles/globals.css'
import ThemeContextProvider from '../contexts/ThemeContext'
import ThemeContainer from '../components/ThemeContainer'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'

import "swiper/css";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <ThemeContainer>
        <Sidebar />
        <Header />
        <Component {...pageProps} />
      </ThemeContainer>
    </ThemeContextProvider>
  )
}

export default MyApp
