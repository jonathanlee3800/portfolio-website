"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Award, Users, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "DSTA CodeEXP 2023",
    subtitle: "1st Runner-Up",
    period: "Jun 2023",
    description:
      "Developed a gamification application using React Native, Expo, and Firebase to enhance employee experience. Competed against 3000+ participants.",
    highlight: "Best MVP",
    stats: "3000+ Participants",
    color: "primary",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dsta%20winner-1Aw0p7UXOCJx84pwrQ4J7zpiMMvdyd.jpg",
  },
  {
    icon: Award,
    title: "SMU Generate your L(AI)BRARY",
    subtitle: "2nd Place Overall",
    period: "Aug 2023",
    description:
      "Created a Chrome extension utilizing OpenAI GPT-4 to process natural language queries for SMU libraries.",
    highlight: "2nd Overall",
    stats: "AI-Powered",
    color: "secondary",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai%20library%20winner-Y68t8SZYwv1J0P52k4W0AFGOcM91Fc.jpg",
  },
  {
    icon: Users,
    title: "SMU Sailing: 24th Western Circuit",
    subtitle: "Logistics Deputy",
    period: "May 2023 — Aug 2023",
    description:
      "Organized an event that raised over $8000 for Sailability, a non-profit offering sailing opportunities to individuals with disabilities.",
    highlight: "$8000+ Raised",
    stats: "Community Impact",
    color: "accent",
    image: "/wcsr.jpg",
  },
];

export function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" ref={ref} className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent mb-4 border border-accent/30">
            <Star className="h-4 w-4" />
            Highlights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Achievements & Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Recognition for innovation, technical excellence, and community
            impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative overflow-hidden rounded-3xl border transition-all hover:shadow-2xl ${
                  achievement.color === "primary"
                    ? "border-primary/30 bg-card hover:border-primary/50 hover:shadow-primary/20"
                    : achievement.color === "secondary"
                    ? "border-secondary/30 bg-card hover:border-secondary/50 hover:shadow-secondary/20"
                    : "border-accent/30 bg-card hover:border-accent/50 hover:shadow-accent/20"
                }`}
              >
                {/* Image header */}
                <div className="relative h-96 overflow-hidden bg-muted/30">
                  <img
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b opacity-20 ${
                      achievement.color === "primary"
                        ? "from-primary/80 to-transparent"
                        : achievement.color === "secondary"
                        ? "from-secondary/80 to-transparent"
                        : "from-accent/80 to-transparent"
                    }`}
                  />
                  <div className="absolute top-4 right-4">
                    <div
                      className={`p-3 rounded-full backdrop-blur-sm ${
                        achievement.color === "primary"
                          ? "bg-primary/30 text-primary-foreground border border-primary/50"
                          : achievement.color === "secondary"
                          ? "bg-secondary/30 text-secondary-foreground border border-secondary/50"
                          : "bg-accent/30 text-accent-foreground border border-accent/50"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold backdrop-blur-sm ${
                        achievement.color === "primary"
                          ? "bg-primary/40 text-primary-foreground border border-primary/60"
                          : achievement.color === "secondary"
                          ? "bg-secondary/40 text-secondary-foreground border border-secondary/60"
                          : "bg-accent/40 text-accent-foreground border border-accent/60"
                      }`}
                    >
                      {achievement.highlight}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                      achievement.color === "primary"
                        ? "text-primary"
                        : achievement.color === "secondary"
                        ? "text-secondary"
                        : "text-accent"
                    }`}
                  >
                    {achievement.period}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p
                    className={`text-sm font-semibold mb-3 ${
                      achievement.color === "primary"
                        ? "text-primary/80"
                        : achievement.color === "secondary"
                        ? "text-secondary/80"
                        : "text-accent/80"
                    }`}
                  >
                    {achievement.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  <div
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                      achievement.color === "primary"
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : achievement.color === "secondary"
                        ? "bg-secondary/10 text-secondary border border-secondary/30"
                        : "bg-accent/10 text-accent border border-accent/30"
                    }`}
                  >
                    {achievement.stats}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
