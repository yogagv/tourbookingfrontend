import React from 'react'
import Layout from './components/Layout/Layout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/Scroll/Scrolltotop';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Layout />
      
    </div>
  )
}

export default App