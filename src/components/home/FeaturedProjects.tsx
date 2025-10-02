'use client'

import { motion } from 'framer-motion'
import { Building, Utensils, Globe, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedProjects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projects = [
    {
      title: 'TIG-EG Civil Engineering',
      category: 'Civil Engineering',
      description:
        'A professional website for tig-eg.com, a civil engineering company showcasing their construction projects, services, and expertise in infrastructure development.',
      image: 'from-slate-600 to-slate-800',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      gradientFrom: '#475569',
      gradientTo: '#1e293b',
      icon: <Building className="w-full h-full" />,
      link: 'https://tig-eg.com',
    },
    {
      title: 'Mazagangy Turkish Coffee Store',
      category: 'E-commerce',
      description:
        'An elegant e-commerce website for Mazagangy.com, specializing in authentic Turkish coffee products with a focus on traditional brewing methods and premium quality.',
      image: 'from-amber-600 to-orange-700',
      tech: ['React.js', 'Node.js', 'Stripe API'],
      gradientFrom: '#d97706',
      gradientTo: '#c2410c',
      icon: <Utensils className="w-full h-full" />,
      link: 'https://mazagangy.com',
    },
    {
      title: 'Falcon Tours Germany',
      category: 'Travel & Tourism',
      description:
        'A comprehensive travel website for Falcon-tours.de, offering German trips and travel services with booking functionality and detailed tour information.',
      image: 'from-emerald-600 to-teal-700',
      tech: ['Next.js', 'MongoDB', 'Payment Gateway'],
      gradientFrom: '#059669',
      gradientTo: '#0f766e',
      icon: <Globe className="w-full h-full" />,
      link: 'https://falcon-tours.de',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative inline-block mb-4"
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
              🚀 Real World Solutions 🚀
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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real solutions for real businesses. See how I've helped transform
            manual processes into modern digital systems.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <div className="relative rounded-3xl bg-card shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-border hover:border-transparent overflow-hidden">
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                    padding: '2px',
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-card" />
                </div>

                <div className="relative">
                  <div
                    className={`aspect-[16/10] bg-gradient-to-br ${project.image} relative overflow-hidden flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                    <motion.div
                      className="absolute text-6xl text-white"
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

                    <div className="absolute top-6 right-6">
                      <span
                        className="px-4 py-2 rounded-full text-white font-semibold text-sm shadow-lg backdrop-blur-sm"
                        style={{
                          background: `linear-gradient(135deg, ${project.gradientFrom}CC, ${project.gradientTo}CC)`,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <motion.div
                      className="absolute bottom-6 right-6 w-4 h-4 bg-white/30 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-12 right-12 w-2 h-2 bg-white/40 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }}
                    />
                  </div>
                </div>

                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 rounded-lg text-sm font-medium border transition-all duration-300"
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

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden block text-center"
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
                  </motion.a>
                </div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                View All Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl blur-lg"></div>
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
          </Link>
        </motion.div>
      </div>
    </section>
  )
}