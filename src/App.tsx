import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import theme from './theme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Publications from './pages/Publications'
import Artwork from './pages/Artwork'
import Etc from './pages/Etc'
import NewsList from './pages/NewsList'
import NewsDetail from './pages/NewsDetail'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-quart',
    })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/etc" element={<Etc />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  )
}
