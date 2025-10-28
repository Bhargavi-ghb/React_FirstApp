import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Content2 from './Content2.jsx'
import Content3 from './Content3.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
    <Content2 />
    <Content3 />
    <Footer />
  </StrictMode>,
)
