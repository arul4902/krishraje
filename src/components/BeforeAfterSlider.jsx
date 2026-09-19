import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MessageCircle, Sliders, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function BeforeAfterSlider({ onOpenBooking }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const positionPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(positionPercent);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleInteractionStart = () => {
    setIsDragging(true);
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="transformation" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Interactive Makeover Reveal</span>
          </div>
          <h2 className="section-title">
            The <span className="text-gold-gradient">HD Bridal Transformation</span>
          </h2>
          <div className="gold-divider">
            <span className="gold-divider-diamond" />
          </div>
          <p className="section-desc">
            Drag the slider left and right to witness the transition from natural skin prep to
            flawless, mandap-tested South Indian Muhurtham bridal glow by <strong>Raje AR</strong>.
          </p>
        </div>

        {/* Interactive Comparison Card */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-gold)',
            borderRadius: '24px',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {/* Slider Container */}
          <div
            ref={containerRef}
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            onTouchMove={handleTouchMove}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: '16px',
              overflow: 'hidden',
              userSelect: 'none',
              cursor: 'ew-resize',
              background: '#0F0407'
            }}
          >
            {/* AFTER Image (Full background) */}
            <img
              src="/images/after_look.jpg"
              alt="After HD Bridal Makeover"
              loading="lazy"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none'
              }}
            />

            {/* BEFORE Image (Clipped overlay) */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: `${sliderPosition}%`,
                overflow: 'hidden',
                borderRight: '2px solid var(--gold-primary)',
                boxShadow: '2px 0 15px rgba(0,0,0,0.6)'
              }}
            >
              <img
                src="/images/before_look.jpg"
                alt="Before Bridal Makeover"
                loading="lazy"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%',
                  maxWidth: 'none',
                  objectFit: 'cover',
                  pointerEvents: 'none'
                }}
              />

              {/* "BEFORE" Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(15, 4, 7, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'var(--text-secondary)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(8px)'
                }}
              >
                Natural Prep
              </div>
            </div>

            {/* "AFTER" Badge */}
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(148, 23, 46, 0.88)',
                border: '1px solid var(--border-gold-bright)',
                color: 'var(--gold-light)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              ✨ HD Muhurtham Glow
            </div>

            {/* Draggable Divider Handle */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `${sliderPosition}%`,
                transform: 'translate(-50%, -50%)',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'var(--gold-gradient)',
                border: '2px solid #FFFFFF',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.75)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#140609',
                pointerEvents: 'none',
                zIndex: 30
              }}
            >
              <Sliders size={20} />
            </div>
          </div>

          {/* Accessible Range Input for Mobile & Keyboard Users */}
          <div style={{ marginTop: '1.25rem', padding: '0 0.5rem' }}>
            <label
              htmlFor="transformation-range"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                marginBottom: '0.5rem'
              }}
            >
              <span>← Slide to view Natural Skin</span>
              <span>Slide to view Bridal Finish →</span>
            </label>
            <input
              id="transformation-range"
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Makeover comparison slider"
              style={{
                width: '100%',
                accentColor: 'var(--gold-primary)',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Key Techniques Callout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
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
                <Check size={14} />
              </div>
              <div>
                <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)', display: 'block' }}>
                  Custom Skin Tone Match
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Never ashy or cakey; formulated for South Indian warm undertones.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
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
                <Check size={14} />
              </div>
              <div>
                <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)', display: 'block' }}>
                  14+ Hours Longevity
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Stays radiant through humid hall temperatures and sacred homam smoke.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
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
                <Check size={14} />
              </div>
              <div>
                <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)', display: 'block' }}>
                  ISO Certified Hygiene
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Sterilized brushes, disposable wands, and sanitization protocols.
                </span>
              </div>
            </div>
          </div>

          {/* Transformation CTA */}
          <div
            style={{
              marginTop: '1.75rem',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.8rem' }}
            >
              <Sparkles size={16} />
              Book Your Bridal Transformation
            </button>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Raje%20AR!%20I%20saw%20your%20HD%20Bridal%20Transformation%20slider%20and%20want%20to%20enquire%20for%20my%20wedding.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.85rem 1.6rem' }}
            >
              <MessageCircle size={16} />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
