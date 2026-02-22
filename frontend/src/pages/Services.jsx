import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Package,
  Plane,
  Ship,
  Hotel,
  ShoppingBag,
  Users,
  Shield,
  UserCheck,
  Sparkles,
  Wind,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <MapPin className="h-10 w-10 text-blue-600" />,
      title: "Tour Transport Services",
      description:
        "Comfortable and reliable transportation for tourists anywhere in the Philippines",
      features: [
        "Island hopping transfers",
        "City tours",
        "Provincial tours",
        "Custom itineraries",
      ],
    },
    {
      icon: <Package className="h-10 w-10 text-blue-600" />,
      title: "Tour Packages & Private Transport",
      description:
        "Customized tour packages and exclusive private transport for your group",
      features: [
        "Tailored itineraries",
        "Private vehicles",
        "Professional guides",
        "Flexible schedules",
      ],
    },
    {
      icon: <Plane className="h-10 w-10 text-blue-600" />,
      title: "Land, Air & Sea Ticketing",
      description:
        "Complete travel ticketing services for all your transportation needs",
      features: [
        "Flight bookings",
        "Ferry tickets",
        "Bus reservations",
        "Multi-modal coordination",
      ],
    },
    {
      icon: <Ship className="h-10 w-10 text-blue-600" />,
      title: "Airport & Seaport Transfers",
      description:
        "Seamless pickup and drop-off at all major ports and airports",
      features: [
        "Flight monitoring",
        "Welcome services",
        "Luggage assistance",
        "24/7 availability",
      ],
    },
    {
      icon: <Hotel className="h-10 w-10 text-blue-600" />,
      title: "Hotel Transfers",
      description: "Reliable transportation to and from your accommodation",
      features: [
        "Door-to-door service",
        "Scheduled pickups",
        "Luxury vehicles",
        "Group transfers",
      ],
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-blue-600" />,
      title: "Mall Pickup & Drop-off",
      description: "Convenient shopping trip transportation",
      features: [
        "Scheduled mall runs",
        "Shopping assistance",
        "Package handling",
        "Group shopping tours",
      ],
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Tourist Group Transport",
      description:
        "Specialized transport for large tourist groups and travel agencies",
      features: [
        "Group discounts",
        "Coordinated schedules",
        "Multi-vehicle fleets",
        "Event transportation",
      ],
    },
  ];

  const highlights = [
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Modern Vehicles",
      description: "Latest model vehicles with advanced safety features",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-green-500" />,
      title: "Professional Drivers",
      description: "Experienced, licensed, and courteous drivers",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-green-500" />,
      title: "Clean & Hygienic",
      description: "Rigorously sanitized vehicles for your safety",
    },
    {
      icon: <Wind className="h-8 w-8 text-green-500" />,
      title: "Comfortable Travel",
      description: "Air-conditioned vehicles with comfortable seating",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive transportation solutions for tourists and travelers
            across the Philippines
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            What We Offer
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From point-to-point transfers to complete tour packages, we provide
            everything you need for a comfortable journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Why Our Service Stands Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-900">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-200">
            Let us handle your transportation needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
