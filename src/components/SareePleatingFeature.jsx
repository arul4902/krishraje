import React from 'react';
import { Scissors, Sparkles, CheckCircle2, Clock, PackageCheck, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function SareePleatingFeature({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      title: "Saree Handover & Measurement",
      desc: "Provide your Kanchipuram silk saree 2–3 days before the muhurtham. We take your exact height, waist, and pallu length preferences."
    },
    {
      num: "02",
      title: "Precision Steam-Pressing",
      desc: "Each pleat is meticulously aligned, ironed with temperature-controlled steam, and locked into place so it never shifts or slips."
    },
    {
      num: "03",
      title: "Luxury Box Packaging",
      desc: "Your pre-pleated saree is packed in a protective signature box with garment-safe pins, ready for transport directly to the mandapam."
    },
    {
      num: "04",
      title: "5-Minute Wedding Draping",
      desc: "On the wedding morning, avoid the stress of rush-draping. Slip into your pre-pleated saree effortlessly in under five minutes!"
    }
  ];

  return (
    <section id="saree-pleating" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Image Showcase */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                padding: '8px',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.4), rgba(148, 23, 46, 0.2))',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3.3',
                  background: 'var(--bg-secondary)'
                }}
              >
                <img
                  src="/images/saree_prepleating.jpg"
                  alt="Saree Pre-Pleating & Box Folding by Trichy_AR Makeup Artists"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Floating Highlight Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '20px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-gold-bright)',
                  padding: '0.85rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--gold-gradient)',
                    color: '#140609',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Clock size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                    Mandap Time Saver
                  </span>
                  <strong style={{ fontSize: '0.94rem', color: 'var(--text-primary)' }}>
                    Ready to wear in 5 Mins
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Process */}
          <div>
            <div className="section-tag">
              <Scissors size={14} />
              <span>Signature Draping Service</span>
            </div>

            <h2 className="section-title">
              Professional <span className="text-gold-gradient">Saree Pre-Pleating</span> & Box Folding
            </h2>

            <p
              style={{
                fontSize: '1.02rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}
            >
              Don’t let pleat readjustments delay your auspicious Muhurtham timing. Our ISO certified
              specialists pre-pleat and steam-press your heavy Kanchipuram silk sarees to millimeter
              perfection so you step onto the stage with unwavering confidence.
            </p>

            {/* 4 Steps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {steps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    background: 'rgba(26, 7, 14, 0.6)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--gold-primary)',
                      display: 'block',
                      marginBottom: '0.4rem'
                    }}
                  >
                    {step.num}
                  </span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Raje%20AR!%20I%20want%20to%20book%20Saree%20Pre-Pleating%20for%20my%20silk%20sarees.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.85rem 1.8rem' }}
              >
                <MessageCircle size={16} />
                Book Saree Pre-Pleating
              </a>
              <button
                onClick={onOpenBooking}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.6rem' }}
              >
                Inquire For Bulk Sarees
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
