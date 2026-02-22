import React from "react";
import { Shield, Heart, Users, Globe, Leaf, Clock } from "lucide-react";

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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            Our Leadership
          </h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">
                Benjie C. Belarmino
              </h3>
              <p className="text-lg text-gray-600 mb-4">President & CEO</p>
              <p className="text-gray-700">
                Leading PATCORP with vision and dedication to provide
                exceptional transport services across the Philippines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
