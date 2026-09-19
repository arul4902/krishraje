import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BUSINESS_INFO } from '../data/content';

export default function FloatingActions() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 1500,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.65rem',
        alignItems: 'center'
      }}
      role="region"
      aria-label="Quick contact actions"
    >
      {/* Instagram Button */}
      <a
        href={BUSINESS_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Instagram Profile @krishraje1998"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #F09433, #E6683C, #DC2743, #CC2366, #BC1888)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
          textDecoration: 'none',
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <InstagramIcon size={22} color="#FFFFFF" />
      </a>

      {/* Phone Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        aria-label={`Call ${BUSINESS_INFO.phoneFormatted}`}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2A0E1A, #140509)',
          border: '1px solid var(--gold-primary)',
          color: 'var(--gold-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(212, 175, 55, 0.35)',
          textDecoration: 'none',
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Phone size={21} />
      </a>

      {/* WhatsApp Primary Action Button with Pulse Effect */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Trichy_AR%20Makeup%20Artists!%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20check%20availability.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp +91 73588 53560"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 22px rgba(37, 211, 102, 0.5)',
          textDecoration: 'none',
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: 'whatsappFloat 3s ease-in-out infinite'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageCircle size={28} />
      </a>

      <style>{`
        @keyframes whatsappFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}
