import React from 'react';
import { Sparkles, Check, MessageCircle, ChevronRight, ArrowUpRight } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/content';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Signature Expertise</span>
          </div>
          <h2 className="section-title">
            Our Certified <span className="text-gold-gradient">Bridal & Event Services</span>
          </h2>
          <div className="gold-divider">
            <span className="gold-divider-diamond" />
          </div>
          <p className="section-desc">
            Authentic South Indian artistry crafted with precision. From Muhurtham ceremonies and
            Valaikappu blessings to luxury saree pre-pleating and temple jewellery coordination.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2rem'
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="luxury-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                border: service.popular ? '1px solid var(--gold-primary)' : '1px solid var(--border-gold)',
                boxShadow: service.popular ? 'var(--shadow-gold)' : 'var(--shadow-md)'
              }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--gold-gradient)',
                    color: '#140609',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    zIndex: 10,
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  Most Requested
                </div>
              )}

              {/* Service Image Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 10',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)'
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(30, 10, 18, 0.95) 0%, rgba(30, 10, 18, 0.2) 60%, transparent 100%)'
                  }}
                />
                {/* Category Pill */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.85rem',
                    left: '1.25rem',
                    background: 'rgba(15, 4, 7, 0.85)',
                    border: '1px solid var(--border-gold)',
                    color: 'var(--gold-light)',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  {service.category}
                </div>
              </div>

              {/* Service Body Content */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}
              >
                <h3
                  style={{
                    fontSize: '1.28rem',
                    lineHeight: 1.3,
                    marginBottom: '0.6rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    marginBottom: '1.25rem'
                  }}
                >
                  {service.shortDesc}
                </p>

                {/* Pricing Banner */}
                <div
                  style={{
                    background: 'rgba(212, 175, 55, 0.08)',
                    borderLeft: '3px solid var(--gold-primary)',
                    padding: '0.6rem 0.9rem',
                    borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                    marginBottom: '1.4rem'
                  }}
                >
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Pricing
                  </span>
                  <span style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--gold-light)' }}>
                    {service.priceText}
                  </span>
                </div>

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.8rem', flexGrow: 1 }}>
                  {service.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'rgba(212, 175, 55, 0.15)',
                          color: 'var(--gold-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <Check size={11} />
                      </span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: 'auto' }}>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="btn btn-secondary"
                    style={{ padding: '0.65rem 0.8rem', fontSize: '0.84rem' }}
                  >
                    Check Date
                  </button>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Raje%20AR!%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(service.title)}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: '0.65rem 0.8rem', fontSize: '0.84rem' }}
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
