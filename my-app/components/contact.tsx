"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, Linkedin, Github, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" ref={ref} className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent mb-4 border border-accent/30">
            <MessageSquare className="h-4 w-4" />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Email card */}
          <motion.a
            href="mailto:jonathanleeks38@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 transition-all hover:shadow-2xl hover:border-primary/50 hover:shadow-primary/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-primary/20 text-primary border border-primary/40 transition-transform group-hover:scale-110">
                <Mail className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Email</p>
                <p className="text-xl font-bold text-foreground mb-1">jonathanleeks38@gmail.com</p>
                <p className="text-sm text-muted-foreground">Drop me a message anytime</p>
              </div>
              <Send className="h-5 w-5 text-primary/60 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </motion.a>

          {/* Phone card */}
          <motion.a
            href="tel:+6590614018"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-secondary/30 bg-card p-8 transition-all hover:shadow-2xl hover:border-secondary/50 hover:shadow-secondary/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-secondary/20 text-secondary border border-secondary/40 transition-transform group-hover:scale-110">
                <Phone className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary mb-2">Phone</p>
                <p className="text-xl font-bold text-foreground mb-1">+65 9061 4018</p>
                <p className="text-sm text-muted-foreground">Available for calls</p>
              </div>
              <Send className="h-5 w-5 text-secondary/60 group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </motion.a>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Button
            asChild
            size="lg"
            className="gap-3 bg-secondary/10 text-secondary border-2 border-secondary/30 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-secondary/20"
            variant="outline"
          >
            <a href="https://www.linkedin.com/in/jonathanlee38" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="gap-3 bg-accent/10 text-accent border-2 border-accent/30 hover:bg-accent hover:text-accent-foreground hover:border-accent rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
            variant="outline"
          >
            <a href="https://github.com/jonathanlee38" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View GitHub Profile
            </a>
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-12 border-t border-border"
        >
          <p className="text-sm text-muted-foreground mb-2">
            © {new Date().getFullYear()} Jonathan Lee. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Built with Next.js, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </section>
  )
}
