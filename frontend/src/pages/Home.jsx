import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Shield,
  Clock,
  ThumbsUp,
  Leaf,
  Truck,
  Users,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Award,
  ChevronDown,
} from "lucide-react";

// Counter Component - Moved outside of Home component
const Counter = ({ targetValue, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;

    const startValue = 0;
    const endValue = targetValue;
    const increment = endValue / (duration / 16); // 60 FPS

    let current = startValue;
    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue, duration]);

  const handleInView = () => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      // Trigger the useEffect by setting a state that forces re-render
      setCount(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={handleInView}
      transition={{ duration: 0.5 }}
    >
      {count}
      {suffix}
    </motion.div>
  );
};

const Home = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { scrollY } = useScroll();

  // Parallax effects - reduced intensity
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.5]);
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);

  // Smooth spring for hero scale
  const smoothHeroScale = useSpring(heroScale, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  // Scroll indicator visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: i * 0.1,
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const services = [
    {
      title: "Tour Transport",
      description:
        "Comfortable transportation for tourists anywhere in the Philippines",
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Group Transport",
      description: "Perfect for travel agencies and corporate clients",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "Airport Transfers",
      description: "Reliable pickup and drop-off at all major airports",
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  const features = [
    {
      title: "Safety First",
      description: "Strict safety protocols and well-maintained vehicles",
      icon: <Shield className="h-8 w-8 text-green-500" />,
      stats: "100%",
      statsLabel: "Safety Record",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer service for your peace of mind",
      icon: <Clock className="h-8 w-8 text-green-500" />,
      stats: "24/7",
      statsLabel: "Availability",
    },
    {
      title: "Customer Satisfaction",
      description: "Committed to providing exceptional service",
      icon: <ThumbsUp className="h-8 w-8 text-green-500" />,
      stats: "98%",
      statsLabel: "Satisfaction",
    },
    {
      title: "Eco-Friendly",
      description: "Environmentally conscious transport solutions",
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      stats: "50+",
      statsLabel: "Trees Planted",
    },
  ];

  const fleet = [
    {
      title: "Tourist Coaches",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      capacity: "45 passengers",
      features: ["AC", "Reclining Seats", "Entertainment"],
    },
    {
      title: "Executive Vans",
      image:
        "https://images.unsplash.com/photo-1590362891591-012e13426898?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      capacity: "12 passengers",
      features: ["Leather Seats", "WiFi", "Refreshments"],
    },
    {
      title: "Comfortable Interiors",
      image:
        "https://images.unsplash.com/photo-1601584115191-9e3b7d7e8b3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      capacity: "Luxury Experience",
      features: ["Climate Control", "Clean", "Spacious"],
    },
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Travel Agency Owner",
      content:
        "PATCORP has been our trusted partner for years. Their service is impeccable and reliable.",
      rating: 5,
    },
    {
      name: "John Reyes",
      role: "Corporate Client",
      content:
        "Professional drivers and well-maintained vehicles. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Tourist",
      content:
        "Made our trip to the Philippines unforgettable. Comfortable and safe transport.",
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white min-h-screen flex items-center overflow-hidden">
        {/* Parallax Background - Fixed z-index and positioning */}
        <motion.div
          style={{
            scale: smoothHeroScale,
            opacity: heroOpacity,
            y: heroY,
          }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/images/hero/photo-1544620347-c4fd4a3d5957.jpg)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70" />
        </motion.div>

        <motion.div
          variants={{
            initial: { y: 0 },
            animate: {
              y: [-10, 10, -10],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
          initial="initial"
          animate="animate"
          className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl z-1"
        />
        <motion.div
          variants={{
            initial: { y: 0 },
            animate: {
              y: [-15, 15, -15],
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
          initial="initial"
          animate="animate"
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-1"
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-20 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto text-center sm:text-left lg:mx-0"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight relative z-10"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              <span className="block text-white">Reliable & Comfortable</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
                Tourist Transportation
              </span>
              <span className="block text-white">Across the Philippines</span>
            </motion.h1>

            {/* Subheadline - Enhanced visibility */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-lg lg:text-lg mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0 relative z-10"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
            >
              Providing safe, seamless, and environmentally conscious transport
              solutions for travelers worldwide.
            </motion.p>

            {/* CTA Buttons - Enhanced visibility and positioning */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start relative z-10"
            >
              <motion.div
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/booking"
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-green-500/25 w-full"
                >
                  <span>Book Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.1,
                    },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20 w-full"
                >
                  Request Quote
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2,
                    },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold transition-all duration-300 w-full"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats - Enhanced visibility with counter animation */}
            <motion.div
              variants={itemVariants}
              className="hidden sm:grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-8 pt-8 border-t border-white/20 relative z-10"
            >
              <div>
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Counter targetValue={500} suffix="+" />
                </motion.div>
                <div className="text-xs sm:text-sm text-blue-200">
                  Happy Clients
                </div>
              </div>
              <div>
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Counter targetValue={50} suffix="+" />
                </motion.div>
                <div className="text-xs sm:text-sm text-blue-200">
                  Fleet Size
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  24/7
                </motion.div>
                <div className="text-xs sm:text-sm text-blue-200">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator with Fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollIndicator ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <span className="text-xs sm:text-sm text-white/70 uppercase tracking-wider">
              Scroll
            </span>
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Services
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive transportation solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block p-3 sm:p-4 bg-blue-50 rounded-xl mb-4"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-blue-900">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base group/link"
                  >
                    Learn More
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PATCORP */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose PATCORP
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group text-center p-4 sm:p-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl mb-3 sm:mb-4"
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-blue-900">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  {feature.description}
                </p>

                <div className="text-lg sm:text-xl font-bold text-blue-600">
                  {feature.stats}
                </div>
                <div className="text-xs text-gray-500">
                  {feature.statsLabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Showcase */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Modern Fleet
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Well-maintained, comfortable vehicles for your journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {fleet.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                    {vehicle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 mb-2">
                    {vehicle.capacity}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Trusted by travelers and businesses across the Philippines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div>
                  <p className="font-semibold text-blue-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
              Ready to Book Your Transport?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-blue-200">
              Contact us now for a quick response within 24 hours
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:09639174821"
                className="flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/50"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">0963 917 4821</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:patcorp2023@gmail.com"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/30"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Email Us</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
