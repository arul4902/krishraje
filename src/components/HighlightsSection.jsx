import React, { useState } from 'react';
import { Calendar, Users, Crown, Heart, Smile, Scissors, Sparkles, X, ExternalLink } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { INSTAGRAM_HIGHLIGHTS, BUSINESS_INFO } from '../data/content';

export default function HighlightsSection() {
  const [activeHighlight, setActiveHighlight] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Calendar': return <Calendar size={22} />;
      case 'Users': return <Users size={22} />;
      case 'Crown': return <Crown size={22} />;
      case 'Heart': return <Heart size={22} />;
      case 'Smile': return <Smile size={22} />;
      case 'Scissors': return <Scissors size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  const highlightContentMap = {
    "Sep 2026 event": {
      image: "/images/hero_bride.jpg",
      text: "Live updates from grand Muhurtham celebrations in Trichy. Flawless sweat-proof HD finish under sacred homam."
    },
    "Aug 2026 event": {
      image: "/images/reception_glam.jpg",
      text: "August wedding season highlights. Evening reception bridal glow and contemporary cascading waves."
    },
    "Family": {
      image: "/images/family_makeover.jpg",
      text: "Bridal party, mothers, and sisters party makeovers with silk saree pleating and coordinated styling."
    },
    "Jewellery set": {
      image: "/images/jewellery_set.jpg",
      text: "Curated matte temple jewellery collections, Lakshmi kasu malai, jhumkas, and oddiyanam sets for rent."
    },
    "Makeup client": {
      image: "/images/valaikappu_look.jpg",
      text: "Happy client smiles in natural daylight! Seemantham and wedding testimonials from Tamil Nadu brides."
    },
    "Makeup Free": {
      image: "/images/before_look.jpg",
      text: "Skin prep masterclass, hydration prep, and honest behind-the-scenes transformations."
    },
    "Saree folding": {
      image: "/images/saree_prepleating.jpg",
      text: "Razor-sharp steam ironed saree pre-pleating and box folding demos for 5-minute wedding draping."
    }
  };

  return (
    <section id="highlights" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <InstagramIcon size={14} />
            <span>Direct from Instagram</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gold-gradient">Story Highlights</span>
          </h2>
          <div className="gold-divider">
            <span className="gold-divider-diamond" />
          </div>
          <p className="section-desc">
            Explore the verified story highlights from <strong>{BUSINESS_INFO.instagramHandle}</strong>.
            Click each circle to view curated event moments, real client feedback, and saree folding clips.
          </p>
        </div>

        {/* Highlights Horizontal Scroll Track */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '1.75rem',
            overflowX: 'auto',
            padding: '1rem 0.5rem 2rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {INSTAGRAM_HIGHLIGHTS.map((hl) => (
            <div
              key={hl.name}
              onClick={() => setActiveHighlight(hl)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.6rem',
                cursor: 'pointer',
                flexShrink: 0,
                width: '95px',
                textAlign: 'center'
              }}
            >
              {/* Highlight Circle Ring */}
              <div
                style={{
                  position: 'relative',
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  padding: '3px',
                  background: 'linear-gradient(45deg, #F09433, #E6683C, #DC2743, #CC2366, #BC1888, #D4AF37)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.25s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'var(--bg-surface)',
                    border: '2px solid #0F0407',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)'
                  }}
                >
                  {getIcon(hl.icon)}
                </div>
              </div>

              {/* Title & Category */}
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '90px'
                }}
              >
                {hl.name}
              </span>
              <span style={{ fontSize: '0.68rem', color: 'var(--gold-light)' }}>
                {hl.count}
              </span>
            </div>
          ))}
        </div>

        {/* Highlight Preview Modal */}
        {activeHighlight && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(5, 2, 3, 0.94)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              animation: 'fadeIn 0.2s ease'
            }}
            onClick={() => setActiveHighlight(null)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '420px',
                width: '100%',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-gold-bright)',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveHighlight(null)}
                aria-label="Close Highlight"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 20,
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(15, 4, 7, 0.85)',
                  border: '1px solid var(--border-gold)',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={18} />
              </button>

              {/* Highlight Image Preview */}
              <div style={{ width: '100%', aspectRatio: '9 / 12', position: 'relative', background: '#000' }}>
                <img
                  src={highlightContentMap[activeHighlight.name]?.image || '/images/hero_bride.jpg'}
                  alt={activeHighlight.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(15, 4, 7, 0.75)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  <InstagramIcon size={14} color="var(--gold-primary)" />
                  <span style={{ fontSize: '0.74rem', color: '#FFFFFF', fontWeight: 600 }}>
                    {activeHighlight.name}
                  </span>
                </div>
              </div>

              {/* Highlight Info & Direct Instagram Link */}
              <div style={{ padding: '1.25rem' }}>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {highlightContentMap[activeHighlight.name]?.text}
                </p>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <InstagramIcon size={16} />
                  View Original Story on @krishraje1998
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
