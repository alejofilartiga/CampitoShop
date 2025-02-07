import React from 'react';
import Routes from './Routes/Routes'; // Asegúrate de que esta ruta sea correcta
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

