import React from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BUSINESS_INFO } from '../data/content';

export default function InstagramFeed() {
  const posts = [
    {
      image: "/images/hero_bride.jpg",
      likes: "1.4k",
      caption: "Muhurtham elegance for our Trichy bride. Traditional red silk & fresh mallipoo veni.",
      tag: "#TrichyMakeupArtist"
    },
    {
      image: "/images/valaikappu_look.jpg",
      likes: "980",
      caption: "Auspicious Valaikappu glow in Manachanallur. Green silk & traditional glass bangles.",
      tag: "#Valaikappu"
    },
    {
      image: "/images/saree_prepleating.jpg",
      likes: "2.1k",
      caption: "Pre-pleated box folded silk sarees ready for 5-minute wedding morning draping.",
      tag: "#SareePrePleating"
    },
    {
      image: "/images/reception_glam.jpg",
      likes: "1.8k",
      caption: "Evening reception glam with soft dewy glass skin & Hollywood bridal waves.",
      tag: "#ReceptionGlam"
    },
    {
      image: "/images/jewellery_set.jpg",
      likes: "1.1k",
      caption: "Antique matte gold Lakshmi temple jewellery set coordinated for our Muhurtham bride.",
      tag: "#TempleJewellery"
    },
    {
      image: "/images/mehndi_art.jpg",
      likes: "1.6k",
      caption: "Intricate bridal henna peacock artistry. 100% natural organic herbal stain.",
      tag: "#BridalMehndi"
    }
  ];

  return (
    <section id="instagram-feed" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <InstagramIcon size={14} />
            <span>Social Community</span>
          </div>
          <h2 className="section-title">
            Follow Our Latest Work on <span className="text-gold-gradient">Instagram</span>
          </h2>
          <div className="gold-divider">
            <span className="gold-divider-diamond" />
          </div>
          <p className="section-desc">
            Stay connected with <strong>{BUSINESS_INFO.instagramHandle}</strong> for daily client reels,
            mandapam behind-the-scenes, saree folding tutorials, and bridal inspiration.
          </p>
          <div style={{ marginTop: '1.25rem' }}>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                borderColor: 'var(--border-gold-bright)',
                color: 'var(--gold-light)'
              }}
            >
              <InstagramIcon size={18} color="var(--gold-primary)" />
              <span>Follow {BUSINESS_INFO.instagramHandle}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Instagram Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {posts.map((post, idx) => (
            <a
              key={idx}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '1 / 1',
                textDecoration: 'none',
                color: '#FFFFFF',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-gold)',
                display: 'block'
              }}
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Instagram Hover Veil */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 4, 7, 0.9) 0%, rgba(15, 4, 7, 0.4) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.25rem'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <InstagramIcon size={20} color="var(--gold-primary)" />
                </div>

                <div>
                  <span style={{ fontSize: '0.74rem', color: 'var(--gold-light)', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                    {post.tag}
                  </span>
                  <p style={{ fontSize: '0.82rem', color: '#FFFFFF', lineHeight: 1.4, marginBottom: '0.6rem' }}>
                    {post.caption}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Heart size={14} fill="#E11D48" color="#E11D48" /> {post.likes}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MessageCircle size={14} /> Comment
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
