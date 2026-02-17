export const servicesData = [
    {
        id: 1,
        name: "AC Repair & Servicing",
        slug: "ac-repair",
        description: "Professional AC installation, repair, gas refilling, and comprehensive servicing for all brands",
        icon: "❄️",
        features: [
            "AC Installation",
            "Gas Refilling",
            "Complete Servicing",
            "Filter Cleaning",
            "Leak Repair"
        ],
        pricing: {
            regular: {
                price: 399,
                time: "Schedule for later",
                discount: 0
            },
            immediate: {
                price: 599,
                time: "Technician arrives in 30-60 mins",
                discount: 0
            }
        },
        estimatedDuration: "45-90 mins",
        rating: 4.8,
        reviewsCount: 2453
    },
    {
        id: 2,
        name: "Electrician Services",
        slug: "electrician",
        description: "Expert electrical solutions for wiring, switch repairs, appliance installation, and safety checks",
        icon: "⚡",
        features: [
            "Wiring & Rewiring",
            "Switch/Socket Repair",
            "Fan Installation",
            "MCB/Fuse Repair",
            "Light Fitting"
        ],
        pricing: {
            regular: {
                price: 299,
                time: "Schedule for later",
                discount: 0
            },
            immediate: {
                price: 499,
                time: "Technician arrives in 30-60 mins",
                discount: 0
            }
        },
        estimatedDuration: "30-60 mins",
        rating: 4.7,
        reviewsCount: 3241
    },
    {
        id: 3,
        name: "Plumbing Services",
        slug: "plumbing",
        description: "Complete plumbing solutions including leak fixes, pipe repairs, tap installations, and drainage",
        icon: "🔧",
        features: [
            "Leak Repair",
            "Pipe Installation",
            "Tap/Faucet Repair",
            "Toilet Repair",
            "Drain Cleaning"
        ],
        pricing: {
            regular: {
                price: 349,
                time: "Schedule for later",
                discount: 0
            },
            immediate: {
                price: 549,
                time: "Technician arrives in 30-60 mins",
                discount: 0
            }
        },
        estimatedDuration: "40-75 mins",
        rating: 4.6,
        reviewsCount: 1876
    },
    {
        id: 4,
        name: "Bike Repair",
        slug: "bike-repair",
        description: "On-site bike servicing, repairs, oil change, and maintenance for all two-wheelers",
        icon: "🏍️",
        features: [
            "General Servicing",
            "Oil Change",
            "Brake Repair",
            "Chain Lubrication",
            "Battery Check"
        ],
        pricing: {
            regular: {
                price: 449,
                time: "Schedule for later",
                discount: 50
            },
            immediate: {
                price: 699,
                time: "Technician arrives in 45-90 mins",
                discount: 0
            }
        },
        estimatedDuration: "60-120 mins",
        rating: 4.5,
        reviewsCount: 987
    },
    {
        id: 5,
        name: "Car Repair & Service",
        slug: "car-repair",
        description: "Comprehensive car servicing, detailing, battery replacement, and mechanical repairs at your doorstep",
        icon: "🚗",
        features: [
            "Regular Servicing",
            "Oil & Filter Change",
            "Battery Replacement",
            "AC Service",
            "Denting & Painting"
        ],
        pricing: {
            regular: {
                price: 799,
                time: "Schedule for later",
                discount: 100
            },
            immediate: {
                price: 1199,
                time: "Technician arrives in 60-120 mins",
                discount: 0
            }
        },
        estimatedDuration: "90-180 mins",
        rating: 4.7,
        reviewsCount: 1543
    },
    {
        id: 6,
        name: "Home Maintenance",
        slug: "home-maintenance",
        description: "General home repairs including carpentry, painting, appliance fixing, and handyman services",
        icon: "🏠",
        features: [
            "Furniture Repair",
            "Wall Painting",
            "Door/Window Repair",
            "Appliance Fixing",
            "General Handyman"
        ],
        pricing: {
            regular: {
                price: 499,
                time: "Schedule for later",
                discount: 0
            },
            immediate: {
                price: 749,
                time: "Technician arrives in 45-90 mins",
                discount: 0
            }
        },
        estimatedDuration: "60-150 mins",
        rating: 4.6,
        reviewsCount: 2109
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        location: "Delhi",
        rating: 5,
        comment: "Excellent service! The AC technician arrived on time and fixed my AC in just 30 minutes. Very professional and affordable.",
        service: "AC Repair",
        date: "2024-01-15"
    },
    {
        id: 2,
        name: "Priya Sharma",
        location: "Mumbai",
        rating: 5,
        comment: "Amazing experience with the electrician service. Quick response and solved all my electrical issues efficiently.",
        service: "Electrician",
        date: "2024-01-10"
    },
    {
        id: 3,
        name: "Amit Patel",
        location: "Bangalore",
        rating: 4,
        comment: "Good service for plumbing. The technician was skilled and completed the work neatly. Will use again!",
        service: "Plumbing",
        date: "2024-01-08"
    },
    {
        id: 4,
        name: "Neha Singh",
        location: "Pune",
        rating: 5,
        comment: "Loved the convenience of doorstep car servicing. Saved so much time and the quality was top-notch!",
        service: "Car Service",
        date: "2024-01-05"
    },
    {
        id: 5,
        name: "Vikram Reddy",
        location: "Hyderabad",
        rating: 5,
        comment: "Best home maintenance service! The handyman fixed multiple issues in one visit. Highly recommend Incall!",
        service: "Home Maintenance",
        date: "2024-01-01"
    }
];

export const howItWorks = [
    {
        step: 1,
        title: "Select Service",
        description: "Choose from our wide range of home services",
        icon: "🔍"
    },
    {
        step: 2,
        title: "Choose Time",
        description: "Pick immediate service or schedule for later",
        icon: "⏰"
    },
    {
        step: 3,
        title: "Confirm Booking",
        description: "Fill details and get instant confirmation",
        icon: "✅"
    }
];
