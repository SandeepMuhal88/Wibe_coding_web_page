import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Booking = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const serviceSlug = searchParams.get('service');

    const [formData, setFormData] = useState({
        serviceId: '',
        serviceType: 'regular', // regular or immediate
        date: '',
        timeSlot: '',
        name: '',
        phone: '',
        address: '',
        problemDescription: ''
    });

    const [selectedService, setSelectedService] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (serviceSlug) {
            const service = servicesData.find(s => s.slug === serviceSlug);
            if (service) {
                setFormData(prev => ({ ...prev, serviceId: service.id.toString() }));
                setSelectedService(service);
                setTotalPrice(service.pricing.regular.price);
            }
        }
    }, [serviceSlug]);

    const timeSlots = [
        '09:00 AM - 11:00 AM',
        '11:00 AM - 01:00 PM',
        '01:00 PM - 03:00 PM',
        '03:00 PM - 05:00 PM',
        '05:00 PM - 07:00 PM'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'serviceId') {
            const service = servicesData.find(s => s.id === parseInt(value));
            setSelectedService(service);
            if (service) {
                const price = formData.serviceType === 'regular'
                    ? service.pricing.regular.price
                    : service.pricing.immediate.price;
                setTotalPrice(price);
            }
        }

        if (name === 'serviceType') {
            if (selectedService) {
                const price = value === 'regular'
                    ? selectedService.pricing.regular.price
                    : selectedService.pricing.immediate.price;
                setTotalPrice(price);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store booking data in localStorage (simulating backend)
        const booking = {
            ...formData,
            serviceName: selectedService?.name,
            totalPrice,
            bookingId: 'BK' + Date.now(),
            status: 'confirmed',
            createdAt: new Date().toISOString()
        };
        localStorage.setItem('lastBooking', JSON.stringify(booking));
        navigate('/booking-confirmation');
    };

    return (
        <div className="min-h-screen pt-20 pb-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Book Your <span className="gradient-text">Service</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Fill in the details below to schedule your service
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Booking Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                            {/* Service Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Select Service *
                                </label>
                                <select
                                    name="serviceId"
                                    value={formData.serviceId}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Choose a service...</option>
                                    {servicesData.map(service => (
                                        <option key={service.id} value={service.id}>
                                            {service.icon} {service.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Service Type */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-900 mb-3">
                                    Service Type *
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div
                                        onClick={() => setFormData(prev => ({ ...prev, serviceType: 'regular' }))}
                                        className={`cursor-pointer border-2 rounded-lg p-4 transition-all ${formData.serviceType === 'regular'
                                                ? 'border-green-500 bg-green-50'
                                                : 'border-gray-200 hover:border-green-300'
                                            }`}
                                    >
                                        <div className="flex items-center mb-2">
                                            <input
                                                type="radio"
                                                name="serviceType"
                                                value="regular"
                                                checked={formData.serviceType === 'regular'}
                                                onChange={handleInputChange}
                                                className="mr-2"
                                            />
                                            <span className="font-semibold text-gray-900">Regular Service</span>
                                        </div>
                                        <p className="text-sm text-gray-600">Schedule for later</p>
                                        {selectedService && (
                                            <p className="text-lg font-bold text-green-600 mt-2">
                                                ₹{selectedService.pricing.regular.price}
                                            </p>
                                        )}
                                    </div>

                                    <div
                                        onClick={() => setFormData(prev => ({ ...prev, serviceType: 'immediate' }))}
                                        className={`cursor-pointer border-2 rounded-lg p-4 transition-all ${formData.serviceType === 'immediate'
                                                ? 'border-orange-500 bg-orange-50'
                                                : 'border-gray-200 hover:border-orange-300'
                                            }`}
                                    >
                                        <div className="flex items-center mb-2">
                                            <input
                                                type="radio"
                                                name="serviceType"
                                                value="immediate"
                                                checked={formData.serviceType === 'immediate'}
                                                onChange={handleInputChange}
                                                className="mr-2"
                                            />
                                            <span className="font-semibold text-gray-900">Immediate Service</span>
                                        </div>
                                        <p className="text-sm text-gray-600">Arrives in 30-60 mins</p>
                                        {selectedService && (
                                            <p className="text-lg font-bold text-orange-600 mt-2">
                                                ₹{selectedService.pricing.immediate.price}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Date and Time (only for regular service) */}
                            {formData.serviceType === 'regular' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Preferred Date *
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            min={new Date().toISOString().split('T')[0]}
                                            required={formData.serviceType === 'regular'}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Time Slot *
                                        </label>
                                        <select
                                            name="timeSlot"
                                            value={formData.timeSlot}
                                            onChange={handleInputChange}
                                            required={formData.serviceType === 'regular'}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Select time...</option>
                                            {timeSlots.map(slot => (
                                                <option key={slot} value={slot}>{slot}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}

                            {/* Personal Details */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="10-digit mobile number"
                                    pattern="[0-9]{10}"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Service Address *
                                </label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                    rows="3"
                                    placeholder="Enter complete address with landmark"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Problem Description
                                </label>
                                <textarea
                                    name="problemDescription"
                                    value={formData.problemDescription}
                                    onChange={handleInputChange}
                                    rows="4"
                                    placeholder="Describe the issue in detail (optional)"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={!selectedService}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Confirm Booking
                            </button>
                        </form>
                    </div>

                    {/* Booking Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h3>

                            {selectedService ? (
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="text-3xl">{selectedService.icon}</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{selectedService.name}</h4>
                                            <p className="text-sm text-gray-600">
                                                {formData.serviceType === 'regular' ? 'Regular Service' : 'Immediate Service'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-600">Service Charge</span>
                                            <span className="font-semibold">₹{totalPrice}</span>
                                        </div>
                                        {formData.serviceType === 'regular' && selectedService.pricing.regular.discount > 0 && (
                                            <div className="flex justify-between mb-2 text-green-600">
                                                <span>Discount</span>
                                                <span>-₹{selectedService.pricing.regular.discount}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between text-lg font-bold text-gray-900 mt-4 pt-4 border-t border-gray-200">
                                            <span>Total Amount</span>
                                            <span className="text-blue-600">₹{totalPrice}</span>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                                        <p className="text-sm text-blue-800 font-medium">
                                            ✅ {formData.serviceType === 'regular'
                                                ? 'Schedule at your convenience'
                                                : 'Technician will arrive within 30-60 minutes'}
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h5 className="font-semibold text-gray-900 mb-2">Includes:</h5>
                                        <ul className="space-y-1">
                                            {selectedService.features.slice(0, 3).map((feature, index) => (
                                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>Select a service to see the summary</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
