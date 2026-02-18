const About = () => {
    return (
        <div className="min-h-screen bg-gradient-hero">
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden grid-pattern">
                <div className="blob-1 top-10 right-10 opacity-40"></div>
                <div className="blob-2 bottom-0 left-10 opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center fade-in-up">
                        <span className="badge badge-primary mb-4">Our Story</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                            About <span className="gradient-text">Incall</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Your trusted partner for professional home services
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 section-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="badge badge-primary mb-4">Our Mission</span>
                            <h2 className="text-4xl font-black text-white mb-6">
                                Revolutionizing <span className="gradient-text">Home Services</span>
                            </h2>
                            <p className="text-slate-400 text-base leading-relaxed mb-4">
                                At Incall, we're on a mission to revolutionize how people access home services. We believe that getting your AC fixed, plumbing issues resolved, or car serviced shouldn't be a hassle.
                            </p>
                            <p className="text-slate-400 text-base leading-relaxed mb-4">
                                We've built a platform that connects you with verified, skilled technicians who can reach your doorstep at your convenience — whether you need immediate assistance or want to schedule for later.
                            </p>
                            <p className="text-slate-400 text-base leading-relaxed">
                                With transparent pricing, quality assurance, and customer satisfaction at our core, we're making home services simple, reliable, and affordable for everyone.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: '🎯', value: '10K+', label: 'Happy Customers', color: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/20', text: 'text-indigo-400' },
                                { icon: '👨‍🔧', value: '500+', label: 'Expert Technicians', color: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/20', text: 'text-purple-400' },
                                { icon: '⭐', value: '4.8/5', label: 'Average Rating', color: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-500/20', text: 'text-yellow-400' },
                                { icon: '🏆', value: '15K+', label: 'Services Completed', color: 'from-emerald-500/20 to-cyan-500/20', border: 'border-emerald-500/20', text: 'text-emerald-400' },
                            ].map((stat, i) => (
                                <div key={i} className={`glass-card rounded-2xl p-6 text-center border ${stat.border}`}>
                                    <div className="text-3xl mb-2">{stat.icon}</div>
                                    <div className={`text-2xl font-black ${stat.text} mb-1`}>{stat.value}</div>
                                    <div className="text-slate-400 text-xs">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gradient-section relative overflow-hidden">
                <div className="blob-3 top-0 right-0 opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="badge badge-primary mb-4">What Drives Us</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Our Core <span className="gradient-text">Values</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: '🤝', title: 'Trust & Transparency', desc: 'We believe in complete transparency. From pricing to service quality, what you see is what you get. No hidden charges, no surprises.', color: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/20' },
                            { icon: '💯', title: 'Quality First', desc: 'Every technician is background-verified and trained to deliver exceptional service. Your satisfaction is our priority.', color: 'from-emerald-500/20 to-cyan-500/20', border: 'border-emerald-500/20' },
                            { icon: '⚡', title: 'Speed & Reliability', desc: 'Whether you need immediate help or want to schedule for later, we\'re committed to being there when you need us.', color: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-500/20' },
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

            {/* How We Work */}
            <section className="py-20 section-dark relative overflow-hidden">
                <div className="blob-1 bottom-0 left-0 opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="badge badge-primary mb-4">Our Process</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            How We <span className="gradient-text">Work</span>
                        </h2>
                        <p className="text-slate-400 text-lg">Our process ensures quality at every step</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { num: '01', title: 'Rigorous Screening', desc: 'All technicians undergo background verification and skill assessment' },
                            { num: '02', title: 'Training Program', desc: 'Regular training sessions to keep technicians updated with latest techniques' },
                            { num: '03', title: 'Quality Checks', desc: 'Every service is monitored and reviewed for quality assurance' },
                            { num: '04', title: 'Customer Feedback', desc: 'We continuously improve based on customer reviews and ratings' },
                        ].map((item, i) => (
                            <div key={i} className="glass-card rounded-2xl p-6 text-center border border-indigo-500/10">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <span className="text-white font-black text-lg">{item.num}</span>
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
                <div className="blob-1 top-0 left-1/4 opacity-40"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass rounded-3xl p-12 border border-indigo-500/20">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Ready to Experience the <span className="gradient-text">Difference?</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                            Join thousands of satisfied customers who trust Incall for their home services
                        </p>
                        <a
                            href="/booking"
                            className="btn-primary btn-glow px-10 py-4 text-lg font-bold rounded-2xl inline-flex items-center gap-3"
                        >
                            Book Your First Service →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
