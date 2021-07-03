import '../styles/global.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'

export default function MyApp({ Component, pageProps }) {
  return ( 
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
  )
}