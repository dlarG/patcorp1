import React, { useState } from "react";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    serviceType: "",
    travelDate: "",
    pickupLocation: "",
    destination: "",
    passengers: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log("Booking submitted:", bookingData);
    alert("Booking request received! We will contact you shortly to confirm.");
  };

  const serviceTypes = [
    "Tour Transport",
    "Airport Transfer",
    "Hotel Transfer",
    "Mall Pickup/Drop-off",
    "Group Transport",
    "Private Charter",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your Transport
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Reserve your vehicle now for a comfortable journey
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
              Booking Request Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Service Type *
                </label>
                <select
                  name="serviceType"
                  value={bookingData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select service type</option>
                  {serviceTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Travel Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="travelDate"
                    value={bookingData.travelDate}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Pickup Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="pickupLocation"
                    value={bookingData.pickupLocation}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Mactan Airport, Cebu"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Destination *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="destination"
                    value={bookingData.destination}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Bohol"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Number of Passengers */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Number of Passengers *
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    name="passengers"
                    value={bookingData.passengers}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="e.g., 4"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your contact number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  value={bookingData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any special requirements or notes..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition"
              >
                <span>Submit Booking Request</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                * We'll confirm your booking within 24 hours
              </p>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Booking Information
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2"></span>
                Advance booking recommended at least 24 hours before travel
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2"></span>
                Cancellations must be made at least 4 hours before pickup
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2"></span>
                Payment options: Bank transfer, GCash, or Cash on arrival
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2"></span>
                For urgent bookings, please call us directly
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
