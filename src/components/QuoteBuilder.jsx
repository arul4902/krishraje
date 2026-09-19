import React, { useState, useId } from 'react';
import { Calculator, Calendar, MapPin, Sparkles, MessageCircle, Check, Users, Scissors, Crown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/content';

export default function QuoteBuilder({ preSelectedService }) {
  const serviceSelectId = useId();
  const dateInputId = useId();
  const nameInputId = useId();
  const phoneInputId = useId();
  const locationInputId = useId();
  const guestCountId = useId();
  const sareeCountId = useId();
  const notesInputId = useId();

  const [service, setService] = useState(preSelectedService || 'HD Bridal Muhurtham Makeover');
  const [eventDate, setEventDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [location, setLocation] = useState('Trichy');
  const [familyCount, setFamilyCount] = useState(0);
  const [sareeCount, setSareeCount] = useState(1);
  const [includeJewellery, setIncludeJewellery] = useState(false);
  const [notes, setNotes] = useState('');

  // Base pricing map
  const serviceBasePrices = {
    'HD Bridal Muhurtham Makeover': 6999,
    'Evening Reception & Cocktail Glam': 7999,
    'Valaikappu / Baby Shower Makeover': 6999,
    'Engagement & Pre-Wedding Glam': 6499,
    'Saree Pre-Pleating & Box Folding Only': 500,
    'Bridal & Festive Mehndi Artistry': 3500
  };

  const currentBasePrice = serviceBasePrices[service] || 6999;
  const familyTotal = familyCount * 1800;
  const sareeTotal = service === 'Saree Pre-Pleating & Box Folding Only' ? sareeCount * 500 : Math.max(0, sareeCount - 1) * 450;
  const jewelleryTotal = includeJewellery ? 2200 : 0;
  const estimatedTotal = currentBasePrice + familyTotal + sareeTotal + jewelleryTotal;

  const handleSendToWhatsApp = (e) => {
    e.preventDefault();

    // Trigger celebratory gold and pink confetti
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#94172E', '#F5E5A4']
      });
    } catch (err) {
      // Ignore if canvas blocked
    }

    const waUrl = buildWhatsAppUrl({
      name: clientName,
      service: `${service} (Est. ₹${estimatedTotal.toLocaleString('en-IN')})`,
      eventDate: eventDate,
      location: location,
      guests: familyCount > 0 ? `${familyCount} guests` : null,
      sareeCount: sareeCount > 0 ? `${sareeCount} sarees` : null,
      message: `${notes ? notes + ' | ' : ''}${includeJewellery ? 'Interested in Jewellery Set Rental | ' : ''}Client Phone: ${clientPhone || 'Provided in WhatsApp'}`
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="quote-builder" style={{ background: 'var(--bg-tertiary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Calculator size={14} />
            <span>Instant Date & Price Estimation</span>
          </div>
          <h2 className="section-title">
            Check Date Availability & <span className="text-gold-gradient">Build Your Quote</span>
          </h2>
          <div className="gold-divider">
            <span className="gold-divider-diamond" />
          </div>
          <p className="section-desc">
            Plan your wedding or auspicious event in Trichy with 100% price transparency. Customize your
            package, calculate the estimate, and send it directly to Raje AR on WhatsApp.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-gold)',
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 4vw, 2.75rem)',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <form onSubmit={handleSendToWhatsApp}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem'
              }}
            >
              {/* Left Column: Form Inputs */}
              <div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--gold-light)',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Sparkles size={16} /> 1. Select Event Details
                </h3>

                {/* Service Selection */}
                <div className="form-group">
                  <label htmlFor={serviceSelectId} className="form-label">Primary Service</label>
                  <select
                    id={serviceSelectId}
                    className="form-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="HD Bridal Muhurtham Makeover">HD Bridal Muhurtham Makeover (From ₹6,999)</option>
                    <option value="Evening Reception & Cocktail Glam">Evening Reception & Cocktail Glam (From ₹7,999)</option>
                    <option value="Valaikappu / Baby Shower Makeover">Valaikappu / Baby Shower Makeover (From ₹6,999)</option>
                    <option value="Engagement & Pre-Wedding Glam">Engagement & Pre-Wedding Glam (From ₹6,499)</option>
                    <option value="Saree Pre-Pleating & Box Folding Only">Saree Pre-Pleating & Box Folding Only (₹500/saree)</option>
                    <option value="Bridal & Festive Mehndi Artistry">Bridal & Festive Mehndi Artistry (From ₹3,500)</option>
                  </select>
                </div>

                {/* Event Date */}
                <div className="form-group">
                  <label htmlFor={dateInputId} className="form-label">Auspicious Event Date</label>
                  <input
                    id={dateInputId}
                    type="date"
                    className="form-input"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                  />
                </div>

                {/* Your Name & Contact */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor={nameInputId} className="form-label">Your Name</label>
                    <input
                      id={nameInputId}
                      type="text"
                      className="form-input"
                      placeholder="e.g. Priya"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={phoneInputId} className="form-label">Phone Number</label>
                    <input
                      id={phoneInputId}
                      type="tel"
                      className="form-input"
                      placeholder="e.g. 98765 43210"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Venue / Location */}
                <div className="form-group">
                  <label htmlFor={locationInputId} className="form-label">Event Location / Mandapam</label>
                  <input
                    id={locationInputId}
                    type="text"
                    className="form-input"
                    placeholder="e.g. Srirangam / Manachanallur / Trichy Hall"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column: Customization & Add-ons */}
              <div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--gold-light)',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Crown size={16} /> 2. Add-Ons & Entourage
                </h3>

                {/* Family / Guest Makeovers */}
                <div className="form-group">
                  <label htmlFor={guestCountId} className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Family / Bridesmaid Makeovers</span>
                    <span style={{ color: 'var(--gold-primary)' }}>{familyCount} {familyCount === 1 ? 'person' : 'people'}</span>
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <input
                      id={guestCountId}
                      type="range"
                      min="0"
                      max="10"
                      value={familyCount}
                      onChange={(e) => setFamilyCount(Number(e.target.value))}
                      style={{ flexGrow: 1, accentColor: 'var(--gold-primary)' }}
                    />
                  </div>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {familyCount > 0 ? `+₹${(familyCount * 1800).toLocaleString('en-IN')} (Hair + Makeup + Saree Draping)` : 'Mother, sister, or bridal party members'}
                  </span>
                </div>

                {/* Saree Pre-Pleating Count */}
                <div className="form-group">
                  <label htmlFor={sareeCountId} className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Saree Pre-Pleating & Box Folding</span>
                    <span style={{ color: 'var(--gold-primary)' }}>{sareeCount} {sareeCount === 1 ? 'saree' : 'sarees'}</span>
                  </label>
                  <input
                    id={sareeCountId}
                    type="range"
                    min="1"
                    max="15"
                    value={sareeCount}
                    onChange={(e) => setSareeCount(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--gold-primary)' }}
                  />
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    Steam-ironed razor pleats delivered in luxury ready-to-wear boxes.
                  </span>
                </div>

                {/* Jewellery Set Rental Checkbox */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    background: 'rgba(15, 4, 7, 0.6)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.25rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => setIncludeJewellery(!includeJewellery)}
                >
                  <input
                    type="checkbox"
                    checked={includeJewellery}
                    onChange={(e) => setIncludeJewellery(e.target.checked)}
                    style={{ accentColor: 'var(--gold-primary)', width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <div>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                      Include Antique Temple Jewellery Set (+₹2,200)
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Kasu malai, grand jhumkas, maang tikka, & oddiyanam waist belt.
                    </span>
                  </div>
                </div>

                {/* Notes */}
                <div className="form-group">
                  <label htmlFor={notesInputId} className="form-label">Special Requests / Timings</label>
                  <input
                    id={notesInputId}
                    type="text"
                    className="form-input"
                    placeholder="e.g. Muhurtham timing is 6:00 AM, need early arrival"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Live Calculation Summary Banner */}
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(26, 7, 14, 0.95), rgba(45, 11, 18, 0.95))',
                border: '1px solid var(--gold-primary)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-gold)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-light)' }}>
                    Estimated Investment
                  </span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2.4rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)'
                      }}
                    >
                      ₹{estimatedTotal.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      (Includes HD makeup, styling & draping)
                    </span>
                  </div>
                </div>

                {/* WhatsApp Direct Submit CTA */}
                <button
                  type="submit"
                  className="btn btn-whatsapp"
                  style={{
                    padding: '0.95rem 2.2rem',
                    fontSize: '1rem',
                    boxShadow: '0 6px 24px rgba(37, 211, 102, 0.4)'
                  }}
                >
                  <MessageCircle size={19} />
                  Send to Raje AR on WhatsApp
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.78rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
                <Check size={14} color="var(--gold-primary)" />
                <span>
                  Exact date availability, mandapam distance, and trial slots will be directly confirmed on WhatsApp (+91 73588 53560).
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
