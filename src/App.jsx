import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Support from './components/Support'
import AllInOne from './components/AllInOne'
import Pricing from './components/Pricing'
import './global.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
      <AllInOne/>
      <Pricing/>
      <Footer/>
    </>
  )
}

export default App
