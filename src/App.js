import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Counter from "./components/Counter"

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar />
      <Hero/>
      <Counter/>
    </div>
  )
}

export default App
