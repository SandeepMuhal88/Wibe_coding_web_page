import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmation = () => {
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        const lastBooking = localStorage.getItem('lastBooking');
        if (lastBooking) {
            setBooking(JSON.parse(lastBooking));
        }
    }, []);

    if (!booking) {
        return (
            <div className="min-h-screen pt-20 pb-16 bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl text-gray-600 mb-4">No booking found</p>
                    <Link
                        to="/booking"
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold"
                    >
                        Make a Booking
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Success Animation */}
                <div className="text-center mb-8 fade-in">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-4">
                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                        Booking Confirmed!
                    </h1>
                    <p className="text-xl text-gray-600">
                        Your service has been successfully booked
                    </p>
                </div>

                {/* Booking Details Card */}
                <div className="bg-white rounded-xl shadow-xl p-8 mb-6">
                    <div className="border-b border-gray-200 pb-4 mb-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                    Booking ID: {booking.bookingId}
                                </h2>
                                <p className="text-gray-600">
                                    {new Date(booking.createdAt).toLocaleString('en-IN', {
                                        dateStyle: 'long',
                                        timeStyle: 'short'
                                    })}
                                </p>
                            </div>
                            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
                                {booking.status.toUpperCase()}
                            </span>
                        </div>
                    </div>

                    {/* Service Details */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Details</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Service</p>
                                    <p className="font-semibold text-gray-900">{booking.serviceName}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Service Type</p>
                                    <p className="font-semibold text-gray-900">
                                        {booking.serviceType === 'regular' ? 'Regular Service' : 'Immediate Service'}
                                    </p>
                                </div>
                                {booking.serviceType === 'regular' && (
                                    <>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Date</p>
                                            <p className="font-semibold text-gray-900">{booking.date}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Time Slot</p>
                                            <p className="font-semibold text-gray-900">{booking.timeSlot}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Customer Details */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Details</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Name</p>
                                    <p className="font-semibold text-gray-900">{booking.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                                    <p className="font-semibold text-gray-900">{booking.phone}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Address</p>
                                    <p className="font-semibold text-gray-900">{booking.address}</p>
                                </div>
                                {booking.problemDescription && (
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Problem Description</p>
                                        <p className="font-semibold text-gray-900">{booking.problemDescription}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Payment Details */}
                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Details</h3>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Total Amount</span>
                            <span className="text-2xl font-bold text-blue-600">₹{booking.totalPrice}</span>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <p className="text-sm text-yellow-800">
                                <span className="font-semibold">Payment Method:</span> Cash on Service
                            </p>
                            <p className="text-xs text-yellow-700 mt-1">
                                Pay directly to the technician after service completion
                            </p>
                        </div>
                    </div>
                </div>

                {/* What's Next Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Confirmation Message</h4>
                                <p className="text-gray-600 text-sm">
                                    You'll receive a confirmation SMS with technician details shortly
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-bold">2</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Technician Assignment</h4>
                                <p className="text-gray-600 text-sm">
                                    {booking.serviceType === 'regular'
                                        ? 'A verified technician will be assigned to your booking'
                                        : 'Our nearest available technician is on the way'}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-bold">3</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Service Completion</h4>
                                <p className="text-gray-600 text-sm">
                                    The technician will complete the service and you can make payment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        to="/"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Back to Home
                    </Link>
                    <Link
                        to="/booking"
                        className="flex-1 bg-white text-gray-900 text-center py-4 rounded-lg font-semibold border-2 border-gray-200 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Book Another Service
                    </Link>
                </div>

                {/* Support Message */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Need help? Call us at{' '}
                        <a href="tel:+919876543210" className="text-blue-600 font-semibold">
                            +91 9876543210
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;
