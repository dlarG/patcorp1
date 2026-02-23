import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Send,
  Clock,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Navigation,
  Building2,
  Award,
  Users,
} from "lucide-react";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom marker component
const CustomMarker = ({ position }) => {
  // eslint-disable-next-line no-unused-vars
  const map = useMap();

  // Create custom icon
  const customIcon = L.divIcon({
    className: "custom-marker",
    html: `
      <div class="relative group cursor-pointer">
        <!-- Main marker with shadow -->
        <div class="relative">
          <!-- Pin shape -->
          <svg width="40" height="52" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg" 
               class="transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 filter drop-shadow-xl">
            <!-- Marker body -->
            <path d="M20 0C8.954 0 0 8.954 0 20c0 11.046 20 32 20 32s20-20.954 20-32c0-11.046-8.954-20-20-20z" 
                  fill="#2563EB" class="transition-colors duration-300 group-hover:fill-blue-700"/>
            <!-- Inner highlight -->
            <path d="M20 4C11.163 4 4 11.163 4 20c0 8.837 16 24 16 24s16-15.163 16-24c0-8.837-7.163-16-16-16z" 
                  fill="#3B82F6" opacity="0.8"/>
            <!-- Location dot -->
            <circle cx="20" cy="20" r="8" fill="#1E40AF" stroke="white" stroke-width="2"/>
            <!-- Center dot -->
            <circle cx="20" cy="20" r="3" fill="white"/>
          </svg>
          
          <!-- Pulsing effect -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 bg-blue-400 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping"></div>
          </div>
        </div>
        
        <!-- Tooltip that appears on hover -->
        <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs font-medium py-1.5 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 shadow-lg">
          <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          Pacific Eight Transport Corp.
        </div>
      </div>
    `,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -42],
  });

  const ImageGallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showLightbox, setShowLightbox] = useState(false);

    const handlePrevious = (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Lightbox component
    const Lightbox = () => {
      if (!showLightbox) return null;

      return (
        <div
          className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center"
          onClick={() => setShowLightbox(false)}
        >
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <img
            src={images[currentIndex]}
            alt={`Office view ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      );
    };

    return (
      <>
        <div className="relative group">
          {/* Main Image */}
          <div className="relative h-48 overflow-hidden rounded-t-xl">
            <img
              src={images[currentIndex]}
              alt={`Office view ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Image Count Badge */}
            <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {currentIndex + 1}/{images.length}
            </div>

            {/* Navigation Arrows (only show if more than 1 image) */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-white w-4"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <Lightbox />
      </>
    );
  };

  return (
    <Marker position={position} icon={customIcon}>
      <Popup className="custom-popup" maxWidth={380} minWidth={320}>
        <div className="p-0 overflow-hidden">
          {/* Image Gallery at the top */}
          <ImageGallery
            images={[
              "/images/office/office-front.jpg",
              "/images/office/office-interior.jpg",
              "/images/office/office-signage.jpg",
              "/images/office/office-team.jpg",
              "/images/office/office-vehicles.jpg",
            ]}
          />

          {/* Content Section */}
          <div className="p-4">
            {/* Enhanced Location Details */}
            <div className="space-y-4">
              {/* Location Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-600 mt-3.5 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-blue-900">
                      OFFICE LOCATION
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Second Floor Building, Palo Public Market
                    </p>
                    <p className="text-sm text-gray-700">
                      Brgy. 5, Palo, Leyte 6501
                    </p>
                    <p className="text-sm text-gray-700">Philippines</p>

                    {/* Coordinates Badge */}
                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-blue-200/50">
                      <div className="bg-blue-100 px-2 py-1 rounded-md">
                        <span className="text-xs font-mono text-blue-800">
                          11.159072° N
                        </span>
                      </div>
                      <div className="bg-blue-100 px-2 py-1 rounded-md">
                        <span className="text-xs font-mono text-blue-800">
                          124.989012° E
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=11.159072,124.989012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg transition-colors"
              >
                <Navigation className="h-3 w-3 text-white" />
                <span className="text-white">Directions</span>
              </a>
              <a
                href="tel:09639174821"
                className="flex-1 flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded-lg transition-colors"
              >
                <Phone className="h-3 w-3 text-white" />
                <span className="text-white">Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

// Map controller component to handle view and interactions
const MapController = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 17);
  }, [center, map]);

  return null;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const MapController = ({ center, zoom }) => {
    const map = useMap();

    useEffect(() => {
      map.setView(center, zoom);
    }, [center, map, zoom]);

    return null;
  };

  // Company coordinates
  const companyPosition = [11.159072, 124.989012];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will contact you soon!");
  };

  const services = [
    "Tour Transport",
    "Tour Packages",
    "Airport Transfer",
    "Hotel Transfer",
    "Group Transport",
    "Other",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for inquiries, quotes, or assistance
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your contact number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Get in Touch
              </h2>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Office Address
                      </h3>
                      <p className="text-gray-600">
                        Second Floor Building, Palo Public Market
                        <br />
                        Palo, Leyte 6501, Philippines
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Phone Numbers
                      </h3>
                      <p className="text-gray-600">0963 917 4821</p>
                      <p className="text-gray-600">0994 852 9305</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">patcorp2023@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Facebook className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Facebook</h3>
                      <p className="text-gray-600">
                        Pacific Eight Transport Corp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-blue-900 text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: 9:00 AM - 3:00 PM</p>
                  <p className="text-blue-300 mt-4 flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    24/7 emergency support available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Our Location
            </h2>
            <div className="h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <MapContainer
                center={companyPosition}
                zoom={17} // Initial zoom level
                zoomControl={false} // Show zoom controls
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
                className="z-0"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapController center={companyPosition} zoom={15} />
                <CustomMarker
                  position={companyPosition}
                  companyInfo={{
                    name: "PATCORP",
                    address: "Palo Public Market, Palo, Leyte",
                  }}
                />
              </MapContainer>
            </div>

            {/* Map Legend */}
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span>Our Office</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>Visit us during business hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
