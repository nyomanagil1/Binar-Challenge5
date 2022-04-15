import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>
      <section id="section-footer">
        <div class="container pt-5">
          <div class="row me-lg-5 ms-lg-5 ps-lg-5 pb-lg-4 my-lg-3">
            <div class="col-lg-3 col-md-6 contact-footer">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div class="col-lg-3 col-md-6 link-footer">
              <a href="#ourservices">Our Services</a>
              <a href="#section-whyus">Why Us</a>
              <a href="#testimonial">Testimonial</a>
              <a href="#section-faq">FAQ</a>
            </div>
            <div class="col-lg-3 col-md-6 sosmed-footer">
              <p>Connect with us</p>
              <div class="sosmed-img-footer">
                <a href="/">
                  <img src="/img/fb.png" alt="" />
                </a>
                <a href="/">
                  <img src="/img/ig.png" alt="" />
                </a>
                <a href="/">
                  <img src="/img/twitter.png" alt="" />
                </a>
                <a href="/">
                  <img src="/img/mail.png" alt="" />
                </a>
                <a href="/">
                  <img src="/img/twitch.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 ps-md-5 copyright-footer">
              <p>Copyright Binar 2022</p>
              <div class="logo-footer">
                <a href="/">
                  <img src="/img/logo.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
