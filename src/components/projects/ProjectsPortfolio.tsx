'use client'

import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Code,
  Smartphone,
  Globe,
  Palette,
  Database,
  Zap,
  Star,
  Calendar,
  Users,
  Award,
  ArrowRight,
  Building,
  ShoppingBag,
  Utensils,
  Monitor,
  FileText,
  Building2,
  Gamepad2,
  Package,
} from 'lucide-react'

export default function ProjectsPortfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const projects = [
    // Featured Projects (First 3)
    {
      id: 1,
      title: 'ERP System for 3D Engineering',
      category: 'Enterprise Software',
      type: 'Featured',
      description: 'A comprehensive ERP system for a 3D engineering firm, comprising a License Manager, User Tracker, and full Documentation System.',
      fullDescription: 'A custom-built ERP system designed to streamline operations for a company specializing in 3D engineering designs. The system includes modules for license management, user activity tracking, and a centralized documentation repository.',
      image: 'from-blue-500 to-cyan-500',
      tech: ['C#', 'SQL Server', 'ASP.NET'],
      gradientFrom: '#3b82f6',
      gradientTo: '#06b6d4',
      icon: <Building2 className="w-full h-full text-white" />,
      status: 'Completed',
      duration: '6 months',
      link: '#', // Add your link here
      features: ['License Management', 'User Tracking', 'Document Storage', 'Reporting'],
    },
    {
      id: 2,
      title: 'Online Game Store Mobile App',
      category: 'Mobile Application',
      type: 'Featured',
      description: 'A mobile application for an online game store, providing users with a seamless browsing and purchasing experience.',
      fullDescription: 'A cross-platform mobile app built with React Native for a digital game marketplace. It offers features like product listings, secure checkout, user profiles, and push notifications for new releases and sales.',
      image: 'from-green-500 to-emerald-500',
      tech: ['React Native', 'Node.js', 'Firebase'],
      gradientFrom: '#10b981',
      gradientTo: '#059669',
      icon: <Gamepad2 className="w-full h-full text-white" />,
      status: 'Completed',
      duration: '4 months',
      link: '#', // Add your link here
      features: ['Browse Games', 'Secure Payment', 'User Accounts', 'Push Notifications'],
    },
    {
      id: 3,
      title: 'PicaHub Graphic Items Marketplace',
      category: 'E-commerce',
      type: 'Featured',
      description: 'A website for selling graphic design items, featuring a user-friendly interface for browsing and purchasing digital assets.',
      fullDescription: 'An e-commerce platform built for graphic designers to sell their digital creations. The site features a robust search function, secure payment gateway, and a smooth user experience for both buyers and sellers.',
      image: 'from-orange-500 to-red-500',
      tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
      gradientFrom: '#f97316',
      gradientTo: '#ef4444',
      icon: <Palette className="w-full h-full text-white" />,
      status: 'Completed',
      duration: '4 months',
      link: 'https://picahub.com',
      features: ['Digital Product Sales', 'Secure Checkout', 'User Profiles', 'Asset Management'],
    },
    {
      id: 4,
      title: 'Live Sports Streaming Web App',
      category: 'Live Streaming',
      type: 'Web Application',
      description: 'A web application for streaming live sports matches, featuring real-time updates and a dynamic user interface.',
      fullDescription: 'A web application for live streaming sports events, built to handle real-time data from various sports leagues. It provides a simple, clean interface for users to follow live matches, view schedules, and check scores.',
      image: 'from-purple-500 to-indigo-500',
      tech: ['Next.js', 'Tailwind CSS', 'Streaming APIs'],
      gradientFrom: '#8b5cf6',
      gradientTo: '#6366f1',
      icon: <Monitor className="w-full h-full text-white" />,
      status: 'Completed',
      duration: '3 months',
      link: '#', // Add your link here
      features: ['Live Streaming', 'Real-time Scores', 'Match Schedules', 'Responsive Design'],
    },
    {
      id: 5,
      title: 'Full Documentation System',
      category: 'Business Software',
      type: 'Enterprise Software',
      description: 'A comprehensive documentation system built with C# for a company to manage their internal and external documents efficiently.',
      fullDescription: 'An enterprise-grade documentation system created with C# to help a company centralize and organize its knowledge base. Features include document versioning, user permissions, and a powerful search engine.',
      image: 'from-fuchsia-500 to-rose-500',
      tech: ['C#', 'SQL Server', '.NET Framework'],
      gradientFrom: '#d946ef',
      gradientTo: '#f43f5e',
      icon: <FileText className="w-full h-full text-white" />,
      status: 'Completed',
      duration: '5 months',
      link: '#', // Add your link here
      features: ['Document Versioning', 'Access Control', 'Search Functionality', 'User Management'],
    },
    {
      id: 6,
      title: 'Almaha Advertising Jordan',
      category: 'Web Development',
      type: 'Corporate Website',
      description: 'A custom-built website for almahaads.com, tailored to meet their specific business needs with a modern design and responsive layout.',
      fullDescription: 'A modern corporate website for almahaads.com, built from the ground up to provide an engaging user experience. The site showcases their services and contact information with a professional and clean aesthetic.',
      image: 'from-yellow-500 to-lime-500',
      tech: ['Next.js', 'Tailwind CSS', 'Google Maps'],
      gradientFrom: '#FCD34D',
      gradientTo: '#A3E635',
      icon: <Globe className="w-full h-full text-white" />,
      status: 'Completed',
      duration: '2 months',
      link: 'https://almahaads.com',
      features: ['Responsive Design', 'Service Showcase', 'Contact Forms', 'Interactive Map'],
    },
    // New Project
    {
      id: 7,
      title: 'Advice-eg.com Website',
      category: 'Supply & Logistics',
      type: 'Corporate Website',
      description: 'A professional corporate website for a public supplying company, showcasing their services, mission, and contact information with a modern design.',
      fullDescription: 'A custom-built website designed for a public supplying company, featuring a clean, responsive layout. The site provides details on their services, includes a clear "About Us" section, and makes it easy for clients to get in touch.',
      image: 'from-blue-600 to-blue-800',
      tech: ['React.js', 'CSS3', 'JavaScript'],
      gradientFrom: '#2563eb',
      gradientTo: '#1e40af',
      icon: <Package className="w-full h-full text-white" />,
      status: 'Completed',
      duration: '2 months',
      link: 'http://www.globaladvice-eg.com/',
      features: ['Service Showcase', 'Contact Information', 'Responsive Design', 'About Us Section'],
    },
  ]

  const categories = [
    'All', 
    'Featured', 
    'Enterprise Software', 
    'Mobile Application', 
    'E-commerce', 
    'Live Streaming', 
    'Web Development',
    'Supply & Logistics',
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative inline-block mb-6"
          >
            <motion.p
              className="text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative z-10"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              🚀 My Projects Portfolio
            </motion.p>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Projects{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover my journey through innovative projects that solve real-world problems. 
            From enterprise systems to mobile applications, each project showcases technical excellence and user-centric design.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: <Code className="h-6 w-6" />, number: '7', label: 'Total Projects', color: 'from-blue-600 to-cyan-600' },
            { icon: <Users className="h-6 w-6" />, number: '7+', label: 'Satisfied Clients', color: 'from-purple-600 to-pink-600' },
            { icon: <Calendar className="h-6 w-6" />, number: '4', label: 'Years Experience', color: 'from-green-600 to-emerald-600' },
            { icon: <Award className="h-6 w-6" />, number: '100%', label: 'Success Rate', color: 'from-orange-600 to-red-600' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4`}>
                {stat.icon}
              </div>
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative"
              whileHover={{
                scale: 1.03,
                y: -10,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <div className="relative rounded-3xl bg-card shadow-xl hover:shadow-2xl transition-all duration-500 border border-border hover:border-transparent overflow-hidden h-full">
                {/* Featured Badge */}
                {project.type === 'Featured' && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                    {project.status}
                  </span>
                </div>

                {/* Glowing Border Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                    padding: '2px',
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-card" />
                </div>

                {/* Project Image/Hero Section */}
                <div className="relative">
                  <div className={`aspect-[16/10] bg-gradient-to-br ${project.image} relative overflow-hidden flex items-center justify-center`}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* Floating Icon */}
                    <motion.div
                      className="absolute text-6xl"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {project.icon}
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute bottom-6 left-6">
                      <span
                        className="px-4 py-2 rounded-full text-white font-semibold text-sm shadow-lg backdrop-blur-sm"
                        style={{
                          background: `linear-gradient(135deg, ${project.gradientFrom}CC, ${project.gradientTo}CC)`,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-6 right-6">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="relative z-10 p-8">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 text-sm">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                      Key Features
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          style={{
                            color: project.gradientFrom,
                            backgroundColor: `${project.gradientFrom}15`,
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-300"
                          style={{
                            backgroundColor: `${project.gradientFrom}15`,
                            borderColor: `${project.gradientFrom}30`,
                            color: project.gradientFrom,
                          }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: project.gradientFrom,
                            color: 'white',
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 rounded-xl font-semibold text-white text-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden block text-center"
                      style={{
                        background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </span>
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/BasharatJS?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl border border-border bg-card hover:bg-accent transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                    </motion.a>
                  </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl p-12 border border-primary/20"
        >
          <motion.div
            className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-6"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Zap className="h-8 w-8" />
          </motion.div>
          
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}