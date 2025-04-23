import React from 'react';
import Routes from './Routes/Routes';
import Header from "./assets/components/Header/Header"
import Layout from "./assets/components/Layout/Layout"
import Footer from "./assets/components/Footer/Footer"

function App() {
  return (
    <Layout>
      <Header />
      <Routes />
      <Footer />
    </Layout>
  )
}

export default App

