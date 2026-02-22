import React from "react";
import { Users, Wind, Battery, Shield, Wifi, Coffee } from "lucide-react";

const Fleet = () => {
  const vehicles = [
    {
      name: "Executive Touring Coach",
      capacity: "45 passengers",
      features: [
        "Reclining seats",
        "Air conditioning",
        "Entertainment system",
        "Restroom",
      ],
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ideal: "Large tour groups, long-distance travel",
    },
    {
      name: "Premium Mini Bus",
      capacity: "25 passengers",
      features: [
        "Comfortable seating",
        "Air conditioning",
        "Luggage space",
        "PA system",
      ],
      image:
        "https://images.unsplash.com/photo-1590362891591-012e13426898?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ideal: "Medium groups, airport transfers",
    },
    {
      name: "Luxury Van",
      capacity: "12 passengers",
      features: [
        "Leather seats",
        "Air conditioning",
        "Entertainment system",
        "Extra legroom",
      ],
      image:
        "https://images.unsplash.com/photo-1601584115191-9e3b7d7e8b3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ideal: "Small groups, executive travel",
    },
    {
      name: "SUV Service",
      capacity: "5 passengers",
      features: [
        "Premium comfort",
        "Air conditioning",
        "Privacy",
        "Personal service",
      ],
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ideal: "VIP transfers, individual travelers",
    },
  ];

  const interiorFeatures = [
    {
      icon: <Wind className="h-6 w-6 text-blue-600" />,
      title: "Climate Control",
      description: "Fully air-conditioned for your comfort",
    },
    {
      icon: <Wifi className="h-6 w-6 text-blue-600" />,
      title: "Wi-Fi Ready",
      description: "Stay connected during your journey",
    },
    {
      icon: <Coffee className="h-6 w-6 text-blue-600" />,
      title: "Refreshments",
      description: "Bottled water and light snacks available",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Safety Equipment",
      description: "First aid kits and safety tools onboard",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Modern Fleet
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comfortable, well-maintained vehicles for your travel needs
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            Vehicles Available
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our selection of modern, tourist-ready vehicles
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-600">
                      Capacity: {vehicle.capacity}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {vehicle.features.map((feature, idx) => (
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

                  <p className="text-sm text-gray-500 italic">
                    Ideal for: {vehicle.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Onboard Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interiorFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Interior Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <img
              src="https://images.unsplash.com/photo-1601584115191-9e3b7d7e8b3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Comfortable Interior"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
              alt="Clean Interior"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1590362891591-012e13426898?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Modern Seating"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Ride</h2>
          <p className="text-xl mb-8 text-blue-200">
            Contact us to reserve your preferred vehicle
          </p>
          <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition">
            Inquire About Fleet
          </button>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
