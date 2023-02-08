import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Counter from "./components/Counter"
import Business from "./components/Business"
import Billing from "./components/Billing"
import Card from "./components/Card"
import Testimonial from "./components/Testimonial"
import Clients from "./components/Clients"
import Services from "./components/Services"
import Footer from "./components/Footer"

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden px-6 sm:px-16 '>
      <Navbar />
      <Hero/>
      <Counter/>
      <Business/>
      <Billing/>
      <Card/>
      <Testimonial/>
      <Clients/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
