"use client";

import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroTypingEffect } from "@/components/typing-effect";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/30">
            <Sparkles className="h-4 w-4" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance min-h-[1.2em]"
        >
          <HeroTypingEffect />
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/80 mb-8 text-balance"
        >
          Software Developer & Cybersecurity Professional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-balance"
        >
          Building secure, scalable digital experiences with AI integration,
          cloud solutions, and cutting-edge cybersecurity practices.
          Transforming complex problems into elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("experience")}
            className="border-2 px-8 py-6 text-lg font-semibold rounded-full hover:scale-105 transition-all"
          >
            View My Work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/jonathanlee38"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all"
            aria-label="GitHub"
          >
            <div className="p-3 rounded-full bg-card border border-border group-hover:border-primary group-hover:scale-110 transition-all">
              <Github className="h-5 w-5" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/jonathanlee38"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-secondary transition-all"
            aria-label="LinkedIn"
          >
            <div className="p-3 rounded-full bg-card border border-border group-hover:border-secondary group-hover:scale-110 transition-all">
              <Linkedin className="h-5 w-5" />
            </div>
          </a>
          <a
            href="mailto:jonathanleeks38@gmail.com"
            className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-all"
            aria-label="Email"
          >
            <div className="p-3 rounded-full bg-card border border-border group-hover:border-accent group-hover:scale-110 transition-all">
              <Mail className="h-5 w-5" />
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-all animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
