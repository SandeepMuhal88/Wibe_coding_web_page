import { Link } from 'react-router-dom';
import './Home.css';

/* ── Service Icons ── */
const services = [
    {
        icon: '⚡',
        title: 'Electrician',
        desc: 'Wiring, short circuit fix, fan/light installation aur har electrical kaam.',
        color: '#FACC15',
        link: '/services',
    },
    {
        icon: '❄️',
        title: 'AC Service',
        desc: 'AC cleaning, gas refill, repair aur installation — sab kuch ek jagah.',
        color: '#00D4FF',
        link: '/services',
    },
    {
        icon: '🔧',
        title: 'Mechanic',
        desc: 'Machine, motor, pump repair — expert mistri apke ghar pe.',
        color: '#A78BFA',
        link: '/services',
    },
    {
        icon: '🚗',
        title: 'Car Service',
        desc: 'Oil change, tyre, brake check — doorstep car service.',
        color: '#34D399',
        link: '/services',
    },
];

const stats = [
    { value: '10,000+', label: 'Happy Customers' },
    { value: '500+', label: 'Expert Mistriyan' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '24/7', label: 'Service Available' },
];

const testimonials = [
    {
        name: 'Rahul Sharma',
        city: 'Bikaner',
        rating: 5,
        text: 'Bahut accha service tha! AC wallah bhai ne 30 min mein sab theek kar diya. Bahut professional the.',
        avatar: 'RS',
        avatarColor: '#FF6B35',
    },
    {
        name: 'Priya Verma',
        city: 'JNV College Bikaner',
        rating: 5,
        text: 'MistriJi app se booking kar ke ek ghante mein electrician aa gaya. Kaam bhi seedha ho gaya. Highly recommended!',
        avatar: 'PV',
        avatarColor: '#00D4FF',
    },
    {
        name: 'Amit Kumar',
        city: 'JNV College Bikaner',
        rating: 5,
        text: 'Very affordable aur trusted service. Mechanic ne bike ki problem pehli baar mein pakad li. Zabardast!',
        avatar: 'AK',
        avatarColor: '#A78BFA',
    },
];

const Home = () => {
    return (
        <main className="home">
            {/* ── Hero ── */}
            <section className="hero">
                {/* Blobs */}
                <div className="hero-blob blob-1" />
                <div className="hero-blob blob-2" />
                <div className="hero-blob blob-3" />

                <div className="container hero-inner">
                    <div className="hero-content">
                        <span className="badge animate-fadeInUp">🏆 India's #1 Home Service App</span>

                        <h1 className="hero-title animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                            Ghar Baithe Bulao<br />
                            <span className="gradient-text">Expert Technicians</span>
                        </h1>

                        <p className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            AC service 🆑, Electrician ⚡, Mechanic 🔧 — sab ek <strong>MistriJi</strong> pe.<br />
                            Verified professionals, guaranteed work, fair price.
                        </p>

                        <div className="hero-actions animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                            <Link to="/booking" className="btn btn-primary hero-btn-main">
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                Abhi Book Karo
                            </Link>
                            <Link to="/services" className="btn btn-outline">
                                Sabhi Services Dekho →
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="hero-trust animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                            <div className="trust-item">
                                <span className="trust-icon">✅</span>
                                <span>Verified Experts</span>
                            </div>
                            <div className="trust-item">
                                <span className="trust-icon">💰</span>
                                <span>Fair Pricing</span>
                            </div>
                            <div className="trust-item">
                                <span className="trust-icon">⚡</span>
                                <span>Quick Response</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="hero-visual animate-float">
                        <div className="hero-card-main glass-card">
                            <div className="hero-card-header">
                                <div className="hero-avatar">👷</div>
                                <div>
                                    <div className="hero-name">Sohil Khan </div>
                                    <div className="hero-role">AC Technician • 6 yrs exp</div>
                                </div>
                                <div className="hero-rating">⭐ 4.9</div>
                            </div>
                            <div className="hero-card-status">
                                <span className="status-dot live"></span>
                                <span>Available Now — ETA 25 min</span>

                            </div>
                            <div className="hero-card-services">
                                <span className="service-chip">❄️ AC Repair</span>
                                <span className="service-chip">🔧 Installation</span>
                                <span className="service-chip">💨 Cleaning</span>
                                <span className="service-chip">Visit Chargeable ₹100</span>
                            </div>
                        </div>

                        {/* Floating mini cards */}
                        <div className="mini-card mc-1 glass-card">
                            <span>⚡</span>
                            <div>
                                <div className="mini-title">Electrician</div>
                                <div className="mini-sub">3 available nearby</div>
                            </div>
                        </div>
                        <div className="mini-card mc-2 glass-card">
                            <span>🛡️</span>
                            <div>
                                <div className="mini-title">Verified & Safe</div>
                                <div className="mini-sub">Background checked</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll chevron */}
                <div className="scroll-hint">
                    <span>Scroll</span>
                    <div className="scroll-arrow">↓</div>
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((s, i) => (
                            <div key={i} className="stat-card glass-card">
                                <div className="stat-value gradient-text">{s.value}</div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Services Preview ── */}
            <section className="section services-preview">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">🛠️ What We Offer</span>
                        <h2>Popular <span className="gradient-text">Services</span></h2>
                        <p>Ghar ke har kaam ke liye trained professionals – ek call par available.</p>
                    </div>

                    <div className="services-grid">
                        {services.map((s, i) => (
                            <Link key={i} to={s.link} className="service-card glass-card" style={{ '--accent-color': s.color }}>
                                <div className="service-card-icon" style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                                    <span>{s.icon}</span>
                                </div>
                                <h3 className="service-card-title">{s.title}</h3>
                                <p className="service-card-desc">{s.desc}</p>
                                <div className="service-card-cta" style={{ color: s.color }}>
                                    Book Now →
                                </div>
                                <div className="service-card-glow" style={{ background: `${s.color}10` }}></div>
                            </Link>
                        ))}
                    </div>

                    <div className="services-more-link">
                        <Link to="/services" className="btn btn-outline">
                            View All Services →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="section how-it-works">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">📱 Process</span>
                        <h2>Kitna Aasaan Hai <span className="gradient-text">Booking</span></h2>
                        <p>Sirf 3 steps mein apka expert mistri apke darwaaze par.</p>
                    </div>

                    <div className="steps-container">
                        <div className="step-connector"></div>
                        {[
                            { num: '01', icon: '📱', title: 'Service Chuno', desc: 'Apni zaroorat ki service select karo — AC, Electrician, Mechanic ya aur koi.' },
                            { num: '02', icon: '📅', title: 'Time Book Karo', desc: 'Apni suvidha ka time aur address fill karo. Booking 2 minute mein.' },
                            { num: '03', icon: '🏠', title: 'Expert Aayega', desc: 'Verified mistri apke ghar aa k professionally kaam karega. Guaranteed quality.' },
                        ].map((step, i) => (
                            <div key={i} className="step-card glass-card">
                                <div className="step-num">{step.num}</div>
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section className="section testimonials">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">💬 Reviews</span>
                        <h2>Log Kya Kehte Hain <span className="gradient-text">MistriJi</span> Ke Baare Mein</h2>
                    </div>

                    <div className="grid-3">
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card glass-card">
                                <div className="stars">
                                    {'⭐'.repeat(t.rating)}
                                </div>
                                <p className="testimonial-text">"{t.text}"</p>
                                <div className="testimonial-user">
                                    <div className="user-avatar" style={{ background: `${t.avatarColor}20`, color: t.avatarColor, border: `1px solid ${t.avatarColor}40` }}>
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <div className="user-name">{t.name}</div>
                                        <div className="user-city">📍 {t.city}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box glass-card">
                        <div className="cta-blobs">
                            <div className="cta-blob-1"></div>
                            <div className="cta-blob-2"></div>
                        </div>
                        <div className="cta-content">
                            <h2>Aaj Hi Book Karo,<br /><span className="gradient-text">Ghar Baithe Service Pao</span></h2>
                            <p>Har service pe satisfaction guarantee — ya paisa wapas!</p>
                            <div className="cta-actions">
                                <Link to="/booking" className="btn btn-primary">
                                    📞 Abhi Book Karo
                                </Link>
                                <a href="tel:+919511582964" className="btn btn-outline">
                                    Call: +91 9511582964
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
