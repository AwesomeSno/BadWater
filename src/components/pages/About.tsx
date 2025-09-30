import React from 'react';
import { motion } from 'motion/react';
import { Award, Code2, Lightbulb, Target, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const About: React.FC = () => {
  const founders = [
    {
      name: 'Harinandan J V',
      role: 'Co-founder & Lead Developer',
      image: 'https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzU5MjA4NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      expertise: ['OS Development', 'AI Systems', 'Computer Vision', 'Robotics', 'Full-Stack Development'],
      description: 'Experienced developer with expertise in operating system development, AI systems, computer vision, and robotics. Passionate about creating innovative solutions that bridge the gap between complex technology and user-friendly applications.'
    },
    {
      name: 'Abhishek A S',
      role: 'Co-founder & Tech Collaborator',
      image: 'https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzU5MjA4NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      expertise: ['Software Solutions', 'Prototyping', 'Project Execution', 'System Architecture'],
      description: 'Specializes in software solutions, rapid prototyping, and project execution. Brings strategic thinking and technical expertise to transform innovative ideas into successful products and systems.'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and methodologies.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every project is executed with meticulous attention to detail and unwavering focus on quality.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'We build high-performance solutions that are optimized for speed, efficiency, and scalability.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaborative problem-solving to achieve extraordinary results.'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'State-Level Recognition',
      description: 'Multiple awards at state-level technology competitions and innovation expos.'
    },
    {
      icon: Code2,
      title: 'Open Source Contributions',
      description: 'Active contributors to open source projects and technology communities.'
    },
    {
      icon: Lightbulb,
      title: 'Patent Applications',
      description: 'Several innovative solutions under patent review for unique technological approaches.'
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
              About <span className="badwater-text-gradient">BadWater</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We are a dynamic tech company founded on the principles of innovation, precision, and 
              collaborative excellence. Our mission is to create cutting-edge solutions that transform 
              industries and enhance lives through advanced technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
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
              Meet Our <span className="badwater-text-gradient">Founders</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The visionary minds behind BadWater's innovative solutions and technological breakthroughs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="bg-[#051014] rounded-2xl p-8 hover-lift border border-[#0E79B2]/10 hover:border-[#0E79B2]/30 transition-all duration-300"
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#0E79B2] to-[#BF1363] p-1">
                      <ImageWithFallback
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#0E79B2] to-[#BF1363] rounded-full flex items-center justify-center">
                      <Code2 className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-[#0E79B2] font-semibold mb-4">{founder.role}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">{founder.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Expertise:</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {founder.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gradient-to-r from-[#0E79B2]/20 to-[#BF1363]/20 rounded-full text-sm border border-[#0E79B2]/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="badwater-text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The core principles that drive our work and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-[#0E79B2] to-[#BF1363] p-4 rounded-2xl w-fit mx-auto">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              Our <span className="badwater-text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-[#051014] rounded-2xl p-6 text-center space-y-4 hover-lift border border-[#0E79B2]/10 hover:border-[#0E79B2]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-[#0E79B2] to-[#BF1363] p-3 rounded-xl w-fit mx-auto">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="badwater-text-gradient">Philosophy</span>
            </h2>
            <div className="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                At BadWater, we believe that technology should be both powerful and elegant. 
                Our approach combines deep technical expertise with creative problem-solving 
                to deliver solutions that are not just functional, but transformative.
              </p>
              <p>
                We are committed to building high-end, polished, interactive products that 
                combine cutting-edge technology with sleek, modern design. Every project we 
                undertake reflects our dedication to quality, innovation, and user experience.
              </p>
              <p>
                Our journey is driven by curiosity, fueled by collaboration, and defined by 
                our relentless pursuit of excellence in everything we create.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};