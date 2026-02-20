import { Link } from 'react-router-dom';
import './About.css';

const whatWeDo = [
    {
        icon: '⚡',
        title: 'Electrical Solutions',
        desc: 'Short circuit se lekar full wiring tak — hamare certified electricians sab handle karte hain. Safe, fast aur reliable.',
        color: '#FACC15',
    },
    {
        icon: '❄️',
        title: 'AC & Cooling Services',
        desc: 'AC service, deep clean, gas refill, PCB repair, compressor replace — sabkuch ek phone par. Summers ka solution.',
        color: '#00D4FF',
    },
    {
        icon: '🔧',
        title: 'Mechanic & Repair',
        desc: 'Motor, pump, machine, pipe — mechanical kaam ke liye experienced mistri apke darwaaze par aate hain.',
        color: '#A78BFA',
    },
    {
        icon: '🚗',
        title: 'Vehicle Services',
        desc: 'Car aur bike doorstep service — oil change, brake check, tyre rotation — bina garage gaye.',
        color: '#34D399',
    },
    {
        icon: '🏠',
        title: 'Home Maintenance',
        desc: 'Plumbing, painting, carpentry, cleaning — ghar ka koi bhi kaam hame call karo.',
        color: '#FB923C',
    },
    {
        icon: '📺',
        title: 'Appliance Repair',
        desc: 'TV, washing machine, fridge, microwave — har appliance ki repair apke ghar par, genuine parts ke saath.',
        color: '#818CF8',
    },
];

const values = [
    { icon: '🛡️', title: 'Fully Verified', desc: 'Har mistri ka police verification aur skill test hota hai.' },
    { icon: '⚡', title: 'Lightning Fast', desc: '60 min mein expert apke ghar pe — guaranteed.' },
    { icon: '💰', title: 'Fair Pricing', desc: 'Koi hidden charges nahi. Jo dikhayein wohi billing.' },
    { icon: '⭐', title: 'Quality Work', desc: '30 din ki service warranty har kaam pe.' },
];

const team = [
    { name: 'Sandeep Singh', role: 'Founder & CEO', emoji: '👨‍💼', color: '#FF6B35' },
    { name: 'Priya Sharma', role: 'Operations Head', emoji: '👩‍💼', color: '#00D4FF' },
    { name: 'Rahul Gupta', role: 'Tech Lead', emoji: '👨‍💻', color: '#A78BFA' },
    { name: 'Anita Verma', role: 'Customer Success', emoji: '👩‍🎧', color: '#34D399' },
];

const About = () => {
    return (
        <main className="about-page">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="page-hero-blob blob-a" />
                <div className="page-hero-blob blob-b" />
                <div className="container page-hero-inner">
                    <span className="badge">🏢 About MistriJi</span>
                    <h1>Hamare <span className="gradient-text">Baare Mein</span></h1>
                    <p>Ek aisa platform jo India ke ghar-ghar tak quality service pahunchata hai — quickly, safely, aur affordably.</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section story-section">
                <div className="container story-grid">
                    <div className="story-content">
                        <span className="badge">📖 Our Story</span>
                        <h2 className="section-title">INcall Kyu Bana?</h2>
                        <p className="story-para">
                            2023 mein jab hamare founder <strong>Sandeep Singh</strong> ki AC garama me kharab hui aur 3 din tak koi reliable mistri nahi mila — tab INcall ka idea aaya.
                        </p>
                        <p className="story-para">
                            Unhone socha — ek aisa platform hona chahiye jahan <strong>ek call pe verified, skilled, aur affordable mistri aaye</strong> — bina kisi jhanjhat ke.
                        </p>
                        <p className="story-para">
                            Aaj INcall Delhi NCR se shuru hokar poore India mein 10,000+ families ki pehli choice ban chuka hai.
                        </p>
                        <Link to="/booking" className="btn btn-primary" style={{ width: 'fit-content', marginTop: '16px' }}>
                            📞 Book Your First Service
                        </Link>
                    </div>
                    <div className="story-visual">
                        <div className="story-cards-wrap">
                            <div className="story-stat-card glass-card sc-1">
                                <div className="story-stat-val gradient-text">2023</div>
                                <div className="story-stat-lbl">Founded</div>
                            </div>
                            <div className="story-stat-card glass-card sc-2">
                                <div className="story-stat-val gradient-text">10K+</div>
                                <div className="story-stat-lbl">Happy Customers</div>
                            </div>
                            <div className="story-stat-card glass-card sc-3">
                                <div className="story-stat-val gradient-text">500+</div>
                                <div className="story-stat-lbl">Expert Mistriyan</div>
                            </div>
                            <div className="story-stat-card glass-card sc-4">
                                <div className="story-stat-val gradient-text">20+</div>
                                <div className="story-stat-lbl">Cities in India</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="section what-we-do">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">🛠️ What We Do</span>
                        <h2>Hum Kya <span className="gradient-text">Karte Hain</span></h2>
                        <p>INcall pe aapko milega India ka best home service experience — har zaroorat ke liye ek solution.</p>
                    </div>

                    <div className="wwd-grid">
                        {whatWeDo.map((item, i) => (
                            <div key={i} className="wwd-card glass-card" style={{ '--wwd-color': item.color }}>
                                <div className="wwd-icon" style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                                    <span>{item.icon}</span>
                                </div>
                                <h3 className="wwd-title">{item.title}</h3>
                                <p className="wwd-desc">{item.desc}</p>
                                <div className="wwd-underline" style={{ background: item.color }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section values-section">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">💎 Our Values</span>
                        <h2>Jo Cheez Hume <span className="gradient-text">Alag Banati Hai</span></h2>
                    </div>
                    <div className="values-grid">
                        {values.map((v, i) => (
                            <div key={i} className="value-card glass-card">
                                <div className="value-icon">{v.icon}</div>
                                <h3 className="value-title">{v.title}</h3>
                                <p className="value-desc">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section mission-section">
                <div className="container mission-grid">
                    <div className="mission-card glass-card" style={{ borderColor: 'rgba(255,107,53,0.3)' }}>
                        <div className="mission-icon">🎯</div>
                        <h3>Hamara Mission</h3>
                        <p>India ke har ghar tak affordable, reliable aur fast home services pahunchana — bina kisi jhamele ke.</p>
                    </div>
                    <div className="mission-card glass-card" style={{ borderColor: 'rgba(0,212,255,0.3)' }}>
                        <div className="mission-icon">🔭</div>
                        <h3>Hamara Vision</h3>
                        <p>2026 tak India ka #1 home services platform banna aur 1 lakh+ mistri ko respect aur stable income dena.</p>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section team-section">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">👥 Team</span>
                        <h2>Hamari <span className="gradient-text">Team</span></h2>
                        <p>Passionate people jo aapki service ko best banate hain.</p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, i) => (
                            <div key={i} className="team-card glass-card">
                                <div className="team-avatar" style={{ background: `${member.color}15`, border: `2px solid ${member.color}30` }}>
                                    <span>{member.emoji}</span>
                                </div>
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role" style={{ color: member.color }}>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="about-cta glass-card">
                        <h2>Ready to Experience <span className="gradient-text">INcall</span>?</h2>
                        <p>Abhi book karo aur 30 minutes mein expert apke ghar pe.</p>
                        <Link to="/booking" className="btn btn-primary" style={{ marginTop: '12px' }}>
                            Book a Service →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
