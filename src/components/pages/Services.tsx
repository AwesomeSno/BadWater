import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Code2, 
  Cpu, 
  Eye, 
  Home as HomeIcon, 
  Shield, 
  Smartphone, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'ai-development',
      icon: Brain,
      title: 'AI & Machine Learning',
      subtitle: 'Intelligent Solutions for Complex Problems',
      description: 'Custom AI systems, machine learning models, and intelligent automation solutions that transform business operations and decision-making processes.',
      image: 'https://images.unsplash.com/photo-1649877508777-1554357604eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyMjY1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Computer Vision Systems',
        'Natural Language Processing',
        'Predictive Analytics',
        'Deep Learning Models',
        'AI-Powered Automation'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'Python', 'CUDA']
    },
    {
      id: 'robotics',
      icon: Cpu,
      title: 'Robotics & Automation',
      subtitle: 'Precision Engineering Meets Intelligence',
      description: 'Advanced robotic systems with precise control mechanisms, custom controllers, and intelligent automation for industrial and research applications.',
      image: 'https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByb2JvdGljJTIwYXJtJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyMjY1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Robotic Arm Development',
        '3D Motion Controllers',
        'Arduino Integration',
        'Gesture Recognition',
        'Real-time Control Systems'
      ],
      technologies: ['Arduino', 'Unreal Engine', 'C++', 'ROS', 'CAD Design']
    },
    {
      id: 'software-development',
      icon: Code2,
      title: 'Custom Software Development',
      subtitle: 'Tailored Solutions for Modern Challenges',
      description: 'Full-stack development services including custom operating systems, desktop applications, web platforms, and mobile solutions built with cutting-edge technologies.',
      image: 'https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaCUyMHdvcmtzcGFjZSUyMGNvZGluZ3xlbnwxfHx8fDE3NTkyMjY1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Custom Linux OS Development',
        'Cross-platform Applications',
        'Web Application Development',
        'API Development & Integration',
        'Database Design & Optimization'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Linux', 'Docker']
    },
    {
      id: 'home-automation',
      icon: HomeIcon,
      title: 'Smart Home Solutions',
      subtitle: 'Intelligent Living Spaces',
      description: 'Comprehensive home automation systems with IoT integration, intelligent security, camera surveillance, and full-house automation on custom hardware.',
      image: 'https://images.unsplash.com/photo-1728971568218-03a7f87c9e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYXV0b21hdGlvbiUyMHNtYXJ0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyMjY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'IoT Device Integration',
        'Security Camera Systems',
        'Smart Lighting Control',
        'Climate Management',
        'Voice Control Integration'
      ],
      technologies: ['Raspberry Pi', 'IoT Protocols', 'Python', 'MQTT', 'Home Assistant']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your requirements, understand your challenges, and define project scope with precision.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team creates detailed system architecture and user experience designs tailored to your needs.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing ensures high-quality, reliable solutions.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment with ongoing support and maintenance to ensure optimal performance.'
    }
  ];

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
              Our <span className="badwater-text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              From AI-powered solutions to robotic systems, we deliver cutting-edge technology 
              services that transform businesses and create innovative solutions for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#25252A]/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-[#051014] rounded-2xl overflow-hidden hover-lift border border-[#0E79B2]/10 hover:border-[#0E79B2]/30 transition-all duration-500 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051014] via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="bg-gradient-to-r from-[#0E79B2] to-[#BF1363] p-3 rounded-xl">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-[#0E79B2] font-semibold text-sm">{service.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-[#0E79B2]/20 to-[#BF1363]/20 rounded-full text-xs border border-[#0E79B2]/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-[#25252A] rounded-full text-xs text-gray-400">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-[#0E79B2] group-hover:text-[#BF1363] transition-colors">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal/Section */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.section
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container mx-auto px-6">
              <motion.div
                className="max-w-6xl mx-auto bg-[#25252A]/50 rounded-2xl p-8 md:p-12"
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-[#0E79B2] to-[#BF1363] p-3 rounded-xl">
                        {React.createElement(services[activeService].icon, { className: "h-6 w-6 text-white" })}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{services[activeService].title}</h3>
                        <p className="text-[#0E79B2]">{services[activeService].subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {services[activeService].description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold">Key Features:</h4>
                      <ul className="space-y-2">
                        {services[activeService].features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-[#0E79B2]" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {services[activeService].technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-[#0E79B2]/20 to-[#BF1363]/20 rounded-full text-sm border border-[#0E79B2]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <ImageWithFallback
                      src={services[activeService].image}
                      alt={services[activeService].title}
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051014]/50 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Process Section */}
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
              Our <span className="badwater-text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results, from concept to deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0E79B2] to-[#BF1363] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#0E79B2]/50 to-[#BF1363]/50 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
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
              Ready to <span className="badwater-text-gradient">Transform</span> Your Ideas?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Let's discuss how our expertise can help bring your vision to life with cutting-edge technology solutions.
            </p>
            <motion.button
              className="bg-gradient-to-r from-[#0E79B2] to-[#BF1363] hover:from-[#BF1363] hover:to-[#0E79B2] px-10 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};