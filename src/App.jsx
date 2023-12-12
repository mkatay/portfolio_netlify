import {Hero} from './components/Hero'
import './App.scss'
import { Navbar } from './components/Navbar'
import {About} from './components/About'
import {Portfolio} from './components/Portfolio'

function App() {
  
  return (
    <div className="app">
      <Navbar/>
      <section id="Home"><Hero /></section>
      <section id="About"><About/></section>
      <section id="Portfolio"><Portfolio/></section>
     {/* <section>Portfolio2</section>
      <section>Portfolio3</section>*/}
      <section id="Contact">Contact page</section>
    </div>
  )
}

export default App
