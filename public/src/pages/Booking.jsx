import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Booking.css';

const services = [
    'Electrician',
    'AC Service & Repair',
    'AC Installation',
    'Inverter & Battery',
    'General Mechanic',
    'Plumber',
    'Car Service',
    'Bike Service',
    'Painter',
    'TV / Appliance Repair',
    'Other',
];

const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
    '6:00 PM - 8:00 PM',
];

const Booking = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        service: searchParams.get('service') || '',
        date: '',
        slot: '',
        address: '',
        pincode: '',
        note: '',
    });

    const [errors, setErrors] = useState({});
    const [step, setStep] = useState(1);
    const [submitting, setSubmitting] = useState(false);

    const today = new Date().toISOString().split('T')[0];

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = (stepNum) => {
        const e = {};
        if (stepNum === 1) {
            if (!form.name.trim()) e.name = 'Naam likho';
            if (!form.phone || !/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Valid 10-digit mobile number likho';
            if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email likho';
        }
        if (stepNum === 2) {
            if (!form.service) e.service = 'Service select karo';
            if (!form.date) e.date = 'Date select karo';
            if (!form.slot) e.slot = 'Time slot select karo';
        }
        if (stepNum === 3) {
            if (!form.address.trim()) e.address = 'Address likho';
            if (!form.pincode || !/^\d{6}$/.test(form.pincode)) e.pincode = '6-digit pincode likho';
        }
        return e;
    };

    const nextStep = () => {
        const e = validate(step);
        if (Object.keys(e).length) { setErrors(e); return; }
        setStep(s => s + 1);
        window.scrollTo(0, 0);
    };

    const prevStep = () => {
        setStep(s => s - 1);
        window.scrollTo(0, 0);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const e3 = validate(3);
        if (Object.keys(e3).length) { setErrors(e3); return; }

        setSubmitting(true);
        await new Promise(r => setTimeout(r, 1500));
        setSubmitting(false);
        navigate('/booking/confirmation', { state: form });
    };

    const stepTitles = ['Aapki Details', 'Service & Time', 'Address'];
    const stepIcons = ['👤', '🛠️', '📍'];

    return (
        <main className="booking-page">
            {/* Page Hero */}
            <section className="page-hero booking-hero">
                <div className="page-hero-blob blob-a" />
                <div className="page-hero-blob blob-b" />
                <div className="container page-hero-inner">
                    <span className="badge">📞 Book a Service</span>
                    <h1>Service <span className="gradient-text">Book Karo</span></h1>
                    <p>3 aasaan steps mein apna expert mistri book karo.</p>
                </div>
            </section>

            <section className="section booking-section">
                <div className="container booking-container">
                    {/* Progress Steps */}
                    <div className="steps-progress">
                        {[1, 2, 3].map(n => (
                            <div key={n} className={`sp-step ${step >= n ? 'done' : ''} ${step === n ? 'active' : ''}`}>
                                <div className="sp-circle">
                                    {step > n ? '✓' : stepIcons[n - 1]}
                                </div>
                                <span className="sp-label">{stepTitles[n - 1]}</span>
                                {n < 3 && <div className={`sp-line ${step > n ? 'filled' : ''}`}></div>}
                            </div>
                        ))}
                    </div>

                    {/* Form Card */}
                    <div className="booking-form-card glass-card">
                        <form onSubmit={handleSubmit}>
                            {/* Step 1 */}
                            {step === 1 && (
                                <div className="form-step animate-fadeInUp">
                                    <h2 className="form-step-title">👤 Aapki Personal Details</h2>
                                    <div className="form-grid">
                                        <div className="field-group col-full">
                                            <label>Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Jaise: Rahul Sharma"
                                                value={form.name}
                                                onChange={handleChange}
                                                className={errors.name ? 'error' : ''}
                                            />
                                            {errors.name && <span className="field-error">⚠ {errors.name}</span>}
                                        </div>
                                        <div className="field-group">
                                            <label>Mobile Number *</label>
                                            <div className="input-with-prefix">
                                                <span className="prefix">+91</span>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="9XXXXXXXXX"
                                                    maxLength={10}
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    className={errors.phone ? 'error' : ''}
                                                />
                                            </div>
                                            {errors.phone && <span className="field-error">⚠ {errors.phone}</span>}
                                        </div>
                                        <div className="field-group">
                                            <label>Email (Optional)</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="email@example.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                className={errors.email ? 'error' : ''}
                                            />
                                            {errors.email && <span className="field-error">⚠ {errors.email}</span>}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2 */}
                            {step === 2 && (
                                <div className="form-step animate-fadeInUp">
                                    <h2 className="form-step-title">🛠️ Service & Schedule</h2>
                                    <div className="form-grid">
                                        <div className="field-group col-full">
                                            <label>Konsi Service Chahiye? *</label>
                                            <select
                                                name="service"
                                                value={form.service}
                                                onChange={handleChange}
                                                className={errors.service ? 'error' : ''}
                                            >
                                                <option value="">-- Service Choose Karo --</option>
                                                {services.map(s => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                            {errors.service && <span className="field-error">⚠ {errors.service}</span>}
                                        </div>
                                        <div className="field-group">
                                            <label>Date Select Karo *</label>
                                            <input
                                                type="date"
                                                name="date"
                                                min={today}
                                                value={form.date}
                                                onChange={handleChange}
                                                className={errors.date ? 'error' : ''}
                                            />
                                            {errors.date && <span className="field-error">⚠ {errors.date}</span>}
                                        </div>
                                        <div className="field-group">
                                            <label>Time Slot *</label>
                                            <select
                                                name="slot"
                                                value={form.slot}
                                                onChange={handleChange}
                                                className={errors.slot ? 'error' : ''}
                                            >
                                                <option value="">-- Time Slot Choose Karo --</option>
                                                {timeSlots.map(t => (
                                                    <option key={t} value={t}>{t}</option>
                                                ))}
                                            </select>
                                            {errors.slot && <span className="field-error">⚠ {errors.slot}</span>}
                                        </div>
                                        <div className="field-group col-full">
                                            <label>Problem Describe Karo (Optional)</label>
                                            <textarea
                                                name="note"
                                                rows={3}
                                                placeholder="Kya problem hai? Jaise: AC thanda nahi kar raha, light nahi aa rahi..."
                                                value={form.note}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3 */}
                            {step === 3 && (
                                <div className="form-step animate-fadeInUp">
                                    <h2 className="form-step-title">📍 Service Address</h2>
                                    <div className="form-grid">
                                        <div className="field-group col-full">
                                            <label>Full Address *</label>
                                            <textarea
                                                name="address"
                                                rows={3}
                                                placeholder="Jaise: Flat 201, Anand Nagar, Sector 15, Near Metro, Delhi"
                                                value={form.address}
                                                onChange={handleChange}
                                                className={errors.address ? 'error' : ''}
                                            />
                                            {errors.address && <span className="field-error">⚠ {errors.address}</span>}
                                        </div>
                                        <div className="field-group">
                                            <label>Pincode *</label>
                                            <input
                                                type="text"
                                                name="pincode"
                                                placeholder="110001"
                                                maxLength={6}
                                                value={form.pincode}
                                                onChange={handleChange}
                                                className={errors.pincode ? 'error' : ''}
                                            />
                                            {errors.pincode && <span className="field-error">⚠ {errors.pincode}</span>}
                                        </div>

                                        {/* Summary */}
                                        <div className="col-full booking-summary glass-card">
                                            <h4>📋 Booking Summary</h4>
                                            <div className="summary-rows">
                                                <div className="summary-row">
                                                    <span>👤 Name</span><span>{form.name}</span>
                                                </div>
                                                <div className="summary-row">
                                                    <span>📞 Phone</span><span>+91 {form.phone}</span>
                                                </div>
                                                <div className="summary-row">
                                                    <span>🛠️ Service</span><span>{form.service}</span>
                                                </div>
                                                <div className="summary-row">
                                                    <span>📅 Date</span><span>{form.date}</span>
                                                </div>
                                                <div className="summary-row">
                                                    <span>⏰ Slot</span><span>{form.slot}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="form-nav">
                                {step > 1 && (
                                    <button type="button" onClick={prevStep} className="btn btn-outline">
                                        ← Back
                                    </button>
                                )}
                                {step < 3 ? (
                                    <button type="button" onClick={nextStep} className="btn btn-primary" style={{ marginLeft: 'auto' }}>
                                        Next Step →
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={submitting}
                                        style={{ marginLeft: 'auto' }}
                                    >
                                        {submitting ? (
                                            <>⏳ Booking Ho Rahi Hai...</>
                                        ) : (
                                            <>✅ Confirm Booking</>
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Why Trust Box */}
                    <div className="trust-box">
                        {[
                            { icon: '🛡️', text: 'Verified Professionals' },
                            { icon: '💰', text: 'No Hidden Charges' },
                            { icon: '⭐', text: '4.9/5 Rating' },
                            { icon: '🔄', text: '30 Day Warranty' },
                        ].map((t, i) => (
                            <div key={i} className="trust-badge glass-card">
                                <span className="trust-badge-icon">{t.icon}</span>
                                <span className="trust-badge-text">{t.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Booking;
