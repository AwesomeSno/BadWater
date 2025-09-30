import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner@2.0.3';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@badwater.tech',
      link: 'mailto:contact@badwater.tech'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Silicon Valley, CA\nTech Innovation Hub',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM\nWeekends: By Appointment',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const projectTypes = [
    'AI & Machine Learning',
    'Robotics Development',
    'Software Development',
    'Home Automation',
    'Custom OS Development',
    'Security Solutions',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      projectType: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#0E79B2]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#BF1363]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              Get In <span className="badwater-text-gradient">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Ready to transform your ideas into reality? Let's discuss your project and 
              explore how our expertise can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-4">
                  Let's Start a <span className="badwater-text-gradient">Conversation</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  we're here to help. Our team specializes in turning complex technical challenges 
                  into elegant solutions.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="bg-[#25252A]/50 rounded-2xl p-6 hover-lift border border-[#0E79B2]/10 hover:border-[#0E79B2]/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-gradient-to-r from-[#0E79B2] to-[#BF1363] p-3 rounded-xl w-fit mb-4">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                      {info.details}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-[#25252A]/50 rounded-xl hover:bg-gradient-to-r hover:from-[#0E79B2] hover:to-[#BF1363] transition-all duration-300 group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <motion.div
                className="bg-gradient-to-r from-[#0E79B2]/20 to-[#BF1363]/20 border border-[#0E79B2]/30 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-[#0E79B2]" />
                  <h3 className="text-lg font-semibold">Quick Response Guarantee</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  We typically respond to all inquiries within 24 hours. For urgent matters, 
                  don't hesitate to call us directly.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-[#25252A]/50 rounded-2xl p-8 border border-[#0E79B2]/10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="bg-[#051014] border-[#0E79B2]/20 focus:border-[#0E79B2] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="bg-[#051014] border-[#0E79B2]/20 focus:border-[#0E79B2] text-white"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium text-gray-300">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#051014] border border-[#0E79B2]/20 rounded-md focus:border-[#0E79B2] focus:outline-none text-white"
                  >
                    <option value="" className="bg-[#051014]">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#051014]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-[#051014] border-[#0E79B2]/20 focus:border-[#0E79B2] text-white"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project ideas, requirements, and any specific questions you have..."
                    rows={6}
                    required
                    className="bg-[#051014] border-[#0E79B2]/20 focus:border-[#0E79B2] text-white resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#0E79B2] to-[#BF1363] hover:from-[#BF1363] hover:to-[#0E79B2] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </motion.div>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#25252A]/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="badwater-text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What types of projects do you specialize in?",
                answer: "We specialize in AI & machine learning, robotics development, custom software solutions, home automation systems, and security applications. Our expertise spans from hardware integration to advanced software development."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity and scope. Simple applications may take 2-4 weeks, while complex systems like custom OS development or advanced robotics can take 3-6 months. We provide detailed timelines during the consultation phase."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive support packages including maintenance, updates, bug fixes, and feature enhancements. Our support ensures your solutions continue to perform optimally as your needs evolve."
              },
              {
                question: "Can you work on existing projects or systems?",
                answer: "Absolutely! We can analyze, improve, and extend existing systems. Whether you need debugging, performance optimization, or feature additions, our team can seamlessly integrate with your current setup."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#051014] rounded-2xl p-6 border border-[#0E79B2]/10 hover:border-[#0E79B2]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 text-[#0E79B2]">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to <span className="badwater-text-gradient">Innovate</span>?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Don't let technical challenges hold back your vision. Let's collaborate to create 
              something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-[#0E79B2] to-[#BF1363] hover:from-[#BF1363] hover:to-[#0E79B2] px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-[#0E79B2] text-[#0E79B2] hover:bg-[#0E79B2] hover:text-white transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};