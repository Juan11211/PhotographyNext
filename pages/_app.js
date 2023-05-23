import '@/styles/globals.css'
import Navbar from './components/Navbar'

// we put navbar here so it can display on all pages. 
// think of this as the main source. where everything is displaying. 
export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
         <Component {...pageProps} />
    </>

  )
 
}
