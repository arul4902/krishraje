import React, { useState, useEffect, useId } from 'react';
import { X, Sparkles, MessageCircle, Phone, Calendar, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, buildWhatsAppUrl, SERVICES } from '../data/content';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const modalServiceId = useId();
  const modalDateId = useId();
  const modalNameId = useId();
  const modalPhoneId = useId();
  const modalLocationId = useId();
  const modalNotesId = useId();

  const [service, setService] = useState(initialService || 'HD Bridal Muhurtham Makeover');
  const [eventDate, setEventDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Trichy');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#94172E', '#F5E5A4']
      });
    } catch (err) {
      // Ignore if canvas blocked
    }

    const waUrl = buildWhatsAppUrl({
      name,
      service,
      eventDate,
      location,
      message: `${notes ? notes + ' | ' : ''}Client Phone: ${phone || 'Provided in WhatsApp'}`
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close booking modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid var(--border-gold)',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.25rem', paddingRight: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--gold-light)',
              fontSize: '0.74rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.3rem'
            }}
          >
            <Sparkles size={13} color="var(--gold-primary)" />
            Direct Artist Enquiry
          </div>
          <h3 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.45rem)', color: 'var(--text-primary)', lineHeight: 1.3 }}>
            Check Date Availability
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.3rem', lineHeight: 1.45 }}>
            Connect with <strong>Raje AR</strong>. Packages from ₹6,999. Fast WhatsApp confirmation.
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor={modalServiceId} className="form-label">Service Type</label>
            <select
              id={modalServiceId}
              className="form-select"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} ({s.priceText})
                </option>
              ))}
            </select>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor={modalNameId} className="form-label">Your Name</label>
              <input
                id={modalNameId}
                type="text"
                className="form-input"
                placeholder="Bride / Client Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={modalPhoneId} className="form-label">Phone Number</label>
              <input
                id={modalPhoneId}
                type="tel"
                className="form-input"
                placeholder="e.g. 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor={modalDateId} className="form-label">Event Date</label>
              <input
                id={modalDateId}
                type="date"
                className="form-input"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={modalLocationId} className="form-label">Location / Mandapam</label>
              <input
                id={modalLocationId}
                type="text"
                className="form-input"
                placeholder="Trichy / Srirangam"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor={modalNotesId} className="form-label">Specific Request or Timing</label>
            <textarea
              id={modalNotesId}
              className="form-textarea"
              rows={2}
              placeholder="e.g. Early morning Muhurtham timing, saree pre-pleating"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Submit Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem' }}>
            <button
              type="submit"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem 1.25rem', fontSize: '0.92rem' }}
            >
              <MessageCircle size={18} />
              <span>Send Enquiry via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.8rem 1.25rem', fontSize: '0.88rem' }}
            >
              <Phone size={15} color="var(--gold-primary)" />
              <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
