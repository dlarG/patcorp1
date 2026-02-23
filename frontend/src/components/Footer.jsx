import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Ship } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Ship className="h-8 w-8 text-blue-300" />
              <span className="text-xl font-bold">PATCORP</span>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              SEC Registration No.: 2022110074332-09
              <br />
              PhilGEPS Cert. Ref. No.: 20231136859020384984
              <br />
              Tax ID No.: 617984096-00000
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-blue-200 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blue-200 hover:text-white transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/fleet"
                  className="text-blue-200 hover:text-white transition"
                >
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-blue-200 hover:text-white transition"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200 text-sm">
                  Second Floor Building, Palo Public Market
                  <br />
                  Palo, Leyte 6501, Philippines
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">09639174821 / 09948529305</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">patcorp2023@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">
                  Pacific Eight Transport Corp.
                </span>
              </div>
            </div>
          </div>

          {/* President */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leadership</h3>
            <p className="text-blue-200">
              President/CEO:
              <br />
              <span className="text-white font-semibold">
                Benjie C. Belarmino
              </span>
            </p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Pacific Eight Transport Corp. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
