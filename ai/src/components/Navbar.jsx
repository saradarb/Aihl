import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  const toggleMenu = () => {
    document.querySelector('.hamburger')?.classList.toggle('open');
    document.getElementById('mobileMenu')?.classList.toggle('open');
    document.getElementById('overlay')?.classList.toggle('active');

    if (document.getElementById('mobileMenu')?.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <nav>
      <Link className="nav-logo" to="/Aihl" style={{ textDecoration: 'none'}}>Veritas AI</Link>
      <div className="nav-links">
        <a href="/"></a>
        <a href="/Aihl/pricing"></a>
      </div>
      <button className="nav-contact" onClick={() => window.location.href='/Aihl/contactus'}>
        Contact us
      </button>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span><span></span><span></span><span></span>
      </div>
    </nav>
  );
}

export default Navbar;
