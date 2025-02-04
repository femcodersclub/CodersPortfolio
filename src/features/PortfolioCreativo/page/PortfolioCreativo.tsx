import { useState } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  BookOpen,
  Code,
  Download,
  Briefcase,
  Medal,
} from "lucide-react";

export default function PortfolioCreativo() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-black text-gray-100" : "bg-white text-gray-900"
      } overflow-x-hidden`}
    >
      <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-opacity-90 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <button onClick={toggleDarkMode} className="p-2 bg-gray-700 rounded">
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </nav>
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between p-12 overflow-hidden">
        <motion.div
          className="md:w-1/2 text-left"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold text-blue-400">Sobre Mí</h2>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            urna sit amet libero luctus, id tempus nisl tincidunt. Proin
            euismod, mauris ut tempus vehicula, felis libero condimentum eros,
            vitae vestibulum lacus lectus a sapien. Nullam ut semper nulla, nec
            pharetra tortor. Integer sed leo sed ex tincidunt varius at nec
            tortor.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="/cv.pdf"
              download
              className="relative px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex items-center space-x-2 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              <Download className="animate-bounce" />
              <span className="font-semibold">Descargar CV</span>
            </a>
            <a
              href="/carta-presentacion.pdf"
              download
              className="relative px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg flex items-center space-x-2 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              <Download className="animate-bounce" />
              <span className="font-semibold">Carta de Presentación</span>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
        >
          <div className="w-64 h-64 bg-gradient-to-r from-purple-500 to-blue-500 transform rotate-6 rounded-lg shadow-xl flex justify-center items-center">
            <img
              src="/mujer.webp"
              alt="Perfil"
              className="w-60 h-60 object-cover"
            />
          </div>
        </motion.div>
      </section>
      <section className="relative min-h-screen flex flex-col items-center justify-center p-22 overflow-hidden">
        <h2 className="text-5xl font-extrabold text-green-400 mb-10">
          Proyectos
        </h2>
        <p className="text-lg text-center max-w-3xl mb-6">
          Aquí muestro algunos de mis proyectos más destacados en desarrollo web
          y tecnología.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 mt-12">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            className="w-72 h-72 bg-gradient-to-r from-green-500 to-teal-500 transform rotate-6 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-4 text-center"
          >
            <img
              src="/proyecto.webp"
              alt="Proyecto 1"
              className="w-64 h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-white text-sm mb-10">
              Este proyecto muestra una interfaz futurista para gestión de
              datos.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-72 h-72 bg-gradient-to-r from-purple-500 to-blue-500 transform -rotate-6 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-4 text-center"
          >
            <img
              src="/proyecto1.webp"
              alt="Proyecto 2"
              className="w-64 h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-white text-sm mb-10">
              Desarrollo de software basado en IA para automatización de tareas
              inteligentes.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-72 h-72 bg-gradient-to-r from-yellow-500 to-orange-500 transform rotate-6 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-4 text-center"
          >
            <img
              src="/proyecto2.webp"
              alt="Proyecto 3"
              className="w-64 h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-white text-sm mb-10">
              Aplicación web innovadora con dashboard interactivo y análisis de
              datos.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="relative min-h-screen flex flex-col items-center justify-center p-12 overflow-hidden">
        <h2 className="text-5xl font-extrabold text-yellow-400 mb-8">
          Experiencia Laboral
        </h2>
        <p className="text-lg text-center max-w-3xl mb-12">
          Mi trayectoria profesional en tecnología y desarrollo de software.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            className="w-80 bg-gradient-to-r from-yellow-500 to-orange-500 transform rotate-3 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-6 text-center"
          >
            <Briefcase className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Desarrolladora Fullstack
            </h3>
            <p className="text-white text-sm">
              Trabajé en el desarrollo de aplicaciones web con React, Node.js y
              bases de datos SQL y NoSQL.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-80 bg-gradient-to-r from-yellow-500 to-orange-500 transform -rotate-3 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-6 text-center"
          >
            <Briefcase className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Ingeniera de Software
            </h3>
            <p className="text-white text-sm">
              Colaboré en la optimización de código y desarrollo de
              microservicios escalables.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-80 bg-gradient-to-r from-yellow-500 to-orange-500 transform rotate-3 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-6 text-center"
          >
            <Briefcase className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Consultora Tecnológico
            </h3>
            <p className="text-white text-sm">
              Asesoré a empresas en la adopción de tecnologías modernas y
              desarrollo de estrategias digitales.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="relative min-h-screen flex flex-col items-center justify-center p-12 overflow-hidden">
        <h2 className="text-5xl font-extrabold text-purple-400 mb-8">
          Certificados
        </h2>
        <p className="text-lg text-center max-w-3xl mb-12">
          Certificaciones obtenidas en desarrollo y tecnología.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 overflow-x-auto p-4">
          <motion.div
            whileInView={{ opacity: 1, rotateY: 0 }}
            initial={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 1 }}
            className="w-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-6 text-center border-4 border-blue-300"
          >
            <Medal className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Fullstack Web Development
            </h3>
            <p className="text-white text-sm">
              Certificado en desarrollo web completo con tecnologías modernas.
            </p>
            <a
              href="#"
              className="mt-4 px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-200 transition"
            >
              Ver certificado
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, rotateY: 0 }}
            initial={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-80 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-6 text-center border-4 border-violet-300"
          >
            <Medal className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Certificación en TypeScript
            </h3>
            <p className="text-white text-sm">
              Dominio del lenguaje TypeScript aplicado a proyectos reales.
            </p>
            <a
              href="#"
              className="mt-4 px-4 py-2 bg-white text-purple-500 rounded-lg hover:bg-gray-200 transition"
            >
              Ver certificado
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, rotateY: 0 }}
            initial={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-80 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-6 text-center border-4 border-pink-300"
          >
            <Medal className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Cloud Computing
            </h3>
            <p className="text-white text-sm">
              Certificación en infraestructura en la nube con AWS y Google
              Cloud.
            </p>
            <a
              href="#"
              className="mt-4 px-4 py-2 bg-white text-pink-500 rounded-lg hover:bg-gray-200 transition"
            >
              Ver certificado
            </a>
          </motion.div>
        </div>
      </section>
      <section className="relative min-h-screen flex flex-col items-center justify-center p-12 overflow-hidden">
        <h2 className="text-5xl font-extrabold text-purple-400 mb-8">
          Blog Técnico
        </h2>
        <p className="text-lg text-center max-w-3xl mb-12">
          Publicaciones y artículos sobre desarrollo web y programación.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            className="w-80 bg-gradient-to-r from-purple-500 to-blue-500 transform rotate-3 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-6 text-center"
          >
            <BookOpen className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Optimización en React
            </h3>
            <p className="text-white text-sm">
              Cómo mejorar el rendimiento de aplicaciones React con técnicas
              avanzadas.
            </p>
            <a
              href="#"
              className="mt-4 px-4 py-2 bg-white text-purple-500 rounded-lg hover:bg-gray-200 transition"
            >
              Leer más
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-80 bg-gradient-to-r from-purple-500 to-blue-500 transform -rotate-3 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-6 text-center"
          >
            <BookOpen className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Introducción a TypeScript
            </h3>
            <p className="text-white text-sm">
              Descubre los beneficios de TypeScript y cómo aplicarlo en
              proyectos modernos.
            </p>
            <a
              href="#"
              className="mt-4 px-4 py-2 bg-white text-purple-500 rounded-lg hover:bg-gray-200 transition"
            >
              Leer más
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-80 bg-gradient-to-r from-purple-500 to-blue-500 transform rotate-3 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-6 text-center"
          >
            <BookOpen className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Mejorando el Backend con Node.js
            </h3>
            <p className="text-white text-sm">
              Buenas prácticas y optimización de servidores en Node.js.
            </p>
            <a
              href="#"
              className="mt-4 px-4 py-2 bg-white text-purple-500 rounded-lg hover:bg-gray-200 transition"
            >
              Leer más
            </a>
          </motion.div>
        </div>
      </section>
      {/* Open Source */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-32 overflow-hidden">
        <h2 className="text-5xl font-extrabold text-green-400 mb-8">
          Open Source
        </h2>
        <p className="text-lg text-center max-w-3xl mb-12">
          Contribuciones a proyectos de código abierto.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
          <motion.div
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            className="w-80 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-6 text-center"
          >
            <Code className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Contribución a React
            </h3>
            <p className="text-white text-sm">
              Mejoras en la documentación y correcciones en el core.
            </p>
            <a
              href="#"
              className="mt-4 px-4 py-2 bg-white text-green-500 rounded-lg hover:bg-gray-200 transition"
            >
              Ver más
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-80 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-all p-6 text-center"
          >
            <Code className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white">
              Contribución a Node.js
            </h3>
            <p className="text-white text-sm">
              Optimización de rendimiento y mejoras en la gestión de eventos.
            </p>
            <a
              href="#"
              className="mt-4 px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-200 transition"
            >
              Ver más
            </a>
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-screen flex flex-col items-center justify-center p-12 overflow-hidden">
        <h2 className="text-5xl font-extrabold text-red-400 mb-8">Contacto</h2>
        <p className="text-lg text-center max-w-3xl mb-12">
          ¡Ponte en contacto conmigo para colaboraciones o consultas!
        </p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl border border-gray-200/20 space-y-4"
        >
          <div>
            <label
              htmlFor="nombre"
              className="block text-lg font-semibold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300 bg-gray-100 text-gray-800"
              placeholder="Ej. Irina"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300 bg-gray-100 text-gray-800"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-lg font-semibold mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              className="w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300 bg-gray-100 text-gray-800"
              rows={4}
              placeholder="¿En qué puedo ayudarte?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-lg transition-transform hover:scale-105 shadow-md"
          >
            Enviar
          </button>
        </motion.form>
        <p className="text-center mt-6 text-lg">
          También puedes encontrarme en mis redes sociales. ¡Hablemos!
        </p>
        <div className="flex gap-6 text-3xl mt-12">
          <a
            href="#"
            className="text-blue-400 hover:scale-110 transition-transform"
            title="GitHub"
          >
            <Github />
          </a>
          <a
            href="#"
            className="text-blue-500 hover:scale-110 transition-transform"
            title="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="#"
            className="text-red-500 hover:scale-110 transition-transform"
            title="Email"
          >
            <Mail />
          </a>
        </div>
      </section>
    </div>
  );
}
