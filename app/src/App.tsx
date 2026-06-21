import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Industries from './pages/Industries'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="industries" element={<Industries />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
