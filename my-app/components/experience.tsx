"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    period: "Jun 2025 — Present",
    title: "Software Developer Intern",
    company: "Osiris Technology",
    description:
      "Training AI models and integrating them with legacy CCTV systems for facial recognition, attendance tracking, and dangerous activity monitoring for construction sites. Building dashboards and hosting ML models on AWS EC2 for scalability.",
    skills: [
      "AI/ML",
      "AWS EC2",
      "Computer Vision",
      "Python",
      "Real-time Monitoring",
    ],
    color: "primary",
    image: "/osiris.png",
  },
  {
    period: "May 2024 — Aug 2024",
    title: "Software Developer Intern",
    company: "SSMC (Systems on Silicon Manufacturing)",
    description:
      "Implemented OCR and AI-driven text extraction to automate processing of business PDFs. Developed a full-stack application integrating Google Document AI with Power Automate, increasing operational efficiency.",
    skills: [
      "OCR",
      "Google Document AI",
      "Power Automate",
      "Full-stack Development",
      "Regex",
    ],
    color: "secondary",
    image: "/ssmc.png",
  },
  {
    period: "Mar 2019 — May 2020",
    title: "Full-Time & Part-Time Software Developer",
    company: "Ezsofe",
    description:
      "Designed and developed a Facebook Messenger chatbot for SIM using Dialogflow. Engineered a backend administrative system with AWS and GraphQL for the Singapore Computer Society.",
    skills: [
      "Dialogflow",
      "AWS",
      "GraphQL",
      "Chatbot Development",
      "React Native",
    ],
    color: "accent",
    image: "/ezsofe.jpg",
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4 border border-primary/30">
            <Briefcase className="h-4 w-4" />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Building innovative solutions across AI, automation, and cloud
            technologies
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group relative overflow-hidden rounded-3xl border transition-all hover:shadow-2xl ${
                exp.color === "primary"
                  ? "border-primary/30 bg-card hover:border-primary/50 hover:shadow-primary/20"
                  : exp.color === "secondary"
                  ? "border-secondary/30 bg-card hover:border-secondary/50 hover:shadow-secondary/20"
                  : "border-accent/30 bg-card hover:border-accent/50 hover:shadow-accent/20"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative h-64 md:h-auto overflow-hidden bg-muted/20 flex items-center justify-center p-8">
                  <img
                    src={exp.image || "/placeholder.svg"}
                    alt={`${exp.company} logo`}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-20 ${
                      exp.color === "primary"
                        ? "from-primary/40 to-transparent"
                        : exp.color === "secondary"
                        ? "from-secondary/40 to-transparent"
                        : "from-accent/40 to-transparent"
                    }`}
                  />
                </div>

                {/* Content side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-4 w-fit ${
                      exp.color === "primary"
                        ? "bg-primary/20 text-primary border border-primary/40"
                        : exp.color === "secondary"
                        ? "bg-secondary/20 text-secondary border border-secondary/40"
                        : "bg-accent/20 text-accent border border-accent/40"
                    }`}
                  >
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p
                    className={`text-xl font-semibold mb-4 ${
                      exp.color === "primary"
                        ? "text-primary"
                        : exp.color === "secondary"
                        ? "text-secondary"
                        : "text-accent"
                    }`}
                  >
                    {exp.company}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`rounded-full px-3 py-1 text-sm font-medium transition-all hover:scale-105 ${
                          exp.color === "primary"
                            ? "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
                            : exp.color === "secondary"
                            ? "bg-secondary/10 text-secondary border border-secondary/30 hover:bg-secondary/20"
                            : "bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
