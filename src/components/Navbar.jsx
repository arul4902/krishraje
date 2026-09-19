import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Award, Sparkles } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BUSINESS_INFO } from '../data/content';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Transformation', href: '#transformation' },
    { label: 'Saree Pleating', href: '#saree-pleating' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Quote Calculator', href: '#quote-builder' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.35s ease',
          backgroundColor: isScrolled ? 'rgba(15, 4, 7, 0.94)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
        }}
      >
        {/* Top Gold Utility Strip */}
        <div
          style={{
            background: 'linear-gradient(90deg, #1A070E 0%, #2D0B12 50%, #1A070E 100%)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
            padding: '0.35rem 1rem',
            fontSize: '0.76rem',
            color: 'var(--text-secondary)'
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  color: 'var(--gold-light)',
                  fontWeight: 600,
                  fontSize: '0.74rem'
                }}
              >
                <Award size={13} color="var(--gold-primary)" />
                ISO & Govt Certified Artist
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="desktop-nav"
                style={{
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.76rem'
                }}
              >
                <InstagramIcon size={13} color="var(--gold-primary)" />
                {BUSINESS_INFO.instagramHandle}
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  color: 'var(--gold-light)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.74rem'
                }}
              >
                <Phone size={12} color="var(--gold-primary)" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container" style={{ padding: '0.85rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <img
                src="/favicon.svg"
                alt="Trichy AR Logo"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid var(--gold-primary)',
                  boxShadow: '0 0 12px rgba(212, 175, 55, 0.3)'
                }}
              />
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: 'var(--text-primary)',
                    display: 'block',
                    lineHeight: 1.15
                  }}
                >
                  Trichy<span style={{ color: 'var(--gold-primary)' }}>_AR</span>
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: 'var(--gold-light)',
                    display: 'block'
                  }}
                >
                  Makeup Artists • Trichy
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: 'none',
                gap: '1.4rem',
                alignItems: 'center'
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    transition: 'all 0.2s',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-nav">
              <button
                onClick={onOpenBooking}
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.86rem' }}
              >
                <Sparkles size={15} />
                Book Date
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                display: 'flex',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid var(--border-gold)',
                color: 'var(--gold-primary)',
                padding: '0.5rem',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer'
              }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Menu Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: 'rgba(15, 4, 7, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-gold)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {link.label}
                  <span style={{ color: 'var(--gold-primary)', fontSize: '0.8rem' }}>→</span>
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Sparkles size={16} />
                Check Date Availability
              </button>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Trichy_AR%20Makeup%20Artists!%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={16} />
                Instant WhatsApp Chat
              </a>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
