import { useState } from 'react';
import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Services', icon: '🔥' },
        { id: 'repair', name: 'Repair', icon: '🔧' },
        { id: 'maintenance', name: 'Maintenance', icon: '⚙️' },
        { id: 'installation', name: 'Installation', icon: '🔌' }
    ];

    return (
        <div className="min-h-screen bg-gradient-hero">
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden grid-pattern">
                <div className="blob-1 top-10 right-10 opacity-40"></div>
                <div className="blob-2 bottom-0 left-10 opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center fade-in-up">
                        <span className="badge badge-primary mb-4">What We Offer</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                            Our <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Professional home services delivered right to your doorstep. Choose from our comprehensive range and book instantly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 section-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${selectedCategory === cat.id
                                        ? 'btn-primary'
                                        : 'glass border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/30'
                                    }`}
                            >
                                <span>{cat.icon}</span>
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesData.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-20 bg-gradient-section relative overflow-hidden">
                <div className="blob-3 top-0 right-0 opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="badge badge-primary mb-4">Our Edge</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            What Makes Us <span className="gradient-text">Different</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: '👨‍🔧', title: 'Expert Technicians', desc: 'All our technicians are background-verified, trained professionals with years of experience.', color: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/20' },
                            { icon: '📱', title: 'Easy Booking', desc: 'Book services in just a few clicks. Choose your preferred time slot and get instant confirmation.', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/20' },
                            { icon: '🛡️', title: 'Service Warranty', desc: 'All our services come with a 30-day warranty. If you face any issues, we\'ll fix them for free.', color: 'from-emerald-500/20 to-green-500/20', border: 'border-emerald-500/20' },
                        ].map((item, i) => (
                            <div key={i} className={`glass-card rounded-2xl p-8 text-center border ${item.border}`}>
                                <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Info */}
            <section className="py-20 section-dark relative overflow-hidden">
                <div className="blob-1 bottom-0 left-0 opacity-20"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="badge badge-primary mb-4">Pricing</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Transparent <span className="gradient-text">Pricing</span>
                        </h2>
                        <p className="text-slate-400 text-lg">No hidden charges. Choose between regular and immediate service options.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-card rounded-2xl p-8 border border-emerald-500/20">
                            <div className="text-4xl mb-4">📅</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Regular Service</h3>
                            <ul className="space-y-3 mb-6">
                                {['Schedule for a convenient time', 'Lower service charges', 'Plan your day better'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-emerald-400 font-bold">Best for planned maintenance</p>
                        </div>
                        <div className="glass-card rounded-2xl p-8 border border-amber-500/20">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Immediate Service</h3>
                            <ul className="space-y-3 mb-6">
                                {['Technician arrives in 30-60 mins', 'Priority booking', 'Emergency support available'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                        <span className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-amber-400 font-bold">Perfect for urgent issues</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
