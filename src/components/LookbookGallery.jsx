import React, { useState } from 'react';
import { Sparkles, Eye, X, MessageCircle, ArrowRight, Tag } from 'lucide-react';
import { LOOKBOOK_ITEMS, BUSINESS_INFO } from '../data/content';

export default function LookbookGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All', 'Muhurtham', 'Reception', 'Valaikappu', 'Saree Pre-Pleating', 'Jewellery', 'Mehndi', 'Family'];

  const filteredItems = activeCategory === 'All'
    ? LOOKBOOK_ITEMS
    : LOOKBOOK_ITEMS.filter((item) => item.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="lookbook" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Curated Bridal Portfolio</span>
          </div>
          <h2 className="section-title">
            The <span className="text-gold-gradient">Bridal Lookbook</span>
          </h2>
          <div className="gold-divider">
            <span className="gold-divider-diamond" />
          </div>
          <p className="section-desc">
            Explore authentic transformations and signature stylings from our Trichy makeup studio.
            Click any photo to explore styling details and book the exact look.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                background: activeCategory === cat ? 'var(--gold-gradient)' : 'rgba(26, 7, 14, 0.7)',
                color: activeCategory === cat ? '#140609' : 'var(--text-secondary)',
                border: activeCategory === cat ? '1px solid var(--gold-primary)' : '1px solid var(--border-gold)',
                boxShadow: activeCategory === cat ? 'var(--shadow-gold)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                aspectRatio: '4 / 3.4',
                cursor: 'pointer',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-gold)',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-gold)';
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s ease'
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 4, 7, 0.95) 0%, rgba(15, 4, 7, 0.3) 50%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span
                    style={{
                      background: 'rgba(212, 175, 55, 0.2)',
                      border: '1px solid var(--border-gold)',
                      color: 'var(--gold-light)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.65rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {item.tag}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Eye size={15} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.25 }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(8, 2, 4, 0.92)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              animation: 'fadeIn 0.2s ease'
            }}
            onClick={() => setSelectedItem(null)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '750px',
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
                onClick={() => setSelectedItem(null)}
                aria-label="Close Lightbox"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 10,
                  width: '38px',
                  height: '38px',
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
                <X size={20} />
              </button>

              {/* Large Image Frame */}
              <div style={{ width: '100%', aspectRatio: '16 / 11', background: '#000000' }}>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Modal Details */}
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <span
                    style={{
                      background: 'rgba(212, 175, 55, 0.15)',
                      color: 'var(--gold-light)',
                      border: '1px solid var(--border-gold)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {selectedItem.tag}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    By Raje AR • Trichy_AR Makeup
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                  {selectedItem.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {selectedItem.details}
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Raje%20AR!%20I%20saw%20this%20look%20in%20your%20website%20lookbook:%20*${encodeURIComponent(selectedItem.title)}*.%20Is%20this%20styling%20available%20for%20my%20wedding%20date?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: '0.8rem 1.6rem' }}
                  >
                    <MessageCircle size={16} />
                    Book This Exact Look on WhatsApp
                  </a>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="btn btn-secondary"
                    style={{ padding: '0.8rem 1.4rem' }}
                  >
                    Back to Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
