import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const categories = [
    { id: 'all', label: 'All Services', icon: '🏠' },
    { id: 'electric', label: 'Electrical', icon: '⚡' },
    { id: 'ac', label: 'AC & HVAC', icon: '❄️' },
    { id: 'mechanic', label: 'Mechanic', icon: '🔧' },
    { id: 'vehicle', label: 'Vehicle', icon: '🚗' },
    { id: 'other', label: 'Other', icon: '🔩' },
];

const allServices = [
    /* Electrical */
    {
        id: 1, category: 'electric',
        icon: '⚡', title: 'Electrician',
        desc: 'Wiring, short circuit repair, switchboard replacement, fan/light installation. Har electrical kaam ke liye expert milistry.',
        price: '₹199 se shuru',
        rating: 4.9, reviews: 2840,
        time: '30-60 min',
        features: ['Wiring & Rewiring', 'Switch/Plug Repair', 'Light Installation', 'Fan Fitting', 'MCB/Fuse Repair'],
        color: '#FACC15',
    },
    {
        id: 2, category: 'electric',
        icon: '🔌', title: 'Inverter & Battery',
        desc: 'Inverter installation, battery check, UPS repair aur maintenance service apke ghar par.',
        price: '₹299 se shuru',
        rating: 4.8, reviews: 1200,
        time: '45-90 min',
        features: ['Battery Checkup', 'Inverter Repair', 'UPS Setup', 'Wiring Connection'],
        color: '#F59E0B',
    },
    /* AC */
    {
        id: 3, category: 'ac',
        icon: '❄️', title: 'AC Service & Repair',
        desc: 'AC deep cleaning, gas refill, PCB repair, compressor check — sab ek jagah milega.',
        price: '₹499 se shuru',
        rating: 4.9, reviews: 4150,
        time: '1-2 ghante',
        features: ['Deep Cleaning', 'Gas Refill', 'PCB Repair', 'Cooling Check', 'Installation'],
        color: '#00D4FF',
    },
    {
        id: 4, category: 'ac',
        icon: '🌡️', title: 'AC Installation',
        desc: 'Naya AC install karwao — split ya window, sab types ka professional installation.',
        price: '₹699 se shuru',
        rating: 4.8, reviews: 980,
        time: '2-3 ghante',
        features: ['Wall Mounting', 'Pipe Fitting', 'Gas Charging', 'Test Run', 'Demo'],
        color: '#38BDF8',
    },
    /* Mechanic */
    {
        id: 5, category: 'mechanic',
        icon: '🔧', title: 'General Mechanic',
        desc: 'Motor, pump, machine — koi bhi mechanical kaam ke liye expert mistri.',
        price: '₹299 se shuru',
        rating: 4.7, reviews: 1670,
        time: '1-2 ghante',
        features: ['Motor Repair', 'Pump Servicing', 'Belt & Pulley', 'Machine Maintenance'],
        color: '#A78BFA',
    },
    {
        id: 6, category: 'mechanic',
        icon: '🚿', title: 'Plumber',
        desc: 'Pipe repair, tap replacement, geyser installation, bathroom fitting aur drain cleaning.',
        price: '₹199 se shuru',
        rating: 4.8, reviews: 3200,
        time: '30-90 min',
        features: ['Pipe Repair', 'Tap Fitting', 'Geyser Install', 'Drain Clean', 'Leakage Fix'],
        color: '#60A5FA',
    },
    /* Vehicle */
    {
        id: 7, category: 'vehicle',
        icon: '🚗', title: 'Car Service',
        desc: 'Doorstep car service — oil change, tyre rotation, brake check, AC recharge aur full checkup.',
        price: '₹799 se shuru',
        rating: 4.8, reviews: 2100,
        time: '2-3 ghante',
        features: ['Oil Change', 'Tyre Check', 'Brake Repair', 'Car AC Service', 'Full Checkup'],
        color: '#34D399',
    },
    {
        id: 8, category: 'vehicle',
        icon: '🏍️', title: 'Bike Service',
        desc: 'Bike ka full service — chain lube, oil change, brake checkup, tyre pressure — sabkuch apke ghar pe.',
        price: '₹399 se shuru',
        rating: 4.9, reviews: 1890,
        time: '1-2 ghante',
        features: ['Engine Oil', 'Chain Lubrication', 'Brake Check', 'Tyre Pressure', 'Wash & Polish'],
        color: '#F472B6',
    },
    /* Other */
    {
        id: 9, category: 'other',
        icon: '🎨', title: 'Painter',
        desc: 'Wall painting, POP work, texture design — professional painters at affordable price.',
        price: '₹599 se shuru',
        rating: 4.7, reviews: 870,
        time: 'Per day basis',
        features: ['Interior Painting', 'Exterior Painting', 'POP Work', 'Texture Design', 'Waterproofing'],
        color: '#FB923C',
    },
    {
        id: 11, category: 'Solar installation',
        icon: '☀️', title: 'Solar Installation',
        desc: 'Solar panel installation, battery setup, system maintenance — professional solar installation at affordable price.',
        price: '₹599 se shuru',
        rating: 4.7, reviews: 870,
        time: 'Per day basis',
        features: ['Solar Panel Installation', 'Battery Setup', 'System Maintenance', 'Solar Panel Installation', 'Solar Panel Installation'],
        color: '#FB923C',

    },
    {
        id: 10, category: 'other',
        icon: '📺', title: 'TV / Appliance Repair',
        desc: 'LED TV, washing machine, refrigerator — sab ka repair apke ghar pe.',
        price: '₹249 se shuru',
        rating: 4.8, reviews: 1450,
        time: '1-2 ghante',
        features: ['LED TV Repair', 'Washing Machine', 'Refrigerator', 'Microwave', 'Geyser'],
        color: '#818CF8',
    }

];

const Services = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedService, setSelectedService] = useState(null);

    const filtered = activeCategory === 'all'
        ? allServices
        : allServices.filter(s => s.category === activeCategory);

    return (
        <main className="services-page">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="page-hero-blob blob-a" />
                <div className="page-hero-blob blob-b" />
                <div className="container page-hero-inner">
                    <span className="badge">🛠️ All Services</span>
                    <h1>Hamare <span className="gradient-text">Services</span></h1>
                    <p>Professional, verified aur affordable home services — sab ek platform pe.</p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="filter-section">
                <div className="container">
                    <div className="category-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                <span>{cat.icon}</span>
                                <span>{cat.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-list section">
                <div className="container">
                    <div className="svc-count">
                        <span className="gradient-text">{filtered.length}</span> services found
                    </div>
                    <div className="svc-grid">
                        {filtered.map(svc => (
                            <div
                                key={svc.id}
                                className="svc-card glass-card"
                                style={{ '--svc-color': svc.color }}
                            >
                                {/* Card Top */}
                                <div className="svc-card-top">
                                    <div className="svc-icon-wrap" style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}25` }}>
                                        <span className="svc-icon">{svc.icon}</span>
                                    </div>
                                    <div className="svc-meta">
                                        <span className="svc-rating">⭐ {svc.rating}</span>
                                        <span className="svc-reviews">({svc.reviews} reviews)</span>
                                    </div>
                                </div>

                                {/* Title & Desc */}
                                <h3 className="svc-title">{svc.title}</h3>
                                <p className="svc-desc">{svc.desc}</p>

                                {/* Features */}
                                <div className="svc-features">
                                    {svc.features.slice(0, 3).map(f => (
                                        <span key={f} className="svc-feature-chip">✓ {f}</span>
                                    ))}
                                    {svc.features.length > 3 && (
                                        <span className="svc-feature-more">+{svc.features.length - 3} more</span>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="svc-card-footer">
                                    <div className="svc-info">
                                        <div className="svc-price" style={{ color: svc.color }}>{svc.price}</div>
                                        <div className="svc-time">⏱ {svc.time}</div>
                                    </div>
                                    <Link
                                        to={`/booking?service=${encodeURIComponent(svc.title)}`}
                                        className="btn btn-primary svc-book-btn"
                                        style={{ background: `linear-gradient(135deg, ${svc.color}dd, ${svc.color}aa)` }}
                                    >
                                        Book Now
                                    </Link>
                                </div>

                                {/* Glow on hover */}
                                <div className="svc-glow" style={{ background: `radial-gradient(circle at center, ${svc.color}08, transparent 70%)` }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section">
                <div className="container">
                    <div className="services-cta glass-card">
                        <h2>Apni Service Nahi Mili? 🤔</h2>
                        <p>Ham almost har ghar ki zaroorat ka kख़याल rakhte hain. Abhi call karo ya book karo.</p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
                            <a href="tel:+91 9511582964" className="btn btn-primary">📞 Call Us Now</a>
                            <a href="https://wa.me/919511582964" target="_blank" rel="noreferrer" className="btn btn-outline">💬 WhatsApp</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
