import { motion } from "framer-motion";

const experiences = [
  {
    role: "Desarrolladora Fullstack",
    company: "Company Group",
    duration: "Mar 2023 - Ago 2023",
    description:
      "Desarrollé y mantuve aplicaciones utilizando C#, ASP.NET y SQL Server. Implementé mejoras en rendimiento y seguridad.",
    technologies: ["C#", "ASP.NET", "SQL Server", "JavaScript"],
  },
  {
    role: "Desarrolladora Frontend",
    company: "FemCoders Club",
    duration: "Nov 2022 - Presente",
    description:
      "Construí la plataforma web de la comunidad desde cero con React y TypeScript. Implementé un sistema de autenticación y mejoras de UI/UX.",
    technologies: ["React", "TypeScript", "TailwindCSS", "NestJS"],
  },
  {
    role: "Emprendedora & Freelancer",
    company: "Proyectos Personales",
    duration: "2021 - Presente",
    description:
      "Desarrollo de aplicaciones web para clientes, enfocadas en e-commerce, automatización de tareas y plataformas educativas.",
    technologies: ["Next.js", "Node.js", "Firebase", "MySQL"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen flex flex-col items-center py-16 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-gray-900 to-black text-gray-200 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 z-10"
      >
        Experiencia Laboral
      </motion.h2>

      <div className="relative w-full max-w-5xl z-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="mb-8 p-6 rounded-lg bg-gray-800 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-purple-300">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-gray-400 text-sm mb-2">{exp.duration}</p>
            <p className="text-gray-300 mb-3">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-700 text-gray-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
}
