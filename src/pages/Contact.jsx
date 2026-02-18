import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 3000);
    };

    const inputClass = "input-dark w-full px-4 py-3 text-sm";

    return (
        <div className="min-h-screen bg-gradient-hero">
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden grid-pattern">
                <div className="blob-1 top-10 right-10 opacity-40"></div>
                <div className="blob-2 bottom-0 left-10 opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center fade-in-up">
                        <span className="badge badge-primary mb-4">Talk to Us</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                            Get in <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Have questions? We're here to help. Reach out to us anytime!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 section-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="space-y-4">
                            {[
                                { icon: '📞', title: 'Phone', lines: ['+91 9876543210', 'Mon-Sun: 8:00 AM - 10:00 PM'], color: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/20' },
                                { icon: '📧', title: 'Email', lines: ['support@incall.com', 'info@incall.com'], color: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/20' },
                                { icon: '📍', title: 'Office', lines: ['123 Service Street, Andheri West', 'Mumbai, Maharashtra 400053'], color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/20' },
                            ].map((item, i) => (
                                <div key={i} className={`glass-card rounded-2xl p-5 border ${item.border} flex items-start gap-4`}>
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                        {item.lines.map((line, j) => (
                                            <p key={j} className="text-slate-400 text-sm">{line}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Social */}
                            <div className="glass-card rounded-2xl p-5 border border-indigo-500/20">
                                <h3 className="font-bold text-white mb-4">Follow Us</h3>
                                <div className="flex gap-3">
                                    {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((s) => (
                                        <a
                                            key={s}
                                            href="#"
                                            aria-label={s}
                                            className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all duration-200 text-xs font-bold"
                                        >
                                            {s.charAt(0)}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <div className="glass-card rounded-2xl p-8 border border-indigo-500/10">
                                <h2 className="text-2xl font-black text-white mb-6">Send Us a Message</h2>

                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                                            <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-2">Message Sent! 🎉</h3>
                                        <p className="text-slate-400">Thank you for reaching out. We'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-300 mb-2">Your Name *</label>
                                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="John Doe" className={inputClass} />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address *</label>
                                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="john@example.com" className={inputClass} />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number</label>
                                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 9876543210" className={inputClass} />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-300 mb-2">Subject *</label>
                                                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="How can we help?" className={inputClass} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-300 mb-2">Message *</label>
                                            <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="5" placeholder="Tell us more about your inquiry..." className={inputClass} />
                                        </div>
                                        <button type="submit" className="btn-primary w-full py-4 text-base font-bold rounded-xl">
                                            Send Message →
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-16 bg-gradient-section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-card rounded-2xl h-64 flex items-center justify-center border border-indigo-500/10">
                        <div className="text-center">
                            <div className="text-5xl mb-3">🗺️</div>
                            <p className="text-slate-400 font-medium">Map integration coming soon</p>
                            <p className="text-slate-600 text-sm mt-1">Mumbai, Maharashtra, India</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
