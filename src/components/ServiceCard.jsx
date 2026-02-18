import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { name, description, icon, pricing, rating, reviewsCount, slug } = service;

    const colorMap = {
        'ac-repair': { gradient: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/20', hover: 'hover:border-cyan-500/50', badge: 'text-cyan-400' },
        'electrician': { gradient: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-500/20', hover: 'hover:border-yellow-500/50', badge: 'text-yellow-400' },
        'plumbing': { gradient: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-500/20', hover: 'hover:border-blue-500/50', badge: 'text-blue-400' },
        'bike-repair': { gradient: 'from-red-500/20 to-pink-500/20', border: 'border-red-500/20', hover: 'hover:border-red-500/50', badge: 'text-red-400' },
        'car-repair': { gradient: 'from-purple-500/20 to-violet-500/20', border: 'border-purple-500/20', hover: 'hover:border-purple-500/50', badge: 'text-purple-400' },
        'home-maintenance': { gradient: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/20', hover: 'hover:border-green-500/50', badge: 'text-green-400' },
    };
    const colors = colorMap[slug] || { gradient: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/20', hover: 'hover:border-indigo-500/50', badge: 'text-indigo-400' };

    return (
        <div className={`glass-card rounded-2xl overflow-hidden border ${colors.border} ${colors.hover} group`}>
            <div className="p-6">
                {/* Icon + Title + Rating */}
                <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white mb-1 leading-tight">{name}</h3>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <svg className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                                <span className="text-sm font-semibold text-yellow-400">{rating}</span>
                            </div>
                            <span className="text-xs text-slate-500">({reviewsCount.toLocaleString()} reviews)</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>

                {/* Pricing */}
                <div className="space-y-2 mb-5">
                    <div className="pricing-regular flex justify-between items-center">
                        <div>
                            <p className="text-xs font-semibold text-emerald-400">Regular Service</p>
                            <p className="text-xs text-slate-500">{pricing.regular.time}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-black text-emerald-400">₹{pricing.regular.price}</p>
                            {pricing.regular.discount > 0 && (
                                <p className="text-xs text-slate-500 line-through">₹{pricing.regular.price + pricing.regular.discount}</p>
                            )}
                        </div>
                    </div>

                    <div className="pricing-immediate flex justify-between items-center">
                        <div>
                            <p className="text-xs font-semibold text-amber-400">Immediate Service</p>
                            <p className="text-xs text-slate-500">{pricing.immediate.time}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-black text-amber-400">₹{pricing.immediate.price}</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <Link
                    to={`/booking?service=${slug}`}
                    className="btn-primary block w-full text-center py-3 rounded-xl text-sm font-bold"
                >
                    Book Now →
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
