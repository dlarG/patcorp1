/* eslint-disable no-unused-vars */
import React from "react";
import {
  Shield,
  Heart,
  Users,
  Globe,
  Leaf,
  Clock,
  Award,
  Mail,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Safety",
      description:
        "We prioritize the safety of our passengers above all else with rigorous maintenance and training programs.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Reliability",
      description:
        "We consistently deliver on our promises, ensuring punctual and dependable service every time.",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Customer Satisfaction",
      description:
        "Our customers' comfort and satisfaction are at the heart of everything we do.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Cultural Sensitivity",
      description:
        "We respect and embrace the diverse cultures of our passengers and the communities we serve.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-blue-600" />,
      title: "Environmental Sustainability",
      description:
        "We are committed to reducing our environmental impact through sustainable practices.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About PATCORP</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in Philippine tourism transportation since 2022
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pacific Eight Transport Corp. was founded in 2022 during the
                COVID-19 pandemic. While many businesses struggled, our founder
                saw an opportunity to create a tourist transport corporation to
                help investors recover and build a sustainable business. As
                travel demand returned, PATCORP grew stronger and became a
                reliable transport partner for tourists across the Philippines.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we stand as a testament to resilience and vision,
                providing premium transportation services that connect travelers
                to the beauty of the Philippines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Providing seamless, reliable, and environmentally conscious
                transportation solutions for both local and international
                travelers, ensuring comfort, safety, punctuality, and customer
                satisfaction.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the preferred and trusted transport partner, setting the
                standard for excellence through innovation, sustainability, and
                exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Meet Our President
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visionary leadership driving excellence in Philippine tourism
              transportation
            </p>
          </motion.div>

          {/* Leadership Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image Section - Left Half */}
                <div className="relative h-80 md:h-auto overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
                  <img
                    src="/images/owner.jpeg"
                    alt="Benjie C. Belarmino - President & CEO of PATCORP"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />

                  {/* Name Overlay on Image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Benjie C. Belarmino
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full">
                          President & CEO
                        </span>
                        <div className="flex gap-2">
                          <a
                            href="#"
                            className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
                            aria-label="Email"
                          >
                            <Mail className="h-4 w-4 text-white" />
                          </a>
                          <a
                            href="#"
                            className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
                            aria-label="LinkedIn"
                          >
                            <svg
                              className="h-4 w-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content Section - Right Half */}
                <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Quote or Motto */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="relative"
                    >
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-6 -translate-y-4 h-12 w-12 text-blue-100"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-xl text-gray-700 italic leading-relaxed pl-6">
                        "Building a sustainable future for Philippine tourism
                        through reliable and comfortable transportation."
                      </p>
                    </motion.div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      Leading PATCORP with vision and dedication to provide
                      exceptional transport services across the Philippines.
                      With over two decades of experience in the transportation
                      industry, Benjie has transformed PATCORP into a trusted
                      name in Philippine tourism.
                    </p>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                      onClick={() => (window.location.href = "/about")}
                    >
                      Learn More About Our Leadership
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Optional: Company Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          >
            {[
              { label: "Visionary Leadership", value: "Strategic Growth" },
              { label: "Industry Expertise", value: "5+ Years" },
              { label: "Community Focus", value: "Local Partnership" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg"
              >
                <div className="text-sm font-semibold text-blue-900">
                  {item.label}
                </div>
                <div className="text-xs text-gray-600">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
