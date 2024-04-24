import React from 'react'

import { About, Footer, Header, Skills, Testimonials, Work } from '../../container'
import { Navbar } from '../../componenets';

export default function Home() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}
