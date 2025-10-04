'use client'

import { motion } from 'framer-motion'
import {
  MapPin,
  Mail,
  Phone,
  Calendar,
  Award,
  Code,
  Smartphone,
  Globe,
  Coffee,
  Heart,
  Zap,
  Star,
} from 'lucide-react'

export default function AboutHero() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.2 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skills = [
    { name: 'Custom Web Development', icon: <Globe className="h-5 w-5" /> },
    { name: 'Mobile App Development', icon: <Smartphone className="h-5 w-5" /> },
    { name: 'Full-Stack Solutions', icon: <Code className="h-5 w-5" /> },
    { name: 'UI/UX Design', icon: <Star className="h-5 w-5" /> },
  ]

  const highlights = [
    { number: '4+', label: 'Years Experience', icon: <Calendar className="h-6 w-6" /> },
    { number: '50+', label: 'Projects Completed', icon: <Award className="h-6 w-6" /> },
    { number: '15+', label: 'Happy Clients', icon: <Heart className="h-6 w-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Coffee className="h-6 w-6" /> },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8 text-center"
          >
            {/* Greeting & Title */}
            <motion.div variants={fadeInLeft} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative inline-block"
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
                  👋 Hello, I'm Khalid
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

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Software{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Engineer
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                Crafting digital experiences that transform businesses through innovative web and mobile solutions
              </p>
            </motion.div>

            {/* About Description */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With <span className="font-semibold text-foreground">4 years of hands-on experience</span>, I specialize in building 
                custom web applications and mobile solutions that solve real-world problems. My passion lies in creating 
                scalable, user-centric digital products that drive business growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From concept to deployment, I handle the entire development lifecycle, ensuring every project is delivered 
                with precision, creativity, and cutting-edge technology.
              </p>
            </motion.div>

            {/* Core Skills */}
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Core Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            {/* <motion.div variants={fadeInLeft} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Let's Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <MapPin className="h-5 w-5" />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>khaledvb85@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+20 1117738836</span>
                </div>
              </div>
            </motion.div> */}

            {/* CTA Buttons */}
            <motion.div variants={fadeInLeft} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Start a Project
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
          </motion.div>
        </div>

        {/* Bottom Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {item.number}
                </h3>
                <p className="text-muted-foreground font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}