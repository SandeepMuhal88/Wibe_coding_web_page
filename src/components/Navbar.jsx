import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/services', label: 'Services' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-inner">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M14 2L3 9V26H11V18H17V26H25V9L14 2Z" fill="url(#logoGrad)" />
                            <circle cx="14" cy="13" r="3" fill="white" opacity="0.9" />
                            <defs>
                                <linearGradient id="logoGrad" x1="3" y1="2" x2="25" y2="26" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#cf4817ff" />
                                    <stop offset="1" stopColor="#b04c16ff" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="logo-text">
                        <span>Mistri</span>Ji
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="navbar-links">
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="navbar-cta">
                    <Link to="/booking" className="btn btn-primary">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Book Now
                    </Link>

                    {/* Hamburger */}
                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`mobile-link ${location.pathname === link.to ? 'active' : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link to="/booking" className="btn btn-primary mobile-book-btn">
                    📞 Book a Service
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
