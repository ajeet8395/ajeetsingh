"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Engineer",
    company: "LegoDesk",
    period: "June 2025 - Present",
    responsibilities: [
      "Collaborate with designers, backend, and product teams to deliver scalable, user-centric features with smooth UI/UX.",
      "Integrate secure and efficient RESTful APIs, using React Hooks / Context API / Redux, and handle real-time data updates.",
      "Improved overall application performance by 15% by refactoring legacy components, optimizing rendering logic, and implementing React Hooks for efficient state management.",
      "Reduced page load time by 20% through the creation of reusable UI components, lazy loading, and effective code-splitting in React, resulting in a smoother user experience."
    ],
    skills: ["React", "TypeScript", "RESTful APIs", "Redux", "Performance Optimization", "Code Splitting", "UI/UX"]
  },
  {
    title: "Frontend Developer",
    company: "Techavtar",
    period: "Aug 2024 - June 2025",
    responsibilities: [
      "Contributed to KnectHotel, a hotel management platform with dual admin structure (Super Admin & Hotel Admin).",
      "Implemented role-based access control and dynamic dashboard interfaces for Super Admins and Hotel Administrators.",
      "Implemented 1-to-1 video calling and real-time communication features.",
    ],
    skills: ["Next.js", "ReactJs", "TypeScript", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Web Developer",
    company: "Fresco Web Services",
    period: "July 2023 – Aug 2024",
    responsibilities: [
      "Developed a CMS dashboard for eDeskshaam, enhancing UI/UX and improving user interaction",
      "Designed and implemented responsive 'Important Links' and 'Events' pages using React.js",
    ],
    skills: [
      "React",
      "JavaScript",
      "UI/UX",
      "Responsive Design",
      "Wordpress",
      "Bootstrap",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Solitaire Infosys",
    period: "Jan 2023 – June 2023",
    responsibilities: [
      "Created four interactive e-commerce websites using React.js and Bootstrap.",
      "Developed user-friendly homepage for educational games and collaborated with UX designers",
      "Worked closely with back-end developers to ensure seamless integration and cohesive user experience",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI/UX",
      "Responsive Design",
      "Bootstrap",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
