import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Booking = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const serviceSlug = searchParams.get('service');

    const [formData, setFormData] = useState({
        serviceId: '',
        serviceType: 'regular',
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
                setTotalPrice(formData.serviceType === 'regular' ? service.pricing.regular.price : service.pricing.immediate.price);
            }
        }
        if (name === 'serviceType' && selectedService) {
            setTotalPrice(value === 'regular' ? selectedService.pricing.regular.price : selectedService.pricing.immediate.price);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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

    const inputClass = "input-dark w-full px-4 py-3 text-sm";

    return (
        <div className="min-h-screen bg-gradient-hero pt-24 pb-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 fade-in-up">
                    <span className="badge badge-primary mb-4">Easy Booking</span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                        Book Your <span className="gradient-text">Service</span>
                    </h1>
                    <p className="text-slate-400 text-lg">Fill in the details below to schedule your service</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border border-indigo-500/10 space-y-6">
                            {/* Service Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Select Service *</label>
                                <select
                                    name="serviceId"
                                    value={formData.serviceId}
                                    onChange={handleInputChange}
                                    required
                                    className={inputClass}
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
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-3">Service Type *</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div
                                        onClick={() => {
                                            setFormData(prev => ({ ...prev, serviceType: 'regular' }));
                                            if (selectedService) setTotalPrice(selectedService.pricing.regular.price);
                                        }}
                                        className={`cursor-pointer rounded-xl p-4 border-2 transition-all duration-200 ${formData.serviceType === 'regular'
                                                ? 'border-emerald-500 bg-emerald-500/10'
                                                : 'border-white/10 glass hover:border-emerald-500/40'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.serviceType === 'regular' ? 'border-emerald-500' : 'border-slate-500'}`}>
                                                {formData.serviceType === 'regular' && <div className="w-2 h-2 rounded-full bg-emerald-500"></div>}
                                            </div>
                                            <span className="font-semibold text-white text-sm">Regular Service</span>
                                        </div>
                                        <p className="text-xs text-slate-400">Schedule for later</p>
                                        {selectedService && (
                                            <p className="text-lg font-black text-emerald-400 mt-2">₹{selectedService.pricing.regular.price}</p>
                                        )}
                                    </div>

                                    <div
                                        onClick={() => {
                                            setFormData(prev => ({ ...prev, serviceType: 'immediate' }));
                                            if (selectedService) setTotalPrice(selectedService.pricing.immediate.price);
                                        }}
                                        className={`cursor-pointer rounded-xl p-4 border-2 transition-all duration-200 ${formData.serviceType === 'immediate'
                                                ? 'border-amber-500 bg-amber-500/10'
                                                : 'border-white/10 glass hover:border-amber-500/40'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.serviceType === 'immediate' ? 'border-amber-500' : 'border-slate-500'}`}>
                                                {formData.serviceType === 'immediate' && <div className="w-2 h-2 rounded-full bg-amber-500"></div>}
                                            </div>
                                            <span className="font-semibold text-white text-sm">Immediate Service</span>
                                        </div>
                                        <p className="text-xs text-slate-400">Arrives in 30-60 mins</p>
                                        {selectedService && (
                                            <p className="text-lg font-black text-amber-400 mt-2">₹{selectedService.pricing.immediate.price}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Date & Time */}
                            {formData.serviceType === 'regular' && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-300 mb-2">Preferred Date *</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            min={new Date().toISOString().split('T')[0]}
                                            required={formData.serviceType === 'regular'}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-300 mb-2">Time Slot *</label>
                                        <select
                                            name="timeSlot"
                                            value={formData.timeSlot}
                                            onChange={handleInputChange}
                                            required={formData.serviceType === 'regular'}
                                            className={inputClass}
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
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your full name"
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="10-digit mobile number"
                                    pattern="[0-9]{10}"
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Service Address *</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                    rows="3"
                                    placeholder="Enter complete address with landmark"
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Problem Description <span className="text-slate-500 font-normal">(optional)</span></label>
                                <textarea
                                    name="problemDescription"
                                    value={formData.problemDescription}
                                    onChange={handleInputChange}
                                    rows="3"
                                    placeholder="Describe the issue in detail..."
                                    className={inputClass}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={!selectedService}
                                className="btn-primary w-full py-4 text-base font-bold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {selectedService ? '✅ Confirm Booking' : 'Select a service to continue'}
                            </button>
                        </form>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="glass-card rounded-2xl p-6 border border-indigo-500/10 sticky top-24">
                            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                                <span>📋</span> Booking Summary
                            </h3>

                            {selectedService ? (
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                        <div className="text-3xl">{selectedService.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">{selectedService.name}</h4>
                                            <p className="text-xs text-slate-400 mt-1">
                                                {formData.serviceType === 'regular' ? '📅 Regular Service' : '⚡ Immediate Service'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Service Charge</span>
                                            <span className="text-white font-semibold">₹{totalPrice}</span>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="flex justify-between">
                                            <span className="text-white font-bold">Total Amount</span>
                                            <span className="text-2xl font-black gradient-text">₹{totalPrice}</span>
                                        </div>
                                    </div>

                                    <div className={`rounded-xl p-3 text-xs font-medium ${formData.serviceType === 'regular'
                                            ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                                            : 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
                                        }`}>
                                        {formData.serviceType === 'regular'
                                            ? '✅ Schedule at your convenience'
                                            : '⚡ Technician arrives within 30-60 minutes'}
                                    </div>

                                    <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                                        <h5 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">Includes:</h5>
                                        <ul className="space-y-2">
                                            {selectedService.features.slice(0, 3).map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                                                    <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="rounded-xl p-3 bg-yellow-500/10 border border-yellow-500/20">
                                        <p className="text-xs text-yellow-400 font-medium">💵 Payment: Cash on Service</p>
                                        <p className="text-xs text-slate-500 mt-1">Pay directly to the technician</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-10">
                                    <div className="text-5xl mb-4">🔍</div>
                                    <p className="text-slate-400 text-sm">Select a service to see the booking summary</p>
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
