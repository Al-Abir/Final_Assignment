import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import Testimonials from './pages/Testimonials.jsx';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SetporffolioData, Showloading, HideLoading } from './redux/rootSlice.js';

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();



  const getAlldata = async () => {
    try {
      dispatch(Showloading()); // Set loading to true
      const response = await axios.get('/api/v1/portfolio-data');
      dispatch(SetporffolioData(response.data));
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    } finally {
      dispatch(HideLoading()); // Set loading to false
    }
  };

  useEffect(() => {
    getAlldata();
  }, []);

  useEffect(() => {
    console.log(portfolioData); // Log portfolioData from Redux store
  }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading && <p>Loading...</p>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;