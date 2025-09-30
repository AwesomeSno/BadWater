import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@badwater.tech', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Careers', href: '#' },
  ];

  const services = [
    { label: 'AI Development', href: '#' },
    { label: 'Robotics', href: '#' },
    { label: 'Software Solutions', href: '#' },
    { label: 'Home Automation', href: '#' },
  ];

  return (
    <footer className="bg-[#25252A] border-t border-[#0E79B2]/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#0E79B2] to-[#BF1363] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BW</span>
              </div>
              <span className="text-xl font-bold badwater-text-gradient">BadWater</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Innovative tech company specializing in AI, robotics, and cutting-edge software solutions. 
              Building the future with advanced technology and sleek design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-[#051014] rounded-lg hover:bg-gradient-to-r hover:from-[#0E79B2] hover:to-[#BF1363] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-[#0E79B2] transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <motion.a
                    href={service.href}
                    className="text-gray-400 hover:text-[#0E79B2] transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {service.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#0E79B2]" />
                <span className="text-gray-400 text-sm">contact@badwater.tech</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#0E79B2]" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#0E79B2] mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Tech Innovation Hub<br />
                  Silicon Valley, CA
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-[#0E79B2]/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 BadWater. All rights reserved. Built with innovation and precision.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#0E79B2] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0E79B2] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};