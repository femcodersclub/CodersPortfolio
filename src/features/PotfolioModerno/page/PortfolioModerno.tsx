import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaNodeJs,
  FaQuoteLeft,
  FaReact,
} from "react-icons/fa";
import {
  SiDocker,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Typewriter from "typewriter-effect";
import CertificatesSection from "../../../components/CertificatesSection";
import ExperienceSection from "../../../components/ExperienceSection";

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink?: string;
  techStack: string[];
  architecture?: string;
  performance?: string;
}

interface BlogPost {
  title: string;
  excerpt: string;
  link: string;
}

interface Contribution {
  projectName: string;
  description: string;
  link: string;
}

const techIcons: Record<string, JSX.Element> = {
  React: <FaReact className="inline-block mr-1" />,
  "Node.js": <FaNodeJs className="inline-block mr-1" />,
  TypeScript: <SiTypescript className="inline-block mr-1" />,
  MongoDB: <SiMongodb className="inline-block mr-1" />,
  TailwindCSS: <SiTailwindcss className="inline-block mr-1" />,
  Docker: <SiDocker className="inline-block mr-1" />,
  Firebase: <FaHeart className="inline-block mr-1" />,
};

function TerminalSection() {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg text-green-400 w-full max-w-4xl mt-16">
      <div className="bg-gray-700 p-2 rounded-t-xl flex items-center">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-2" />
        <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />
        <span className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <div className="p-4 font-mono">
        <p className="mb-1">$ npm run build</p>
        <p className="text-green-300">✔ build completed successfully</p>
        <p className="mb-1 mt-4">$ echo "Hola comunidad femCoders Club"</p>
        <p className="text-green-300">Hola femCoders Club</p>
      </div>
    </div>
  );
}

function PlaygroundSection() {
  const codeSnippet = `function greet(name) {\n  return \`Hola, \${name}!\`;\n}\n\nconsole.log(greet("femCoders Club")); // Hola, femCoders Club!`;

  return (
    <div
      id="playground"
      className="bg-gray-800 p-6 rounded-xl shadow-lg text-gray-200 w-full max-w-4xl mt-16"
    >
      <h3 className="text-2xl font-semibold mb-4 text-green-400">Playground</h3>
      <p>Aquí puedes ver un pequeño snippet de código:</p>
      <pre className="bg-gray-900 p-4 mt-4 rounded-lg overflow-x-auto">
        {codeSnippet}
      </pre>
    </div>
  );
}

function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Sistema de Gestión de Tareas",
      description:
        "Aplicación fullstack para crear, asignar y monitorear tareas en tiempo real.",
      image: "./gestion.webp",
      githubLink: "https://github.com/IrinaAwesome/todo-app",
      demoLink: "https://todo-demo.vercel.app",
      techStack: ["React", "Node.js", "TypeScript", "MongoDB"],
      architecture: "Arquitectura microservicios con Docker.",
      performance: "Optimizada con lazy loading y memoization.",
    },
    {
      title: "Plataforma de E-learning",
      description:
        "Web que ofrece cursos en línea con sistema de matriculación, pagos y foros.",
      image: "./elearning.webp",
      githubLink: "https://github.com/IrinaAwesome/elearning-platform",
      demoLink: "https://elearning-demo.vercel.app",
      techStack: ["Next.js", "TailwindCSS", "Firebase"],
      architecture: "Monorepo con NX y hosting en Vercel.",
      performance: "SSR y caché con revalidación incremental.",
    },
    {
      title: "API de análisis de texto",
      description:
        "API REST que procesa texto para extraer sentimientos, entidades y resumen.",
      image: "./api.webp",
      githubLink: "https://github.com/IrinaAwesome/text-analysis-api",
      demoLink: "https://api-demo.vercel.app",
      techStack: ["Node.js", "Express", "TypeScript"],
      architecture: "Contenedores Docker orquestados en AWS.",
      performance: "Soporta +10k requests concurrentes con balanceo de carga.",
    },
    {
      title: "Plataforma de Streaming",
      description:
        "Web para ver y subir videos en streaming con sistema de comentarios.",
      image: "./streaming.webp",
      githubLink: "https://github.com/IrinaAwesome/streaming-platform",
      demoLink: "https://streaming-demo.vercel.app",
      techStack: ["React", "Node.js", "MongoDB"],
      architecture: "Arquitectura serverless con Firebase Functions.",
      performance: "Optimizada con lazy loading y memoization.",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-gray-100 py-20">
      <section id="projects" className="w-full max-w-5xl px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center text-green-400">
          Proyectos Destacados
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 text-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
                <p className="text-sm text-gray-300 mb-2">{proj.description}</p>
                <p className="text-xs text-gray-400 mb-1">
                  Arquitectura: {proj.architecture}
                </p>
                <p className="text-xs text-gray-400 mb-1">
                  Rendimiento: {proj.performance}
                </p>
                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                  {proj.techStack.map((tech, i) => {
                    const Icon = techIcons[tech] || null;
                    return (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-gray-100 text-xs rounded flex items-center gap-1"
                      >
                        {Icon}
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="flex gap-4 text-sm">
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <FaGithub className="inline-block mr-1" />
                    GitHub
                  </a>
                  {proj.demoLink && (
                    <a
                      href={proj.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function OpenSourceSection() {
  const contributions: Contribution[] = [
    {
      projectName: "React",
      description: "Aportaciones al core y documentación.",
      link: "https://github.com/facebook/react",
    },
    {
      projectName: "TailwindCSS",
      description: "Reportes de bugs y mejoras en la documentación.",
      link: "https://github.com/tailwindlabs/tailwindcss",
    },
    {
      projectName: "Next.js",
      description: "Mejoras en la documentación y correcciones de código.",
      link: "https://github.com/vercel/next.js",
    },
    {
      projectName: "Node.js",
      description: "Reportes de vulnerabilidades y mejoras en el core.",
      link: "",
    },
  ];

  return (
    <section
      id="opensource"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 z-10"
      >
        Contribuciones Open Source
      </motion.h3>

      <ul className="relative space-y-6 max-w-5xl w-full px-4 z-10">
        {contributions.map((c, i) => (
          <li key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg text-gray-200 shadow-lg hover:bg-gray-700 transition-all"
            >
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-purple-400 text-2xl" />
                <h4 className="font-bold text-lg">{c.projectName}</h4>
              </div>
              <p className="text-gray-300 mb-2">{c.description}</p>
              <a
                className="text-blue-400 hover:underline flex items-center gap-1"
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
            </motion.div>
          </li>
        ))}
      </ul>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
}
function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      title: "Cómo manejar el estado en aplicaciones grandes de React",
      excerpt:
        "Redux, Recoil, MobX... exploramos diferentes soluciones y sus casos de uso.",
      link: "https://mi-blog.com/estado-en-react",
    },
    {
      title: "10 consejos para optimizar tu API Node.js",
      excerpt:
        "Descubre técnicas para reducir tiempos de respuesta y mejorar escalabilidad.",
      link: "https://mi-blog.com/optimizacion-node",
    },
    {
      title: "Guía completa de CSS Grid y Flexbox",
      excerpt:
        "Aprende a construir layouts modernos con ejemplos prácticos y casos de uso.",
      link: "https://mi-blog.com/css-grid-flexbox",
    },
  ];

  return (
    <section
      id="blog"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 z-10"
      >
        Blog Técnico
      </motion.h3>

      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4 z-10">
        {blogPosts.map((post, index) => (
          <motion.a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="block bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition-colors transform hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaHeart className="text-pink-400 text-xl" />
              <h4 className="text-xl font-bold text-gray-100">{post.title}</h4>
            </div>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex items-center text-pink-400 font-semibold">
              Leer más
              <FaExternalLinkAlt className="ml-2 text-sm" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative flex-1 max-w-2xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-sm uppercase tracking-wider text-blue-400 mb-4">
            Bienvenido a mi portfolio
          </h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            <Typewriter
              options={{
                strings: ["Hola, soy Irina", "Desarrolladora Fullstack "],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
          >
            Desarrolladora fullstack en constante aprendizaje y adaptación a las
            últimas tendencias. Mi objetivo es crear aplicaciones funcionales,
            intuitivas y fáciles de usar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-x-4"
          >
            <motion.a
              href="/IrinaCV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Descargar CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-gray-700/25 transition-all duration-300"
            >
              Contactar
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 slow-pulse"></div>
        <motion.img
          src="./developer.jpg"
          alt="Perfil"
          className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/10 draggable-image"
          whileHover={{
            scale: 1.05,
            rotate: 5,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 10,
            },
          }}
          drag
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
}

export default function PortfolioMinimalist() {
  const [darkMode] = useState(true);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const testimonials = [
    {
      quote:
        "Trabajar con Irina fue una experiencia increíble. Su código es impecable.",
      name: "Ana López",
      position: "CTO en TechX",
      image: "./ana.jpg",
    },
    {
      quote:
        "Tiene una habilidad única para resolver problemas de manera eficiente.",
      name: "Carlos Gómez",
      position: "Software Engineer en DevCorp",
      image: "./carlos.jpg",
    },
    {
      quote: "Siempre busca la mejor solución con código limpio y escalable.",
      name: "Laura Sánchez",
      position: "Lead Developer en StartUp",
      image: "./laura.jpg",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      } min-h-screen w-full flex flex-col items-center transition-colors duration-300`}
    >
      <nav className="sticky top-0 w-full bg-gray-800/60 backdrop-blur-sm p-4 flex justify-center gap-6 z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-blue-400 transition-colors"
        >
          Sobre mí
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="hover:text-green-400 transition-colors"
        >
          Experiencia Laboral
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-green-400 transition-colors"
        >
          Proyectos
        </button>
        <button
          onClick={() => scrollToSection("opensource")}
          className="hover:text-purple-400 transition-colors"
        >
          Open Source
        </button>
        <button
          onClick={() => scrollToSection("playground")}
          className="hover:text-green-300 transition-colors"
        >
          Playground
        </button>
        <button
          onClick={() => scrollToSection("certificados")}
          className="hover:text-pink-400 transition-colors"
        >
          Certificados
        </button>
        <button
          onClick={() => scrollToSection("blog")}
          className="hover:text-pink-400 transition-colors"
        >
          Blog
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-red-400 transition-colors"
        >
          Contacto
        </button>
      </nav>

      <HeroSection />

      <ExperienceSection />
      <ProjectsSection />

      <TerminalSection />
      <PlaygroundSection />
      <OpenSourceSection />
      <CertificatesSection />
      <BlogSection />

      <section className="mt-16 w-full max-w-4xl px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Lo que dicen de mí
        </h3>
        <div className="relative">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <FaQuoteLeft className="text-4xl text-blue-400 mb-4" />
            <p className="text-lg mb-4">
              {testimonials[currentTestimonial].quote}
            </p>
            <div className="flex items-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-400">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="mt-12 text-center mb-20">
        <h3 className="text-2xl font-semibold mb-4">Contacto</h3>
        <p className="mb-4">
          Si quieres colaborar o tienes alguna pregunta, ¡contáctame!
        </p>
        <div className="flex gap-6 justify-center mt-4 text-3xl">
          <a
            href="https://github.com/Irina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:scale-110 transition-transform"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/Irina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:scale-110 transition-transform"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:irina@example.com"
            className="text-red-500 hover:scale-110 transition-transform"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
}
