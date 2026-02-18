import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-hero">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
                {/* Decorative blobs */}
                <div className="blob-1 top-20 left-10 opacity-60"></div>
                <div className="blob-2 bottom-20 right-10 opacity-60"></div>
                <div className="blob-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="fade-in-up inline-flex items-center gap-2 badge badge-primary mb-6">
                            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                            Trusted by 10,000+ Customers
                        </div>

                        {/* Main Heading */}
                        <h1 className="fade-in-up delay-100 text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight hero-text-shadow">
                            Book Trusted
                            <br />
                            <span className="gradient-text">Technicians</span>
                            <br />
                            <span className="text-4xl md:text-6xl lg:text-7xl text-slate-300">Instantly</span>
                        </h1>

                        <p className="fade-in-up delay-200 text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Professional home services at your doorstep. AC repair, plumbing, electrical work, and more — all in one platform.
                        </p>

                        {/* CTA Buttons */}
                        <div className="fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Link
                                to="/booking"
                                className="btn-primary btn-glow px-8 py-4 text-lg font-bold rounded-2xl inline-flex items-center justify-center gap-3"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Book Now — It's Free
                            </Link>
                            <Link
                                to="/services"
                                className="btn-secondary px-8 py-4 text-lg font-bold rounded-2xl inline-flex items-center justify-center gap-3"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                                Explore Services
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="fade-in-up delay-400 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {[
                                { value: '10K+', label: 'Happy Customers', icon: '😊' },
                                { value: '500+', label: 'Expert Technicians', icon: '👨‍🔧' },
                                { value: '4.8★', label: 'Average Rating', icon: '⭐' },
                            ].map((stat, i) => (
                                <div key={i} className="stat-card">
                                    <div className="text-2xl mb-1">{stat.icon}</div>
                                    <div className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-slate-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
                    <span className="text-xs font-medium">Scroll to explore</span>
                    <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex items-start justify-center p-1">
                        <div className="w-1 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 bg-gradient-section relative overflow-hidden">
                <div className="blob-1 top-0 right-0 opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge badge-primary mb-4">Simple Process</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            How It <span className="gradient-text">Works</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">
                            Book your service in 3 simple steps and get it done today
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {[
                            { step: '01', icon: '🔍', title: 'Select Service', desc: 'Choose from our wide range of professional home services' },
                            { step: '02', icon: '⏰', title: 'Choose Time', desc: 'Pick immediate service or schedule for a convenient time' },
                            { step: '03', icon: '✅', title: 'Confirm Booking', desc: 'Fill in your details and get instant booking confirmation' },
                        ].map((item, i) => (
                            <div key={i} className="relative glass-card rounded-2xl p-8 text-center group">
                                {/* Step number */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="badge badge-primary text-xs font-black px-3 py-1">{item.step}</span>
                                </div>
                                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-4xl border border-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 section-dark relative overflow-hidden">
                <div className="blob-2 bottom-0 left-0 opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge badge-primary mb-4">What We Offer</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Our <span className="gradient-text">Services</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">
                            Professional solutions for all your home service needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: '❄️', name: 'AC Repair & Servicing', desc: 'Installation, gas refilling & complete servicing', price: '₹399', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/20' },
                            { icon: '⚡', name: 'Electrician Services', desc: 'Wiring, switch repairs & appliance installation', price: '₹299', color: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-500/20' },
                            { icon: '🔧', name: 'Plumbing Services', desc: 'Leak fixes, pipe repairs & drain cleaning', price: '₹349', color: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-500/20' },
                            { icon: '🏍️', name: 'Bike Repair', desc: 'On-site servicing, oil change & maintenance', price: '₹449', color: 'from-red-500/20 to-pink-500/20', border: 'border-red-500/20' },
                            { icon: '🚗', name: 'Car Repair & Service', desc: 'Comprehensive servicing & mechanical repairs', price: '₹799', color: 'from-purple-500/20 to-violet-500/20', border: 'border-purple-500/20' },
                            { icon: '🏠', name: 'Home Maintenance', desc: 'Carpentry, painting & handyman services', price: '₹499', color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/20' },
                        ].map((service, i) => (
                            <div key={i} className={`glass-card rounded-2xl p-6 border ${service.border} group`}>
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                                <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-indigo-400 font-bold">Starting {service.price}</span>
                                    <Link
                                        to="/booking"
                                        className="text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1"
                                    >
                                        Book →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/services"
                            className="btn-secondary px-8 py-3 text-sm font-semibold rounded-xl inline-flex items-center gap-2"
                        >
                            View All Services
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gradient-section relative overflow-hidden">
                <div className="blob-1 top-0 left-0 opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge badge-primary mb-4">Why Incall</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Why Choose <span className="gradient-text">Us?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '🔒', title: 'Verified Pros', desc: 'Background-checked & trained technicians', color: 'text-indigo-400' },
                            { icon: '⚡', title: 'Quick Service', desc: 'Same-day service available on demand', color: 'text-yellow-400' },
                            { icon: '💰', title: 'Fair Pricing', desc: 'No hidden charges, pay what you see', color: 'text-green-400' },
                            { icon: '✅', title: '30-Day Warranty', desc: 'Quality guarantee on all work done', color: 'text-cyan-400' },
                        ].map((item, i) => (
                            <div key={i} className="glass-card rounded-2xl p-6 text-center group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className={`text-lg font-bold mb-2 ${item.color}`}>{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 section-dark relative overflow-hidden">
                <div className="blob-3 bottom-0 right-0 opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge badge-primary mb-4">Reviews</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            What Customers <span className="gradient-text">Say</span>
                        </h2>
                        <p className="text-slate-400 text-lg">Real reviews from real customers</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Rajesh Kumar', location: 'Delhi', rating: 5, comment: 'Excellent service! The AC technician arrived on time and fixed my AC in just 30 minutes. Very professional and affordable.', service: 'AC Repair' },
                            { name: 'Priya Sharma', location: 'Mumbai', rating: 5, comment: 'Amazing experience with the electrician service. Quick response and solved all my electrical issues efficiently.', service: 'Electrician' },
                            { name: 'Amit Patel', location: 'Bangalore', rating: 4, comment: 'Good service for plumbing. The technician was skilled and completed the work neatly. Will use again!', service: 'Plumbing' },
                        ].map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-lg">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">{t.name}</div>
                                        <div className="text-xs text-slate-400">{t.location}</div>
                                    </div>
                                    <div className="ml-auto badge badge-primary">{t.service}</div>
                                </div>
                                <div className="flex gap-1 mb-3">
                                    {[...Array(t.rating)].map((_, j) => (
                                        <svg key={j} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">"{t.comment}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-animated opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
                <div className="blob-1 top-0 left-1/4 opacity-40"></div>
                <div className="blob-2 bottom-0 right-1/4 opacity-40"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass rounded-3xl p-12 border border-indigo-500/20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                            Ready to Get <span className="gradient-text">Started?</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                            Book your home service today and experience the convenience of professional service at your doorstep.
                        </p>
                        <Link
                            to="/booking"
                            className="btn-primary btn-glow px-10 py-4 text-lg font-bold rounded-2xl inline-flex items-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Book Your Service Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
