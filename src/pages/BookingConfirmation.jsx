import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmation = () => {
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        const lastBooking = localStorage.getItem('lastBooking');
        if (lastBooking) setBooking(JSON.parse(lastBooking));
    }, []);

    if (!booking) {
        return (
            <div className="min-h-screen bg-gradient-hero pt-24 pb-16 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">📋</div>
                    <p className="text-slate-400 text-xl mb-6">No booking found</p>
                    <Link to="/booking" className="btn-primary px-8 py-3 rounded-xl font-bold">
                        Make a Booking
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-hero pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Success Header */}
                <div className="text-center mb-10 fade-in-up">
                    <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                        <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping"></div>
                        <div className="relative w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                            <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-3">
                        Booking <span className="gradient-text">Confirmed!</span>
                    </h1>
                    <p className="text-slate-400 text-lg">Your service has been successfully booked</p>
                </div>

                {/* Booking Details */}
                <div className="glass-card rounded-2xl p-8 border border-indigo-500/10 mb-6">
                    <div className="flex justify-between items-start mb-6 pb-6 border-b border-white/10">
                        <div>
                            <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Booking ID</p>
                            <h2 className="text-xl font-black text-white">{booking.bookingId}</h2>
                            <p className="text-sm text-slate-400 mt-1">
                                {new Date(booking.createdAt).toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' })}
                            </p>
                        </div>
                        <span className="badge badge-success text-sm px-4 py-2">
                            ✅ {booking.status.toUpperCase()}
                        </span>
                    </div>

                    {/* Service Details */}
                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Service Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: 'Service', value: booking.serviceName },
                                { label: 'Type', value: booking.serviceType === 'regular' ? '📅 Regular Service' : '⚡ Immediate Service' },
                                ...(booking.serviceType === 'regular' ? [
                                    { label: 'Date', value: booking.date },
                                    { label: 'Time Slot', value: booking.timeSlot },
                                ] : []),
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 rounded-xl p-4">
                                    <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                                    <p className="font-semibold text-white text-sm">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Customer Details */}
                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Customer Details</h3>
                        <div className="bg-white/5 rounded-xl p-4 space-y-3">
                            {[
                                { label: 'Name', value: booking.name },
                                { label: 'Phone', value: booking.phone },
                                { label: 'Address', value: booking.address },
                                ...(booking.problemDescription ? [{ label: 'Problem', value: booking.problemDescription }] : []),
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3">
                                    <span className="text-xs text-slate-500 w-16 flex-shrink-0 pt-0.5">{item.label}</span>
                                    <span className="text-sm text-white font-medium">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="border-t border-white/10 pt-6">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-slate-400">Total Amount</span>
                            <span className="text-3xl font-black gradient-text">₹{booking.totalPrice}</span>
                        </div>
                        <div className="rounded-xl p-4 bg-yellow-500/10 border border-yellow-500/20">
                            <p className="text-sm text-yellow-400 font-semibold">💵 Payment Method: Cash on Service</p>
                            <p className="text-xs text-slate-500 mt-1">Pay directly to the technician after service completion</p>
                        </div>
                    </div>
                </div>

                {/* What's Next */}
                <div className="glass-card rounded-2xl p-8 border border-indigo-500/10 mb-6">
                    <h3 className="text-lg font-bold text-white mb-6">What's Next?</h3>
                    <div className="space-y-5">
                        {[
                            { num: '1', title: 'Confirmation Message', desc: "You'll receive a confirmation SMS with technician details shortly" },
                            { num: '2', title: 'Technician Assignment', desc: booking.serviceType === 'regular' ? 'A verified technician will be assigned to your booking' : 'Our nearest available technician is on the way' },
                            { num: '3', title: 'Service Completion', desc: 'The technician will complete the service and you can make payment' },
                        ].map((step, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-black text-sm">{step.num}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{step.title}</h4>
                                    <p className="text-slate-400 text-xs mt-1">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Link to="/" className="btn-primary flex-1 text-center py-4 rounded-xl font-bold">
                        Back to Home
                    </Link>
                    <Link to="/booking" className="btn-secondary flex-1 text-center py-4 rounded-xl font-bold">
                        Book Another Service
                    </Link>
                </div>

                <div className="text-center">
                    <p className="text-slate-500 text-sm">
                        Need help? Call us at{' '}
                        <a href="tel:+919876543210" className="text-indigo-400 font-semibold hover:text-indigo-300">
                            +91 9876543210
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;
