import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Calendar, 
  Camera, 
  Cpu, 
  Eye, 
  Github, 
  Home as HomeIcon, 
  Lock, 
  Monitor, 
  Smartphone,
  X,
  ExternalLink,
  Award,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'ai', label: 'AI & Vision' },
    { id: 'os', label: 'Operating Systems' },
    { id: 'automation', label: 'Automation' },
    { id: 'security', label: 'Security' }
  ];

  const products = [
    {
      id: 1,
      category: 'robotics',
      title: 'Robotic Arm & 3D Controller',
      subtitle: 'Precision Robotics with Gesture Control',
      description: 'Arduino-powered robotic arm with custom Unreal Engine 3D controller for precise hand gesture recognition and control.',
      image: 'https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByb2JvdGljJTIwYXJtJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyMjY1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Production Ready',
      technologies: ['Arduino', 'Unreal Engine', 'C++', '3D Modeling', 'Hardware Design'],
      features: [
        'Real-time gesture recognition',
        'Precise 6-axis movement control',
        '3D visualization interface',
        'Custom hardware integration',
        'Scalable control system'
      ],
      achievements: [
        'State-level robotics competition winner',
        'Featured in tech innovation expo',
        'Patent application submitted'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByb2JvdGljJTIwYXJtJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyMjY1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 2,
      category: 'ai',
      title: 'Computer Vision Hand Gesture System',
      subtitle: 'AI-Powered Gesture Recognition',
      description: 'Real-time gesture detection system using OpenCV and Arduino for intuitive human-computer interaction.',
      image: 'https://images.unsplash.com/photo-1649877508777-1554357604eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyMjY1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Production Ready',
      technologies: ['OpenCV', 'Python', 'Machine Learning', 'Arduino', 'Computer Vision'],
      features: [
        'Real-time hand tracking',
        'Multi-gesture recognition',
        'Low-latency processing',
        'Hardware integration',
        'Customizable gesture library'
      ],
      achievements: [
        'Published research paper',
        'Open source community adoption',
        '95% accuracy rate achieved'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1649877508777-1554357604eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyMjY1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 3,
      category: 'os',
      title: 'Custom Linux-based OS',
      subtitle: 'Secure High-Performance Operating System',
      description: 'Custom operating system built on Linux kernel, designed for security, performance, and multi-platform compatibility.',
      image: 'https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaCUyMHdvcmtzcGFjZSUyMGNvZGluZ3xlbnwxfHx8fDE3NTkyMjY1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Beta Testing',
      technologies: ['Linux Kernel', 'C/C++', 'Shell Scripting', 'System Design', 'Security'],
      features: [
        'Enhanced security protocols',
        'Optimized performance',
        'Multi-platform support',
        'Custom package manager',
        'Minimal resource footprint'
      ],
      achievements: [
        'Successfully boots on multiple architectures',
        'Security audit completed',
        'Community feedback incorporated'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaCUyMHdvcmtzcGFjZSUyMGNvZGluZ3xlbnwxfHx8fDE3NTkyMjY1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 4,
      category: 'os',
      title: 'ObscuraOS & Obscura Engine',
      subtitle: 'AI-Powered Research & Encryption Platform',
      description: 'ObscuraOS for encryption and high usability; Obscura Engine as an AI-powered research tool for deep internet and document search.',
      image: 'https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaCUyMHdvcmtzcGFjZSUyMGNvZGluZ3xlbnwxfHx8fDE3NTkyMjY1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Development',
      technologies: ['AI/ML', 'Encryption', 'Python', 'Web Crawling', 'Natural Language Processing'],
      features: [
        'Advanced encryption algorithms',
        'AI-powered search capabilities',
        'Deep web research tools',
        'Secure document handling',
        'Intuitive user interface'
      ],
      achievements: [
        'Prototype completed',
        'AI model training in progress',
        'Security framework established'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaCUyMHdvcmtzcGFjZSUyMGNvZGluZ3hlbnwxfHx8fDE3NTkyMjY1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 5,
      category: 'security',
      title: 'ZeroVault',
      subtitle: 'Encrypted Notes Application',
      description: 'Secure notes application built with Python/Tkinter and advanced cryptography for completely secure local storage.',
      image: 'https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaCUyMHdvcmtzcGFjZSUyMGNvZGluZ3hlbnwxfHx8fDE3NTkyMjY1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Production Ready',
      technologies: ['Python', 'Tkinter', 'Cryptography', 'AES Encryption', 'SQLite'],
      features: [
        'AES-256 encryption',
        'Local-only storage',
        'Zero-knowledge architecture',
        'Cross-platform compatibility',
        'Backup & recovery system'
      ],
      achievements: [
        'Security audit passed',
        'Open source release',
        '10,000+ downloads'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaCUyMHdvcmtzcGFjZSUyMGNvZGluZ3hlbnwxfHx8fDE3NTkyMjY1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 6,
      category: 'automation',
      title: 'Home Automation & Security System',
      subtitle: 'Intelligent Smart Home Platform',
      description: 'Comprehensive home automation system with intelligent camera surveillance, IoT device integration, and full-house automation on custom Linux hardware.',
      image: 'https://images.unsplash.com/photo-1728971568218-03a7f87c9e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYXV0b21hdGlvbiUyMHNtYXJ0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyMjY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Production Ready',
      technologies: ['Raspberry Pi', 'IoT', 'Computer Vision', 'Python', 'Home Assistant'],
      features: [
        'AI-powered security cameras',
        'Voice control integration',
        'Smart device automation',
        'Energy monitoring',
        'Mobile app control'
      ],
      achievements: [
        'Deployed in 50+ homes',
        'Award-winning design',
        'Featured in smart home magazine'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1728971568218-03a7f87c9e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYXV0b21hdGlvbiUyMHNtYXJ0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyMjY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production Ready':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'Beta Testing':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'Development':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Production Ready':
        return <Award className="h-4 w-4" />;
      case 'Beta Testing':
        return <Zap className="h-4 w-4" />;
      case 'Development':
        return <Monitor className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
              Our <span className="badwater-text-gradient">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Innovative solutions born from experimental projects, state-level competitions, 
              and cutting-edge research. Each product represents our commitment to technological excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#25252A]/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#0E79B2] to-[#BF1363] text-white'
                    : 'bg-[#051014] text-gray-400 hover:text-white hover:bg-[#25252A] border border-[#0E79B2]/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-[#25252A]/50 rounded-2xl overflow-hidden hover-lift border border-[#0E79B2]/10 hover:border-[#0E79B2]/30 transition-all duration-500 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedProduct(product.id)}
                  whileHover={{ y: -5 }}
                  layout
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#25252A] via-transparent to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border flex items-center space-x-1 ${getStatusColor(product.status)}`}>
                      {getStatusIcon(product.status)}
                      <span>{product.status}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                      <p className="text-[#0E79B2] text-sm">{product.subtitle}</p>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#051014] rounded-md text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {product.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-[#051014] rounded-md text-xs text-gray-400">
                          +{product.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[#0E79B2] group-hover:text-[#BF1363] transition-colors">
                        <span className="text-sm font-semibold">View Details</span>
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="p-2 bg-[#051014] rounded-lg hover:bg-[#0E79B2] transition-colors">
                          <Github className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-[#051014] rounded-lg hover:bg-[#0E79B2] transition-colors">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-[#051014] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#0E79B2]/20"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const product = products.find(p => p.id === selectedProduct);
                if (!product) return null;

                return (
                  <div className="relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <X className="h-6 w-6 text-white" />
                    </button>

                    {/* Header Image */}
                    <div className="relative h-64 md:h-80">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#051014] via-transparent to-transparent"></div>
                      
                      <div className="absolute bottom-6 left-6">
                        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(product.status)}`}>
                          {getStatusIcon(product.status)}
                          <span>{product.status}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                      {/* Title & Description */}
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                          <p className="text-[#0E79B2] text-lg">{product.subtitle}</p>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {product.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-gradient-to-r from-[#0E79B2] to-[#BF1363] rounded-full flex items-center justify-center flex-shrink-0">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                          {product.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-gradient-to-r from-[#0E79B2]/20 to-[#BF1363]/20 rounded-full text-sm border border-[#0E79B2]/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">Achievements & Recognition</h3>
                        <div className="space-y-3">
                          {product.achievements.map((achievement) => (
                            <div key={achievement} className="flex items-center space-x-3">
                              <Award className="h-5 w-5 text-[#BF1363]" />
                              <span className="text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#25252A]">
                        <button className="flex-1 bg-gradient-to-r from-[#0E79B2] to-[#BF1363] hover:from-[#BF1363] hover:to-[#0E79B2] px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2">
                          <Github className="h-5 w-5" />
                          <span>View on GitHub</span>
                        </button>
                        <button className="flex-1 border-2 border-[#0E79B2] text-[#0E79B2] hover:bg-[#0E79B2] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                          <ExternalLink className="h-5 w-5" />
                          <span>Live Demo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 bg-[#25252A]/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold badwater-text-gradient mb-2">{products.length}</div>
              <div className="text-gray-400">Products Built</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold badwater-text-gradient mb-2">15+</div>
              <div className="text-gray-400">Technologies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold badwater-text-gradient mb-2">10+</div>
              <div className="text-gray-400">Awards Won</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold badwater-text-gradient mb-2">100%</div>
              <div className="text-gray-400">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};