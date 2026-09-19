import React from 'react';
import { Star, ShieldCheck, Heart, Award, CheckCircle2, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function Testimonials({ onOpenBooking }) {
  const reviews = [
    {
      name: "Divya Sundaram",
      role: "Muhurtham Bride, Srirangam",
      text: "Raje akka made my dream Muhurtham look come true! The HD makeup was completely sweat-proof even with the hot homam fire. The saree pre-pleating saved us so much time at 5 AM. Truly the best bridal makeup artist in Trichy!",
      rating: 5,
      date: "August 2026 Wedding"
    },
    {
      name: "Sneha & Ananya",
      role: "Valaikappu Ceremony, Manachanallur",
      text: "Booked Raje AR for my Valaikappu function. She used such gentle, natural cosmetics that felt so light on my skin. Everyone praised the natural pregnancy glow and traditional glass bangles styling!",
      rating: 5,
      date: "September 2026 Event"
    },
    {
      name: "Kavitha Rajan",
      role: "Reception Bride & Sister",
      text: "The eye makeup and hair waves for my evening reception looked so modern and high-fashion! They also draped sarees for my mother and sister so neatly. Clean brushes, friendly nature, and punctual arrival.",
      rating: 5,
      date: "July 2026 Reception"
    }
  ];

  return (
    <section id="reviews" style={{ background: 'var(--bg-tertiary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Heart size={14} />
            <span>Client Praise & Stories</span>
          </div>
          <h2 className="section-title">
            Loved by <span className="text-gold-gradient">Brides Across Tamil Nadu</span>
          </h2>
          <div className="gold-divider">
            <span className="gold-divider-diamond" />
          </div>
          <p className="section-desc">
            Read real experiences from brides and families in Trichy, Manachanallur, and Srirangam
            who trusted <strong>Raje AR</strong> for their most auspicious milestones.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem'
          }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="luxury-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem'
              }}
            >
              <div>
                {/* 5 Stars */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--gold-primary)" color="var(--gold-primary)" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                    fontStyle: 'italic'
                  }}
                >
                  "{rev.text}"
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block' }}>
                    {rev.name}
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--gold-light)' }}>
                    {rev.role}
                  </span>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ISO & Govt Certification Callout Bar */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(26, 7, 14, 0.95), rgba(45, 11, 18, 0.95))',
            border: '1px solid var(--gold-primary)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center',
            boxShadow: 'var(--shadow-gold)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'var(--gold-gradient)',
                color: '#140609',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Award size={26} />
            </div>
            <div>
              <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)', display: 'block' }}>
                ISO Certified Makeup Artist
              </strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>
                International standards for cosmetics & hygiene
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'var(--gold-gradient)',
                color: '#140609',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <ShieldCheck size={26} />
            </div>
            <div>
              <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)', display: 'block' }}>
                Central Govt Certified
              </strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>
                Government accredited professional credentials
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Book With Raje AR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
