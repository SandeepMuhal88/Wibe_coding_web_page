import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = async e => {
        e.preventDefault();
        setSending(true);
        await new Promise(r => setTimeout(r, 1500));
        setSending(false);
        setSubmitted(true);
        setForm({ name: '', phone: '', email: '', message: '' });
    };

    const contactInfo = [
        { icon: '📞', title: 'Call Karo', detail: '+91 99999 99999', sub: 'Mon–Sun, 8 AM – 10 PM', href: 'tel:+919999999999' },
        { icon: '💬', title: 'WhatsApp', detail: '+91 99999 99999', sub: 'Instant Reply', href: 'https://wa.me/919999999999' },
        { icon: '✉️', title: 'Email Karo', detail: 'support@incall.in', sub: '24 hrs mein reply', href: 'mailto:support@incall.in' },
        { icon: '📍', title: 'Office', detail: 'Delhi NCR, India', sub: 'By appointment only', href: '#' },
    ];

    return (
        <main className="contact-page">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="page-hero-blob blob-a" />
                <div className="page-hero-blob blob-b" />
                <div className="container page-hero-inner">
                    <span className="badge">📞 Contact</span>
                    <h1>Humse <span className="gradient-text">Baat Karo</span></h1>
                    <p>Koi bhi sawaal, complaint ya suggestion — hum sunne ke liye hamesha ready hain.</p>
                </div>
            </section>

            <section className="section contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info-col">
                            <h2 className="contact-heading">
                                Contact <span className="gradient-text">Options</span>
                            </h2>
                            <p className="contact-subheading">
                                Hamse kisi bhi tarike se milao — hum hamesha available hain.
                            </p>

                            <div className="contact-cards">
                                {contactInfo.map((c, i) => (
                                    <a key={i} href={c.href} className="contact-info-card glass-card" target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                                        <div className="ci-icon">{c.icon}</div>
                                        <div className="ci-text">
                                            <div className="ci-title">{c.title}</div>
                                            <div className="ci-detail">{c.detail}</div>
                                            <div className="ci-sub">{c.sub}</div>
                                        </div>
                                        <div className="ci-arrow">→</div>
                                    </a>
                                ))}
                            </div>

                            {/* FAQ teaser */}
                            <div className="faq-teaser glass-card">
                                <div className="faq-icon">❓</div>
                                <div>
                                    <h4>Jo Sawaal Sabse Zyada Poochhe Jaate Hain</h4>
                                    <ul className="faq-list">
                                        <li>🔹 Kitne time mein expert aata hai?</li>
                                        <li>🔹 Charges kya hain?</li>
                                        <li>🔹 Kya warranty milti hai?</li>
                                        <li>🔹 Service cancel karein toh?</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-col">
                            <div className="contact-form-card glass-card">
                                {!submitted ? (
                                    <>
                                        <h3 className="form-card-title">📝 Message Bhejo</h3>
                                        <p className="form-card-sub">Hum 2 ghante ke andar reply karenge.</p>

                                        <form onSubmit={handleSubmit} className="contact-form">
                                            <div className="cf-group">
                                                <label>Aapka Naam *</label>
                                                <input type="text" name="name" required placeholder="Full name" value={form.name} onChange={handleChange} />
                                            </div>
                                            <div className="cf-row">
                                                <div className="cf-group">
                                                    <label>Mobile *</label>
                                                    <input type="tel" name="phone" required placeholder="9XXXXXXXXX" value={form.phone} onChange={handleChange} />
                                                </div>
                                                <div className="cf-group">
                                                    <label>Email</label>
                                                    <input type="email" name="email" placeholder="email@example.com" value={form.email} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="cf-group">
                                                <label>Aapka Message *</label>
                                                <textarea name="message" rows={5} required placeholder="Apni baat likho yahan..." value={form.message} onChange={handleChange} />
                                            </div>
                                            <button type="submit" className="btn btn-primary cf-submit" disabled={sending}>
                                                {sending ? '⏳ Sending...' : '🚀 Message Bhejo'}
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <div className="cf-success">
                                        <div className="cf-success-icon">🎉</div>
                                        <h3>Message Mil Gaya!</h3>
                                        <p>Shukriya! Hum 2 ghante mein aapse contact karenge.</p>
                                        <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Dobara Bhejo</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
