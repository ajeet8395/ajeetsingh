"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    logo: "/weatherM.png",
    title: "Modern Weather",
    description: "It displays real time weather updates, air quality, UV index, and 5-day forecasts.",
    image: "/weatherM.png",
    tags: ["Next.js", "OpenweatherAPI", "TypeScript"],
    demoUrl: "https://weather-application-seven-silk.vercel.app/",
    githubUrl: "https://github.com/ajeet8395/Weather-Application",
    features: [
      "🌡️ Real-Time Temperature with hourly updates",
      "🌤️ 5-Day Forecast for upcoming weather trends",
      "🏙️ City Search – Get weather data for any location",
      "💨 Wind Speed & Direction Compass",
      "☁️ Air Quality Index (AQI) and PM2.5 levels",
      "🌇 Sunrise & Sunset Timings",
      "🌞 UV Index Indicator",
      "💧 Humidity, Pressure, and Visibility Data",
    ]
  },
  {
    logo: "/Brainwave.svg",
    title: "Brainwave",
    description:
      "A modern UI/UX website for a resume analysis tool using Gemini API.",
    image: "/brainwave.webp",
    tags: ["ReactJS", "Tailwind CSS", "Framer Motion", "Figma"],
    demoUrl: "https://brainwave-ajeet.vercel.app/",
    githubUrl: "https://github.com/ajeet8395/Brainwave",
    features: [
      "Gemini API integration for resume analysis",
      "Responsive design with Framer Motion animations",
    ],
  },
  {
    logo: "/englishexpresswayLogo.svg",
    title: "IPhone",
    description:
      "This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
    image: "/iphone.png",
    tags: ["ReactJS", "Tailwind CSS", "GSAP", "Three.js"],
    demoUrl: "https://iphone-website-eta.vercel.app/",
    githubUrl: "https://github.com/ajeet8395/Iphone-Website",
    features: [
      "3D Model Rendering with Different Colors & Sizes",
      "GSAP Animations for Smooth Transitions",
      "Custom Video Carousel",
    ],
  },
  {
    logo: "/thankquizLogo.svg",
    title: "ThankQuiz",
    description:
      "A fully responsive quiz web application with OTP-based authentication and AI-generated questions.",
    image: "/thankquiz.webp",
    tags: ["ReactJS", "Redux", "Bootstrap", "Figma", "OpenAI API"],
    demoUrl: "https://thankquiz.com/",
    githubUrl: "",
    features: [
      "OTP-based mobile authentication via API",
      "Profile completion workflows with user data storage",
      "Dynamic question banks from OpenAI-powered backend",
      "Quiz history tracking for personalized experience",
      "Redux for state management of authentication and quiz progress",
    ],
  },
  {
    logo: "/humanitycarefoundationLogo.svg",
    title: "Humanity Care Foundation",
    description:
      "A modern website for a charitable organization, highlighting their mission, donation options, and community impact with a smooth UI/UX experience.",
    image: "/humanitycarefoundation.webp",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma", "Nodemailer"],
    demoUrl: "https://www.humanitycarefoundation.in/",
    githubUrl: "",
    features: [
      "Animated homepage using Framer Motion for engaging transitions",
      "Clean and responsive design built with Tailwind CSS",
      "Contact form with Nodemailer for email handling",
      "Sections like About, Mission, Services, Gallery, and Contact",
      "Designed in Figma and implemented using Next.js for fast performance",
    ],
  },
  {
    logo: "/exceedroboticsLogo.png",
    title: "Exceed Robotics",
    description:
      "Program enrollment camps and blog pages for Exceed Robotics, focusing on intuitive user experience.",
    image: "/exceedrobotics.webp",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    demoUrl: "https://exceedrobotics.com/",
    githubUrl: "",
    features: [
      "Responsive program enrollment pages",
      "Interactive blog section",
      "Optimized for speed and accessibility",
      "Cross-browser compatible design",
      "Collaborative development with team members",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className={`overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r flex items-center justify-center ${project.title === 'Modern Weather' ? 'bg-gray-50 dark:bg-zinc-900' : ''}`}>
                <div className={`absolute inset-0 overflow-y-auto scrollbar-hide ${project.title === 'Modern Weather' ? 'p-4 flex items-center justify-center ' : ''}`}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className={`${project.title === 'Modern Weather' ? 'object-contain' : 'object-cover'} w-full transition-transform duration-300 group-hover:scale-105`}
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  {project.title === 'Modern Weather' ? (
                    <div className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="text-sm">
                          {feature}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="list-disc pl-5 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {project.githubUrl && (
                    <Button size="sm" variant="outline">
                      <Link
                        href={project.githubUrl}
                        className="flex items-center"
                        target="_blank"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
