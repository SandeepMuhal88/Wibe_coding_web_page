const About = () => {
    return (
        <div className="min-h-screen pt-20 pb-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                            About <span className="gradient-text">Incall</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Your trusted partner for professional home services
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                At Incall, we're on a mission to revolutionize how people access home services.
                                We believe that getting your AC fixed, plumbing issues resolved, or car serviced
                                shouldn't be a hassle.
                            </p>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                We've built a platform that connects you with verified, skilled technicians who
                                can reach your doorstep at your convenience - whether you need immediate assistance
                                or want to schedule for later.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                With transparent pricing, quality assurance, and customer satisfaction at our core,
                                we're making home services simple, reliable, and affordable for everyone.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                                <div className="text-4xl mb-2">🎯</div>
                                <div className="text-3xl font-bold text-blue-600 mb-1">10K+</div>
                                <div className="text-gray-700">Happy Customers</div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
                                <div className="text-4xl mb-2">👨‍🔧</div>
                                <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                                <div className="text-gray-700">Expert Technicians</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                                <div className="text-4xl mb-2">⭐</div>
                                <div className="text-3xl font-bold text-green-600 mb-1">4.8/5</div>
                                <div className="text-gray-700">Average Rating</div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
                                <div className="text-4xl mb-2">🏆</div>
                                <div className="text-3xl font-bold text-orange-600 mb-1">15K+</div>
                                <div className="text-gray-700">Services Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600">What drives us every day</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
                            <div className="text-5xl mb-4">🤝</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Trust & Transparency</h3>
                            <p className="text-gray-600">
                                We believe in complete transparency. From pricing to service quality,
                                what you see is what you get. No hidden charges, no surprises.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
                            <div className="text-5xl mb-4">💯</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality First</h3>
                            <p className="text-gray-600">
                                Every technician is background-verified and trained to deliver
                                exceptional service. Your satisfaction is our priority.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Speed & Reliability</h3>
                            <p className="text-gray-600">
                                Whether you need immediate help or want to schedule for later,
                                we're committed to being there when you need us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
                        <p className="text-xl text-gray-600">Our process ensures quality at every step</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Rigorous Screening</h3>
                            <p className="text-gray-600">
                                All technicians undergo background verification and skill assessment
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Training Program</h3>
                            <p className="text-gray-600">
                                Regular training sessions to keep technicians updated with latest techniques
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Checks</h3>
                            <p className="text-gray-600">
                                Every service is monitored and reviewed for quality assurance
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                4
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Feedback</h3>
                            <p className="text-gray-600">
                                We continuously improve based on customer reviews and ratings
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Ready to Experience the Difference?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of satisfied customers who trust Incall for their home services
                    </p>
                    <a
                        href="/booking"
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
                    >
                        Book Your First Service
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
