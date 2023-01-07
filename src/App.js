import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Counter from "./components/Counter"
import Business from "./components/Business"
import Billing from "./components/Billing"

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden px-6 sm:px-16 '>
      <Navbar />
      <Hero/>
      <Counter/>
      <Business/>
      <Billing/>
    </div>
  )
}

export default App
