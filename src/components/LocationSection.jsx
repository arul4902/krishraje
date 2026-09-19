import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock, ShieldCheck, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function LocationSection({ onOpenBooking }) {
  return (
    <section id="location" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Location & Travel Info */}
          <div>
            <div className="section-tag">
              <MapPin size={14} />
              <span>Service Area & Mandapam Travel</span>
            </div>

            <h2 className="section-title">
              Serving <span className="text-gold-gradient">Trichy, Manachanallur</span> & Beyond
            </h2>

            <div className="gold-divider" style={{ justifyContent: 'flex-start' }}>
              <span className="gold-divider-diamond" />
            </div>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '1.75rem'
              }}
            >
              Based in <strong>Manachanallur, Trichy</strong>, Raje AR and our styling team travel directly
              to your wedding mandapam, bridal suite, hotel, or home anywhere in Tiruchirappalli and
              neighboring districts across Tamil Nadu.
            </p>

            {/* Service Area Badges */}
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.75rem' }}>
                Key Coverage Locations
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {BUSINESS_INFO.serviceAreas.map((loc) => (
                  <span
                    key={loc}
                    style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid var(--border-gold)',
                      color: 'var(--text-primary)',
                      fontSize: '0.82rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <Check size={12} color="var(--gold-primary)" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Mandapam Early Arrival Promise */}
            <div
              style={{
                background: 'rgba(26, 7, 14, 0.7)',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <Clock size={18} color="var(--gold-primary)" />
                <strong style={{ fontSize: '0.94rem', color: 'var(--gold-light)' }}>
                  Early Morning Muhurtham Commitment
                </strong>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                We understand auspicious Muhurtham timings (Brahma Muhurtham 4:00 AM – 6:00 AM). Our team arrives
                punctually at your venue equipped with full HD studio ring lights, sanitized makeup kits, and
                saree pleaters.
              </p>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.6rem' }}
              >
                <Phone size={16} color="var(--gold-primary)" />
                Call {BUSINESS_INFO.phoneFormatted}
              </a>
              <button
                onClick={onOpenBooking}
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.6rem' }}
              >
                Check Mandapam Slot
              </button>
            </div>
          </div>

          {/* Right Column: Stylized Visual Map Card */}
          <div
            className="luxury-card"
            style={{
              padding: '2rem',
              background: 'linear-gradient(145deg, #1C050B 0%, #120306 100%)',
              border: '1px solid var(--border-gold)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--gold-gradient)',
                  color: '#140609',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Navigation size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                  Trichy Makeup Studio & Mandapam Travel
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--gold-light)' }}>
                  Manachanallur • Tiruchirappalli 621005
                </span>
              </div>
            </div>

            {/* Visual Studio Representation */}
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                aspectRatio: '16 / 10',
                marginBottom: '1.5rem',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                position: 'relative'
              }}
            >
              <img
                src="/images/valaikappu_look.jpg"
                alt="Trichy Makeup Studio & Client Makeover"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 4, 7, 0.9) 0%, rgba(15, 4, 7, 0.2) 60%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem'
                }}
              >
                <span style={{ fontSize: '0.82rem', color: '#FFFFFF', fontWeight: 600 }}>
                  📍 On-Location Bridal Service Across Central Tamil Nadu
                </span>
              </div>
            </div>

            {/* Key Quick Facts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Artist & Lead Stylist</span>
                <strong style={{ color: 'var(--text-primary)' }}>Raje AR</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Certified By</span>
                <strong style={{ color: 'var(--gold-light)' }}>ISO & Central Govt</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Booking WhatsApp</span>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`} style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>
                  +91 73588 53560
                </a>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Official Instagram</span>
                <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-primary)', textDecoration: 'none', fontWeight: 600 }}>
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
