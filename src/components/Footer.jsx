function Footer() {
  const navLinks = [
    { href: '/about', text: 'About Us' },
    { href: '/roadmap', text: 'Roadmap' },
    { href: '/faqs', text: 'FAQs' },
    { href: '/contact', text: 'Contact Us' },
  ];

  const socialLinks = [
    { href: '#', icon: '/Icons/Telegram.svg', alt: 'Telegram' },
    { href: '#', icon: '/Icons/Reddit.svg', alt: 'Reddit' },
    { href: '#', icon: '/Icons/Twitter.svg', alt: 'Twitter' },
  ];

  // eslint-disable-next-line react/prop-types
  const NavLink = ({ href, text }) => (
    <a href={href} className="text-white transition-all duration-300 hover:text-gray-300 hover:translate-y-[-2px]">
      {text}
    </a>
  );

  // eslint-disable-next-line react/prop-types
  const SocialLink = ({ href, icon, alt }) => (
    <a href={href} className="text-white transition-all duration-300 hover:text-gray-300 hover:scale-110">
      <img src={icon} alt={alt} className="h-6 w-6" />
    </a>
  );

  return (
    <footer className="bg-[#051422] py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          {/* Logo */}
          <div className="flex flex-col items-center animate-pulse-subtle">
            <img src="/logo.png" alt="Mooniex Logo" className="h-10 md:h-12" />
            <img src="/logo-text.png" alt="Mooniex" className="h-6 md:h-8 mt-2" />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          {/* Contact Section */}
          <div className="flex flex-col items-center gap-4 font-raleway font-bold text-xl md:text-2xl">
            <span className="text-white">
              Contact <span className="text-yellow-500">Us</span>
            </span>
            <div className="flex gap-6 md:gap-4">
              {socialLinks.map((link) => (
                <SocialLink key={link.alt} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
