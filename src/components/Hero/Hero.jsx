import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section id="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 my-auto pt-4">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          </div>
          <div class="col-lg-6 position-relative" style={{ height: '400px' }}>
            <img src="/img/mobil.png" alt="mobil" class="img-fluid img-hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
