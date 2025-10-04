"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Cloud, Shield, Brain, Wrench, Zap } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "C#", "SQL"],
    color: "primary",
  },
  {
    icon: Zap,
    category: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Next.js", "React Native", "Expo"],
    color: "secondary",
  },
  {
    icon: Cloud,
    category: "Cloud & DevOps",
    skills: ["AWS EC2", "AWS Lambda", "Google Cloud", "Firebase", "GraphQL"],
    color: "accent",
  },
  {
    icon: Brain,
    category: "AI & Machine Learning",
    skills: ["OpenAI GPT-4", "Google Document AI", "Dialogflow", "Computer Vision", "OCR"],
    color: "primary",
  },
  {
    icon: Shield,
    category: "Cybersecurity",
    skills: ["ISC2 Certified", "Security Best Practices", "Threat Analysis", "Network Security"],
    color: "secondary",
  },
  {
    icon: Wrench,
    category: "Tools & Technologies",
    skills: ["Git", "Power Automate", "REST APIs", "Regex", "Database Design"],
    color: "accent",
  },
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary mb-4 border border-secondary/30">
            <Code className="h-4 w-4" />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A comprehensive toolkit for building modern, secure, and scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border p-8 transition-all hover:shadow-2xl ${
                  category.color === "primary"
                    ? "border-primary/30 bg-card hover:border-primary/50 hover:shadow-primary/20"
                    : category.color === "secondary"
                      ? "border-secondary/30 bg-card hover:border-secondary/50 hover:shadow-secondary/20"
                      : "border-accent/30 bg-card hover:border-accent/50 hover:shadow-accent/20"
                }`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    category.color === "primary"
                      ? "bg-primary/30"
                      : category.color === "secondary"
                        ? "bg-secondary/30"
                        : "bg-accent/30"
                  }`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-4 rounded-2xl mb-4 transition-transform group-hover:scale-110 ${
                      category.color === "primary"
                        ? "bg-primary/20 text-primary border border-primary/40"
                        : category.color === "secondary"
                          ? "bg-secondary/20 text-secondary border border-secondary/40"
                          : "bg-accent/20 text-accent border border-accent/40"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3
                    className={`text-xl font-bold mb-4 ${
                      category.color === "primary"
                        ? "text-primary"
                        : category.color === "secondary"
                          ? "text-secondary"
                          : "text-accent"
                    }`}
                  >
                    {category.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`rounded-full px-3 py-1 text-sm font-medium transition-all hover:scale-105 ${
                          category.color === "primary"
                            ? "bg-primary/10 text-foreground border border-primary/30 hover:bg-primary/20 hover:text-primary"
                            : category.color === "secondary"
                              ? "bg-secondary/10 text-foreground border border-secondary/30 hover:bg-secondary/20 hover:text-secondary"
                              : "bg-accent/10 text-foreground border border-accent/30 hover:bg-accent/20 hover:text-accent"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Certification highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 lg:p-12 hover:shadow-2xl hover:shadow-primary/20 transition-all"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="p-6 rounded-2xl bg-primary/20 border-2 border-primary/50">
                <Shield className="h-16 w-16 text-primary" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Certified in Cybersecurity</h3>
              <p className="text-lg text-primary font-semibold mb-2">
                International Information System Security Certification Consortium (ISC2)
              </p>
              <p className="text-muted-foreground">Issued: August 2025</p>
            </div>
            <div className="flex-shrink-0">
              <div className="rounded-2xl bg-primary/30 px-6 py-3 border border-primary/50">
                <p className="text-sm font-semibold text-primary">CC Certified</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
