import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import Agents from './pages/Agents'
import Contact from './pages/Contact'
import ListProperty from './pages/ListProperty'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [favorites, setFavorites] = useState([])
  const toggleFavorite = (id) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  return (
    <div className="min-h-screen bg-cream text-ink">
      <ScrollToTop />
      <Navbar />
      <main><Routes>
        <Route path="/" element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/properties" element={<Properties favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/properties/:id" element={<PropertyDetail favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="*" element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} />
      </Routes></main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
