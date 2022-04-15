import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Pencarian from '../components/Search/Pencarian';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div class="d-flex justify-content-center">
        <Pencarian />
      </div>
      <Footer />
    </>
  );
}

export default Home;
