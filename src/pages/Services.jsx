import { useState } from 'react';
import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Services' },
        { id: 'repair', name: 'Repair Services' },
        { id: 'maintenance', name: 'Maintenance' },
        { id: 'installation', name: 'Installation' }
    ];

    return (
        <div className="min-h-screen pt-20 pb-16">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                            Our <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional home services delivered right to your doorstep. Choose from our comprehensive range of services and book instantly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Makes Us Different
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
                            <div className="text-5xl mb-4">👨‍🔧</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Technicians</h3>
                            <p className="text-gray-600">
                                All our technicians are background-verified, trained professionals with years of experience in their field.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
                            <div className="text-5xl mb-4">📱</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Booking</h3>
                            <p className="text-gray-600">
                                Book services in just a few clicks. Choose your preferred time slot and get instant confirmation.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
                            <div className="text-5xl mb-4">🛡️</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Service Warranty</h3>
                            <p className="text-gray-600">
                                All our services come with a 30-day warranty. If you face any issues, we'll fix them for free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Information */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Transparent Pricing
                        </h2>
                        <p className="text-xl text-gray-600">
                            No hidden charges. Choose between regular and immediate service options.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-200">
                            <div className="text-3xl mb-4">📅</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Regular Service</h3>
                            <ul className="space-y-2 text-gray-700 mb-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Schedule for a convenient time
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Lower service charges
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Plan your day better
                                </li>
                            </ul>
                            <p className="text-green-700 font-bold text-lg">Best for planned maintenance</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-2 border-orange-200">
                            <div className="text-3xl mb-4">⚡</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Immediate Service</h3>
                            <ul className="space-y-2 text-gray-700 mb-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-orange-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Technician arrives in 30-60 mins
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-orange-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Priority booking
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-orange-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Emergency support available
                                </li>
                            </ul>
                            <p className="text-orange-700 font-bold text-lg">Perfect for urgent issues</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
