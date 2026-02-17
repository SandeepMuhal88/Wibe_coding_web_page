import { Link } from 'react-router-dom';
import { servicesData, testimonials, howItWorks } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center fade-in">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                            Book Trusted Technicians
                            <span className="block gradient-text mt-2">Instantly</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Professional home services at your doorstep. AC repair, plumbing, electrical work, and more - all in one platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/booking"
                                className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
                            >
                                Book Now
                            </Link>
                            <Link
                                to="/services"
                                className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-gray-200"
                            >
                                View Services
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
                            <div className="text-center">
                                <div className="text-4xl font-bold gradient-text">10K+</div>
                                <div className="text-gray-600 mt-2">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold gradient-text">500+</div>
                                <div className="text-gray-600 mt-2">Expert Technicians</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold gradient-text">4.8★</div>
                                <div className="text-gray-600 mt-2">Average Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-600">
                            Book your service in 3 simple steps
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {howItWorks.map((step) => (
                            <div key={step.step} className="text-center fade-in">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-4xl mb-4 shadow-lg">
                                    {step.icon}
                                </div>
                                <div className="relative">
                                    <div className="absolute -top-8 -left-4 text-7xl font-bold text-gray-100">
                                        {step.step}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-600">
                            Professional solutions for all your home service needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/services"
                            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Choose Incall?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 card-hover">
                            <div className="text-5xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Professionals</h3>
                            <p className="text-gray-600">Background-checked and trained technicians</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 card-hover">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Service</h3>
                            <p className="text-gray-600">Same-day service available on demand</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 card-hover">
                            <div className="text-5xl mb-4">💰</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                            <p className="text-gray-600">No hidden charges, pay what you see</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 card-hover">
                            <div className="text-5xl mb-4">✅</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
                            <p className="text-gray-600">30-day service warranty on all work</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Real reviews from real customers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white rounded-xl shadow-lg p-6 card-hover"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                                    </div>
                                </div>
                                <div className="flex mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-yellow-400 fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-3">"{testimonial.comment}"</p>
                                <p className="text-sm text-gray-500">
                                    Service: <span className="font-medium text-blue-600">{testimonial.service}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Book your home service today and experience the convenience
                    </p>
                    <Link
                        to="/booking"
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
                    >
                        Book Your Service Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
