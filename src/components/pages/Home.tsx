import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Cpu, Eye, Home as HomeIcon, Zap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const Home: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies and modern frameworks.',
    },
    {
      icon: Eye,
      title: 'AI & Computer Vision',
      description: 'Advanced AI systems and computer vision applications for real-world problem solving.',
    },
    {
      icon: Cpu,
      title: 'Robotics',
      description: 'Innovative robotic systems with precise control and intelligent automation.',
    },
    {
      icon: HomeIcon,
      title: 'Home Automation',
      description: 'Smart home solutions with IoT integration and intelligent security systems.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '2', label: 'Co-Founders' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0E79B2]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#BF1363]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-[#8B9474]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="badwater-text-gradient">BadWater</span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Innovative tech company specializing in <span className="text-[#0E79B2]">AI</span>, 
                <span className="text-[#BF1363]"> robotics</span>, and 
                <span className="text-[#8B9474]"> cutting-edge software solutions</span>
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-[#0E79B2] to-[#BF1363] hover:from-[#BF1363] hover:to-[#0E79B2] px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Our Work</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-[#0E79B2] text-[#0E79B2] hover:bg-[#0E79B2] hover:text-white transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Floating Icons Animation */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-1/4 left-1/6 text-[#0E79B2]/30"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Code className="h-12 w-12" />
              </motion.div>
              
              <motion.div
                className="absolute top-1/3 right-1/6 text-[#BF1363]/30"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Cpu className="h-10 w-10" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-1/3 left-1/12 text-[#8B9474]/30"
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <Zap className="h-8 w-8" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#0E79B2] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#0E79B2] rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
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
              What We <span className="badwater-text-gradient">Create</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From AI-powered solutions to robotic systems, we build the future with precision and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-[#051014] rounded-2xl p-6 hover-lift border border-[#0E79B2]/10 hover:border-[#0E79B2]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-r from-[#0E79B2] to-[#BF1363] p-3 rounded-xl w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold badwater-text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0E79B2]/10 to-[#BF1363]/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Build the <span className="badwater-text-gradient">Future</span>?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Join us in creating innovative solutions that push the boundaries of technology.
              Let's transform your ideas into reality.
            </p>
            <motion.button
              className="bg-gradient-to-r from-[#0E79B2] to-[#BF1363] hover:from-[#BF1363] hover:to-[#0E79B2] px-10 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};