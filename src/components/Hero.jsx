import React from 'react';
import { Sparkles, Calendar, MessageCircle, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BUSINESS_INFO } from '../data/content';

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        background: 'radial-gradient(ellipse at 80% 20%, rgba(148, 23, 46, 0.28) 0%, rgba(26, 7, 14, 0.6) 45%, #0F0407 85%)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Gold Light Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(148, 23, 46, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Brand Copy & CTAs */}
          <div>
            {/* Certification & Recognition Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid var(--border-gold)',
                color: 'var(--gold-light)',
                fontSize: '0.84rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '1.4rem'
              }}
            >
              <Award size={16} color="var(--gold-primary)" />
              <span>ISO & Central Govt Certified Makeup Artist</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 5vw, 3.75rem)',
                lineHeight: 1.15,
                fontWeight: 800,
                marginBottom: '1.25rem',
                letterSpacing: '0.01em'
              }}
            >
              Timeless <span className="text-gold-gradient">Muhurtham Bridal</span> Artistry & HD Glow in Trichy
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '1.8rem',
                maxWidth: '560px'
              }}
            >
              Crafted by <strong style={{ color: 'var(--gold-light)' }}>Raje AR</strong>. Certified bridal excellence
              tailored for South Indian brides, auspicious Valaikappu ceremonies, precision saree pre-pleating, and
              traditional temple jewellery styling.
            </p>

            {/* Verified Starting Price Callout */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.85rem 1.25rem',
                background: 'rgba(26, 7, 14, 0.85)',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2.2rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--gold-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#140609',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  flexShrink: 0
                }}
              >
                ₹
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', display: 'block' }}>
                  Transparent Bridal Packages
                </span>
                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Starting from <span className="text-gold-gradient">₹6,999</span> onwards
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-action-buttons">
              <button
                onClick={onOpenBooking}
                className="btn btn-primary"
                style={{ padding: '0.95rem 1.8rem', fontSize: '0.96rem' }}
              >
                <Sparkles size={18} />
                <span>Check Date Availability</span>
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Trichy_AR%20Makeup%20Artists!%20I%20saw%20your%20website%20and%20would%20like%20to%20check%20availability%20for%20my%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.95rem 1.8rem', fontSize: '0.96rem' }}
              >
                <MessageCircle size={18} />
                WhatsApp Quote
              </a>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.95rem 1.5rem', fontSize: '0.92rem' }}
              >
                <InstagramIcon size={17} color="var(--gold-primary)" />
                {BUSINESS_INFO.instagramHandle}
              </a>
            </div>

            {/* Key Trust Checkmarks */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.75rem',
                borderTop: '1px solid rgba(212, 175, 55, 0.15)',
                paddingTop: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--gold-primary)" />
                <span>100% Mandap Sweat-Proof HD</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--gold-primary)" />
                <span>Luxury International Brands</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} color="var(--gold-primary)" />
                <span>On-Location Across Trichy & TN</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Frame */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                padding: '10px',
                background: 'linear-gradient(145deg, rgba(212, 175, 55, 0.45), rgba(148, 23, 46, 0.25), rgba(212, 175, 55, 0.1))',
                boxShadow: 'var(--shadow-gold)'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 4.8',
                  background: 'var(--bg-secondary)'
                }}
              >
                <img
                  src="/images/hero_bride.jpg"
                  alt="Traditional Tamil Muhurtham Bride by Trichy_AR Makeup Artists"
                  fetchPriority="high"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Ambient Image Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 4, 7, 0.85) 0%, rgba(15, 4, 7, 0.1) 40%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Overlaid Floating Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    background: 'rgba(26, 7, 14, 0.92)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.6rem'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block' }}>
                      Verified Artist
                    </span>
                    <span style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Raje AR • Trichy_AR
                    </span>
                  </div>
                  <div
                    style={{
                      background: 'rgba(37, 211, 102, 0.15)',
                      border: '1px solid rgba(37, 211, 102, 0.4)',
                      borderRadius: 'var(--radius-full)',
                      padding: '0.35rem 0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.76rem',
                      color: '#4ADE80',
                      fontWeight: 600
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: '#22c35e',
                        display: 'inline-block'
                      }}
                    />
                    Booking 2026-2027
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Ribbon / Badge */}
            <div className="hero-cert-badge">
              <Award size={16} />
              <span>ISO & Central Govt Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
