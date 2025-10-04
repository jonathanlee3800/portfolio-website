"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "BSc Information Systems at SMU",
    detail: "GPA 3.25 | Digitalization & Cloud Solutions",
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Current Role",
    description: "Software Developer Intern",
    detail: "Osiris Technology | AI & ML Focus",
    color: "secondary",
  },
  {
    icon: Award,
    title: "Certification",
    description: "ISC2 Certified in Cybersecurity",
    detail: "Professional Security Credential",
    color: "accent",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Singapore",
    detail: "Available for opportunities",
    color: "primary",
  },
]

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4 border border-primary/30">
            <GraduationCap className="h-4 w-4" />
            About Me
          </div>
          <div className="flex items-center justify-center gap-6 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-xl opacity-50 animate-pulse" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20pic-t6n0P090NmPU7mZGkk4yKbyrORdRHF.jpg"
                alt="Jonathan Lee"
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Jonathan Lee</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A passionate technologist building the future of secure, intelligent applications
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border p-6 transition-all hover:shadow-2xl ${
                  item.color === "primary"
                    ? "border-primary/30 bg-card hover:border-primary/50 hover:shadow-primary/20"
                    : item.color === "secondary"
                      ? "border-secondary/30 bg-card hover:border-secondary/50 hover:shadow-secondary/20"
                      : "border-accent/30 bg-card hover:border-accent/50 hover:shadow-accent/20"
                }`}
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    item.color === "primary"
                      ? "bg-primary/30"
                      : item.color === "secondary"
                        ? "bg-secondary/30"
                        : "bg-accent/30"
                  }`}
                />
                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-2xl mb-4 transition-transform group-hover:scale-110 ${
                      item.color === "primary"
                        ? "bg-primary/20 text-primary border border-primary/40"
                        : item.color === "secondary"
                          ? "bg-secondary/20 text-secondary border border-secondary/40"
                          : "bg-accent/20 text-accent border border-accent/40"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={`text-sm font-bold uppercase tracking-wide mb-2 ${
                      item.color === "primary"
                        ? "text-primary"
                        : item.color === "secondary"
                          ? "text-secondary"
                          : "text-accent"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base font-semibold text-foreground mb-1">{item.description}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Main about content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 lg:p-12"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-6 text-base lg:text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a passionate software developer and cybersecurity professional currently pursuing my Bachelor of
              Science in Information Systems at{" "}
              <span className="font-semibold text-primary">Singapore Management University</span>, majoring in
              Digitalization and Cloud Solutions with a second major in Cybersecurity.
            </p>
            <p>
              My journey in tech began at Nanyang Polytechnic, where I earned my Diploma in Financial Informatics and
              topped my module in Programming Essentials. Since then, I've worked on diverse projects ranging from
              AI-powered facial recognition systems to automated document processing solutions.
            </p>
            <p>
              Currently, I'm working as a Software Developer Intern at{" "}
              <span className="font-semibold text-secondary">Osiris Technology</span>, where I train AI models and
              integrate them with legacy CCTV systems for construction site monitoring. I'm also certified by ISC2 in
              Cybersecurity, demonstrating my commitment to building secure digital solutions.
            </p>
            <p>
              When I'm not coding, you can find me participating in hackathons, contributing to cybersecurity
              communities, or exploring the latest developments in{" "}
              <span className="font-semibold text-accent">cloud computing</span> and{" "}
              <span className="font-semibold text-primary">AI</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
