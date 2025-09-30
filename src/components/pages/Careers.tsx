import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Briefcase, 
  Heart, 
  Zap, 
  Code, 
  Send,
  X,
  CheckCircle
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner@2.0.3';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
    experience: '',
    portfolio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Innovation Time',
      description: '20% time for personal projects and exploration of cutting-edge technologies.'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with brilliant minds working on exciting challenges.'
    },
    {
      icon: Code,
      title: 'Latest Tech',
      description: 'Access to the latest tools, technologies, and hardware for development.'
    }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      salary: '$120,000 - $180,000',
      description: 'Lead the development of cutting-edge AI systems and machine learning models. Work on computer vision, natural language processing, and deep learning projects.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Strong Python programming skills',
        'Experience with TensorFlow, PyTorch, or similar frameworks',
        'Computer Vision or NLP expertise preferred',
        'PhD in Computer Science, AI, or related field preferred'
      ],
      responsibilities: [
        'Design and implement AI/ML algorithms and models',
        'Collaborate with robotics team on intelligent systems',
        'Optimize model performance and deployment',
        'Mentor junior developers and conduct code reviews',
        'Research and prototype new AI technologies'
      ],
      posted: '2024-01-15'
    },
    {
      id: 2,
      title: 'Robotics Engineer',
      department: 'Hardware',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      salary: '$100,000 - $160,000',
      description: 'Design and develop advanced robotic systems with precision control mechanisms. Work on Arduino-based projects and 3D control systems.',
      requirements: [
        '4+ years experience in robotics development',
        'Proficiency in C/C++ and Arduino programming',
        'Experience with mechanical design and CAD software',
        'Knowledge of control systems and kinematics',
        'Bachelor\'s degree in Robotics, Mechanical, or Electrical Engineering'
      ],
      responsibilities: [
        'Design mechanical systems and control algorithms',
        'Develop Arduino-based control systems',
        'Create 3D controllers and gesture recognition systems',
        'Collaborate with AI team on intelligent robotics',
        'Test and validate robotic systems'
      ],
      posted: '2024-01-10'
    },
    {
      id: 3,
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90,000 - $140,000',
      description: 'Build modern web applications and contribute to our custom operating system development. Work with React, Node.js, and Linux systems.',
      requirements: [
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, and modern web technologies',
        'Experience with Linux system administration',
        'Database design and optimization skills',
        'Understanding of security best practices'
      ],
      responsibilities: [
        'Develop web applications using React and Node.js',
        'Contribute to custom OS development projects',
        'Design and implement RESTful APIs',
        'Optimize application performance and security',
        'Participate in code reviews and technical discussions'
      ],
      posted: '2024-01-08'
    },
    {
      id: 4,
      title: 'IoT Systems Engineer',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Full-time',
      salary: '$95,000 - $150,000',
      description: 'Develop smart home automation systems and IoT solutions. Work with Raspberry Pi, sensor integration, and home automation protocols.',
      requirements: [
        '3+ years experience in IoT development',
        'Proficiency in Python and embedded systems',
        'Experience with Raspberry Pi and Arduino',
        'Knowledge of IoT protocols (MQTT, HTTP, WebSocket)',
        'Understanding of network security and encryption'
      ],
      responsibilities: [
        'Design IoT architectures for smart home systems',
        'Develop sensor integration and automation logic',
        'Implement security measures for IoT devices',
        'Create mobile and web interfaces for control systems',
        'Optimize system performance and reliability'
      ],
      posted: '2024-01-05'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100,000 - $155,000',
      description: 'Manage our development infrastructure and deployment pipelines. Work with cloud technologies, containerization, and CI/CD systems.',
      requirements: [
        '4+ years DevOps or system administration experience',
        'Proficiency in Docker, Kubernetes, and cloud platforms',
        'Experience with CI/CD pipelines and automation',
        'Strong Linux administration skills',
        'Knowledge of monitoring and logging tools'
      ],
      responsibilities: [
        'Design and maintain cloud infrastructure',
        'Implement CI/CD pipelines and automation',
        'Monitor system performance and reliability',
        'Manage containerized applications and orchestration',
        'Ensure security and compliance across environments'
      ],
      posted: '2024-01-03'
    },
    {
      id: 6,
      title: 'Computer Vision Researcher',
      department: 'Research',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      salary: '$110,000 - $170,000',
      description: 'Research and develop advanced computer vision algorithms for gesture recognition and real-time processing systems.',
      requirements: [
        'PhD in Computer Vision, AI, or related field',
        'Strong background in OpenCV and computer vision algorithms',
        'Experience with real-time image processing',
        'Publication record in top-tier conferences/journals',
        'Proficiency in Python and C++'
      ],
      responsibilities: [
        'Research novel computer vision algorithms',
        'Develop gesture recognition systems',
        'Optimize algorithms for real-time performance',
        'Collaborate with engineering teams on implementation',
        'Publish research findings and represent company at conferences'
      ],
      posted: '2024-01-01'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleApply = (jobTitle: string) => {
    setApplicationData({ ...applicationData, position: jobTitle });
    setSelectedJob(null);
    // Scroll to application form
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Application submitted successfully! We\'ll review it and get back to you soon.');
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      coverLetter: '',
      experience: '',
      portfolio: ''
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
              Join Our <span className="badwater-text-gradient">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Be part of a dynamic team that's pushing the boundaries of technology. 
              Work on cutting-edge projects in AI, robotics, and innovative software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-[#0E79B2] to-[#BF1363] hover:from-[#BF1363] hover:to-[#0E79B2] px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View Open Positions</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Work at <span className="badwater-text-gradient">BadWater</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer more than just a job - we provide an environment where innovation thrives 
              and careers flourish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-[#0E79B2] to-[#BF1363] p-4 rounded-2xl w-fit mx-auto">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="job-listings" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Open <span className="badwater-text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join our team and help shape the future of technology. We're always looking for 
              talented individuals who share our passion for innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-[#25252A]/50 rounded-2xl p-6 hover-lift border border-[#0E79B2]/10 hover:border-[#0E79B2]/30 transition-all duration-500 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedJob(job.id)}
                whileHover={{ y: -5 }}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-[#0E79B2] transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-[#BF1363] text-sm font-semibold">{job.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-[#0E79B2]/20 to-[#BF1363]/20 rounded-full text-xs border border-[#0E79B2]/30">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {job.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="h-4 w-4 mr-2 text-[#0E79B2]" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign className="h-4 w-4 mr-2 text-[#0E79B2]" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="h-4 w-4 mr-2 text-[#0E79B2]" />
                      Posted {new Date(job.posted).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#051014]">
                    <span className="text-[#0E79B2] group-hover:text-[#BF1363] text-sm font-semibold transition-colors">
                      View Details
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#0E79B2] group-hover:text-[#BF1363] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              className="bg-[#051014] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#0E79B2]/20"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const job = jobListings.find(j => j.id === selectedJob);
                if (!job) return null;

                return (
                  <div className="p-8 space-y-8">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold">{job.title}</h2>
                        <div className="flex items-center space-x-4 text-gray-400">
                          <span className="text-[#BF1363] font-semibold">{job.department}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                        <div className="text-2xl font-bold badwater-text-gradient">
                          {job.salary}
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedJob(null)}
                        className="p-2 bg-[#25252A] rounded-full hover:bg-[#0E79B2] transition-colors"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">About This Role</h3>
                      <p className="text-gray-300 leading-relaxed">{job.description}</p>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Requirements</h3>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-[#0E79B2] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-[#0E79B2] to-[#BF1363] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Apply Button */}
                    <div className="flex space-x-4 pt-6 border-t border-[#25252A]">
                      <Button
                        onClick={() => handleApply(job.title)}
                        className="flex-1 bg-gradient-to-r from-[#0E79B2] to-[#BF1363] hover:from-[#BF1363] hover:to-[#0E79B2] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                      >
                        Apply for this Position
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setSelectedJob(null)}
                        className="border-[#0E79B2] text-[#0E79B2] hover:bg-[#0E79B2] hover:text-white"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-[#25252A]/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Apply <span className="badwater-text-gradient">Now</span>
              </h2>
              <p className="text-xl text-gray-400">
                Ready to join our team? Submit your application and let's start a conversation.
              </p>
            </div>

            <div className="bg-[#051014] rounded-2xl p-8 border border-[#0E79B2]/10">
              <form onSubmit={handleSubmitApplication} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name *</label>
                    <Input
                      name="name"
                      value={applicationData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="bg-[#25252A] border-[#0E79B2]/20 focus:border-[#0E79B2] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="bg-[#25252A] border-[#0E79B2]/20 focus:border-[#0E79B2] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                    <Input
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="bg-[#25252A] border-[#0E79B2]/20 focus:border-[#0E79B2] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Position *</label>
                    <Input
                      name="position"
                      value={applicationData.position}
                      onChange={handleInputChange}
                      placeholder="Position you're applying for"
                      required
                      className="bg-[#25252A] border-[#0E79B2]/20 focus:border-[#0E79B2] text-white"
                    />
                  </div>
                </div>

                {/* Portfolio & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Years of Experience</label>
                    <Input
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g., 5 years"
                      className="bg-[#25252A] border-[#0E79B2]/20 focus:border-[#0E79B2] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Portfolio/GitHub URL</label>
                    <Input
                      name="portfolio"
                      value={applicationData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://github.com/yourusername"
                      className="bg-[#25252A] border-[#0E79B2]/20 focus:border-[#0E79B2] text-white"
                    />
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Cover Letter *</label>
                  <Textarea
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                    rows={6}
                    required
                    className="bg-[#25252A] border-[#0E79B2]/20 focus:border-[#0E79B2] text-white resize-none"
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
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </Button>
                </motion.div>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this application, you agree to our privacy policy. 
                  We'll contact you within 48 hours if your profile matches our requirements.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};