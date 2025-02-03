
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx"
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Blog from './pages/Blog.jsx'
import Testimonials from './pages/Testimonials.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/services" element={<Services />} />
        <Route path='testimonials' element={<Testimonials></Testimonials>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
