import React from 'react';
import { Phone, MessageCircle, MapPin, Award, Heart, Sparkles, ArrowUp } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BUSINESS_INFO } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#080204',
        borderTop: '1px solid var(--border-gold)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Brand & Credentials */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/favicon.svg"
                alt="Trichy AR Logo"
                style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1px solid var(--gold-primary)' }}
              />
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>
                  Trichy<span style={{ color: 'var(--gold-primary)' }}>_AR</span>
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Makeup Artists • Trichy
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Led by <strong>Raje AR</strong>. Certified bridal makeup artist providing long-lasting HD Muhurtham makeovers,
              Valaikappu styling, saree pre-pleating, and antique temple jewellery rental styling across Trichy and Central Tamil Nadu.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--gold-light)' }}>
              <Award size={15} color="var(--gold-primary)" />
              <span>ISO & Central Govt Certified</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a href="#hero" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>Home</a>
              <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>Bridal & Event Services</a>
              <a href="#transformation" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>HD Transformation Slider</a>
              <a href="#saree-pleating" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>Saree Pre-Pleating & Box Folding</a>
              <a href="#lookbook" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>Bridal Lookbook</a>
              <a href="#quote-builder" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>Instant WhatsApp Quote Builder</a>
              <a href="#faq" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>Frequently Asked Questions</a>
            </div>
          </div>

          {/* Column 3: Contact & Bookings */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
              Direct Booking & Inquiries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={16} color="var(--gold-primary)" />
                <a href={`tel:${BUSINESS_INFO.phone}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <MessageCircle size={16} color="#25D366" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}
                >
                  WhatsApp: +91 73588 53560
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <InstagramIcon size={16} color="var(--gold-primary)" />
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--gold-light)', textDecoration: 'none' }}
                >
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={16} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  Main Road, Manachanallur, Tiruchirappalli (Trichy), Tamil Nadu 621005
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Local Service Areas */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
              Local Service Areas
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              We travel on-location to marriage halls, mandapams, and resorts across:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <span
                  key={area}
                  style={{
                    fontSize: '0.74rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    color: 'var(--text-secondary)',
                    border: '1px solid rgba(212, 175, 55, 0.15)'
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
            <div style={{ marginTop: '1.25rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--gold-light)', fontWeight: 600 }}>
                Bridal Packages from ₹6,999 onwards
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.07)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Trichy_AR Makeup Artists (Raje AR). All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Handcrafted with</span>
            <Heart size={13} fill="#94172E" color="#94172E" />
            <span>for Tamil Nadu Brides</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid var(--border-gold)',
              color: 'var(--gold-light)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              fontSize: '0.78rem'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
