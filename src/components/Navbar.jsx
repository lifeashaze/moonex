import { useState } from 'react';
import { PrimaryButton } from './Buttons';

const NAV_ITEMS = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Roadmap' },
  { href: '#', label: 'FAQs' },
  { href: '#', label: 'Contact Us' },
];

// eslint-disable-next-line react/prop-types
const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="text-white hover:text-gray-300 transition-colors"
  >
    {label}
  </a>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="min-h-[10vh] px-4 md:px-8 pt-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 md:h-12 w-auto transition-transform duration-300 hover:scale-105" />
          <img src="/logo-text.png" alt="Logo" className="h-6 md:h-8 w-auto transition-transform duration-300 hover:scale-105" />
        </div>

        {/* Hamburger Menu with smooth rotation */}
        <button 
          className="md:hidden text-white transition-transform duration-300 hover:scale-105"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
                className="transition-opacity duration-300" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
                className="transition-opacity duration-300" 
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.href} 
              {...item} 
              className="transition-all duration-300 hover:scale-105" 
            />
          ))}
        </div>

        {/* Desktop Connect Wallet button */}
        <div className="hidden md:block transition-transform duration-300 hover:scale-105">
          <PrimaryButton onClick={() => console.log('Connect wallet clicked')}>
            Connect Wallet
          </PrimaryButton>
        </div>
      </div>

      {/* Mobile Menu with slide and fade animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-[400px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-4 pb-4 space-y-4">
          {NAV_ITEMS.map((item, index) => (
            <div 
              key={item.href} 
              className="px-2 transform transition-all duration-300"
              style={{
                transitionDelay: `${index * 50}ms`,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
              }}
            >
              <NavLink {...item} />
            </div>
          ))}
          <div 
            className="px-2 pt-4 transform transition-all duration-300"
            style={{
              transitionDelay: `${NAV_ITEMS.length * 50}ms`,
              transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
            }}
          >
            <PrimaryButton 
              onClick={() => console.log('Connect wallet clicked')} 
              className="w-full"
            >
              Connect Wallet
            </PrimaryButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;