import React from 'react';

function MobileMenu() {
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
    <>
      <div className="overlay" id="overlay" onClick={toggleMenu}></div>
      <div className="mobile-menu" id="mobileMenu">
        <div className="close-btn" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </div>
        <a href="/" onClick={toggleMenu}>Home</a>
        <a href="/features" onClick={toggleMenu}>Features</a>
        <a href="/pricing" onClick={toggleMenu}>Pricing</a>
      </div>
    </>
  );
}

export default MobileMenu;
