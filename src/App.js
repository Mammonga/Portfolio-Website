import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Lebenslauf from './components/Lebenslauf'
import PizzaMenu from './components/Pizza-Menu'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="lebenslauf" element={<Lebenslauf />} />
        <Route path="pizza-menu" element={<PizzaMenu />} />
      </Route>
    </Routes>
  )
}

export default App
