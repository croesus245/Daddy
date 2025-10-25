import { useState } from 'react';
import { FiCheck, FiAlertCircle } from 'react-icons/fi';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Honeypot check (spam protection)
    if (formData.honeypot) {
      setStatus({ type: 'error', message: 'Form validation failed' });
      setLoading(false);
      return;
    }

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields' });
      setLoading(false);
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)', maxWidth: '600px' }}>
      <style>{`
        .contact-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .contact-form-label {
          font-size: var(--font-sm);
          font-weight: 600;
          color: var(--brand-gold);
        }
        
        .contact-form-input,
        .contact-form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: var(--font-base);
          transition: all var(--transition-base);
          font-family: inherit;
        }
        
        .contact-form-input:focus,
        .contact-form-textarea:focus {
          outline: none;
          border-color: var(--brand-gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }
        
        .contact-form-input:disabled,
        .contact-form-textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .contact-form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .contact-form-status {
          padding: 1rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: var(--font-base);
        }
        
        .contact-form-status.success {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        
        .contact-form-status.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        
        .contact-form-submit {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: var(--brand-gold);
          color: var(--brand-black);
          border: none;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: var(--font-base);
          cursor: pointer;
          transition: all var(--transition-base);
        }
        
        .contact-form-submit:hover:not(:disabled) {
          background: #e8c547;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(212, 175, 55, 0.25);
        }
        
        .contact-form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .contact-form-privacy {
          font-size: var(--font-xs);
          color: var(--color-text-muted);
          text-align: center;
        }
        
        .contact-form-required {
          color: #ef4444;
        }
      `}</style>

      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Status Message */}
      {status.message && (
        <div
          className={`contact-form-status ${status.type}`}
          role="alert"
        >
          {status.type === 'success' ? (
            <FiCheck className="w-5 h-5 flex-shrink-0" />
          ) : (
            <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <p style={{ margin: 0 }}>{status.message}</p>
        </div>
      )}

      {/* Name Field */}
      <div className="contact-form-group">
        <label htmlFor="name" className="contact-form-label">
          Name <span className="contact-form-required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-form-input"
          placeholder="Your name"
          disabled={loading}
        />
      </div>

      {/* Email Field */}
      <div className="contact-form-group">
        <label htmlFor="email" className="contact-form-label">
          Email <span className="contact-form-required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-form-input"
          placeholder="your.email@example.com"
          disabled={loading}
        />
      </div>

      {/* Message Field */}
      <div className="contact-form-group">
        <label htmlFor="message" className="contact-form-label">
          Message <span className="contact-form-required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-form-textarea"
          placeholder="Your message..."
          disabled={loading}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="contact-form-submit"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      <p className="contact-form-privacy">
        I respect your privacy. Your message will only be used to respond to your inquiry.
      </p>
    </form>
  );
}
