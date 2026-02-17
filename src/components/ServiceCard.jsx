import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { name, description, icon, pricing, rating, reviewsCount, slug } = service;

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <div className="text-4xl">{icon}</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                            <div className="flex items-center mt-1">
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    <span className="ml-1 text-sm font-medium text-gray-700">{rating}</span>
                                </div>
                                <span className="ml-2 text-sm text-gray-500">({reviewsCount} reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>

                {/* Pricing Section */}
                <div className="space-y-3 mb-4">
                    {/* Regular Pricing */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs text-green-700 font-medium">Regular Service</p>
                                <p className="text-xs text-gray-600">{pricing.regular.time}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-green-700">
                                    ₹{pricing.regular.price}
                                    {pricing.regular.discount > 0 && (
                                        <span className="ml-2 text-xs text-gray-500 line-through">
                                            ₹{pricing.regular.price + pricing.regular.discount}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Immediate Pricing */}
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs text-orange-700 font-medium">Immediate Service</p>
                                <p className="text-xs text-gray-600">{pricing.immediate.time}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-orange-700">₹{pricing.immediate.price}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <Link
                    to={`/booking?service=${slug}`}
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                    Book Now
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
