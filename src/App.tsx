import {
  ArrowRight,
  Code2,
  Github,
  Layout,
  Palette,
  Sparkles,
  Star,
} from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Navbar from "./components/Navbar";
import PortfolioCreative from "./features/PortfolioCreativo/page/PortfolioCreativo";
import PortfolioModerno from "./features/PotfolioModerno/page/PortfolioModerno";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moderno" element={<PortfolioModerno />} />
          <Route path="/creative" element={<PortfolioCreative />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "100% Personalizable",
      description: "Adapta cada portafolio a tu estilo y necesidades",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Animaciones Modernas",
      description: "Efectos visuales suaves y profesionales",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Mejores Prácticas",
      description: "Código limpio y optimizado para rendimiento",
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "Lucide Icons",
  ];

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block mt-6 mb-3 px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            v1.0.0 Beta
          </span>

          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            <Typewriter
              options={{
                strings: ["CodersPortfolio", "Portafolios para Programadoras"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Una colección de portafolios modernos y profesionales diseñados
            específicamente para programadoras full-stack que quieren destacar
            en el mundo tech.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/moderno"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium shadow-lg hover:bg-blue-700 transition-all"
              >
                <Layout className="mr-2 h-5 w-5" />
                Versión Moderna
              </a>
              <a
                href="/creative"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg text-lg font-medium shadow-lg hover:bg-purple-700 transition-all"
              >
                <Palette className="mr-2 h-5 w-5" />
                Versión Creativa
              </a>
            </div>

            <a
              href="https://github.com/femcodersclub/CodersPortfolio.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all"
            >
              <Github className="mr-2 h-5 w-5" />
              Contribuir en GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-16 p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">
              <a
                href="https://www.femcodersclub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors"
              >
                ¡Únete a femCoders Club!
              </a>
            </h2>

            <p className="text-lg text-gray-600">
              Invitamos a toda la comunidad de <strong>femCoders Club</strong> a
              colaborar en este proyecto. Haz un <strong>pull request</strong> y
              comparte tus ideas para hacer estos portafolios aún mejores.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
