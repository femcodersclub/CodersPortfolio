import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaDocker } from "react-icons/fa";

interface Certificate {
  title: string;
  image: string;
  link: string;
  icon: JSX.Element;
}

const certificates: Certificate[] = [
  {
    title: "Certificado en React Avanzado",
    image: "src/assets/react-certificado.webp",
    link: "https://mi-certificado.com/react",
    icon: <FaReact className="text-blue-400 text-3xl" />,
  },
  {
    title: "Certificado en Node.js y Express",
    image: "src/assets/node-certificado.webp",
    link: "https://mi-certificado.com/node",
    icon: <FaNodeJs className="text-green-400 text-3xl" />,
  },
  {
    title: "Certificado en Bases de Datos SQL",
    image: "src/assets/sql-certificado.webp",
    link: "https://mi-certificado.com/sql",
    icon: <FaDatabase className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Certificado en Docker y Contenedores",
    image: "src/assets/docker-certificado.webp",
    link: "https://mi-certificado.com/docker",
    icon: <FaDocker className="text-blue-500 text-3xl" />,
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificados"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <h3 className="relative text-3xl font-semibold mb-12 text-center text-blue-400 z-10">
        Certificados
      </h3>

      <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl px-4 z-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 text-gray-200 rounded-lg overflow-hidden shadow-lg p-6 text-center flex flex-col items-center"
          >
            <div className="mb-4">{cert.icon}</div>
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-bold">{cert.title}</h4>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all"
            >
              Ver Certificado
            </a>
          </motion.div>
        ))}
      </div>

      {/* Línea de gradiente animada en la parte inferior */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
}
