import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
    const { state: booking } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Create confetti effect
        const colors = ['#FF6B35', '#00D4FF', '#A78BFA', '#34D399', '#FACC15'];
        const confettiCount = 80;
        const container = document.getElementById('confetti-container');
        if (!container) return;

        for (let i = 0; i < confettiCount; i++) {
            const el = document.createElement('div');
            el.className = 'confetti-piece';
            el.style.cssText = `
        left: ${Math.random() * 100}%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay: ${Math.random() * 3}s;
        animation-duration: ${Math.random() * 2 + 2}s;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      `;
            container.appendChild(el);
        }

        return () => {
            while (container.firstChild) container.removeChild(container.firstChild);
        };
    }, []);

    if (!booking) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center', padding: 20 }}>
                <div style={{ fontSize: '4rem' }}>🤔</div>
                <h2>Koi Booking Nahi Mili</h2>
                <p style={{ color: 'var(--text-muted)' }}>Pehle ek service book karo.</p>
                <Link to="/booking" className="btn btn-primary">Book a Service →</Link>
            </div>
        );
    }

    const bookingId = `INC-${Date.now().toString(36).toUpperCase()}`;

    return (
        <main className="confirmation-page">
            <div id="confetti-container" className="confetti-container" />

            <div className="container">
                <div className="confirmation-card glass-card">
                    {/* Success Icon */}
                    <div className="success-icon-wrap">
                        <div className="success-ring-outer">
                            <div className="success-ring-inner">
                                <span className="success-checkmark">✓</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="confirm-title">Booking Confirmed! 🎉</h1>
                    <p className="confirm-subtitle">
                        Bhai, aapki booking successfully ho gayi! Hamara expert mistri aapke given time pe aa jayega.
                    </p>

                    {/* Booking ID */}
                    <div className="booking-id-chip">
                        <span>Booking ID:</span>
                        <strong className="gradient-text">{bookingId}</strong>
                    </div>

                    {/* Details */}
                    <div className="confirm-details glass-card">
                        <h3>📋 Booking Details</h3>
                        <div className="confirm-grid">
                            {[
                                { label: '👤 Customer', value: booking.name },
                                { label: '📞 Mobile', value: `+91 ${booking.phone}` },
                                { label: '🛠️ Service', value: booking.service },
                                { label: '📅 Date', value: booking.date },
                                { label: '⏰ Time Slot', value: booking.slot },
                                { label: '📍 Address', value: booking.address + (booking.pincode ? ` - ${booking.pincode}` : '') },
                            ].map((item, i) => (
                                <div key={i} className="confirm-row">
                                    <span className="confirm-label">{item.label}</span>
                                    <span className="confirm-value">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What's Next */}
                    <div className="whats-next">
                        <h3>📱 Aage Kya Hoga?</h3>
                        <div className="next-steps">
                            <div className="next-step">
                                <div className="next-num">1</div>
                                <p>Aapke mobile pe <strong>SMS confirmation</strong> aayega.</p>
                            </div>
                            <div className="next-step">
                                <div className="next-num">2</div>
                                <p>Hamara expert <strong>1 ghante pehle call</strong> karega.</p>
                            </div>
                            <div className="next-step">
                                <div className="next-num">3</div>
                                <p>Expert aapke <strong>given time pe ghar pe</strong> aayega.</p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="confirm-actions">
                        <Link to="/" className="btn btn-outline">← Home Page</Link>
                        <Link to="/booking" className="btn btn-primary">New Booking →</Link>
                    </div>

                    {/* Help */}
                    <div className="confirm-help">
                        <p>Koi problem? Directly call karo:</p>
                        <a href="tel:+919999999999" className="confirm-phone">📞 +91 99999 99999</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Confirmation;
