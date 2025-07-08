import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="sobre-mi" className="section-padding px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Sobre mí
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <img
                className="w-full h-96 object-cover rounded-xl"
                alt="Francisco Frascona - Desarrollador Web"
                src="/public/images/francisco.png"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Soy un desarrollador web apasionado por crear soluciones digitales
              innovadoras y eficientes. Con experiencia en el desarrollo full
              stack, me especializo en construir aplicaciones web modernas que
              combinan funcionalidad excepcional con diseños atractivos.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mi stack tecnológico incluye{" "}
              <span className="text-blue-400 font-semibold">React</span>,
              <span className="text-blue-400 font-semibold"> Next.js</span>,
              <span className="text-blue-400 font-semibold"> JavaScript</span>,
              <span className="text-blue-400 font-semibold"> Node.js</span> y
              <span className="text-blue-400 font-semibold"> MySQL</span>. Me
              mantengo constantemente actualizado con las últimas tendencias y
              mejores prácticas del desarrollo web.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Me gusta trabajar en equipo, resolver problemas complejos y crear
              soluciones digitales con impacto real. Me adapto rápido a nuevos
              entornos y busco siempre mejorar mis habilidades, tanto técnicas
              como humanas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
