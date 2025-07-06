import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiCss3, SiMantine, SiMysql, SiGit, SiGithub, SiFigma } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript className="h-16 w-16 text-yellow-400" /> },
  { name: 'React.js', icon: <SiReact className="h-16 w-16 text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="h-16 w-16 text-white" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="h-16 w-16 text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="h-16 w-16 text-white" /> },
  { name: 'CSS3', icon: <SiCss3 className="h-16 w-16 text-blue-600" /> },
  { name: 'Mantine UI', icon: <SiMantine className="h-16 w-16 text-violet-500" /> },
  { name: 'MySQL', icon: <SiMysql className="h-16 w-16 text-blue-400" /> },
  { name: 'Git', icon: <SiGit className="h-16 w-16 text-orange-500" /> },
  { name: 'GitHub', icon: <SiGithub className="h-16 w-16 text-white" /> },
  { name: 'Figma', icon: <SiFigma className="h-16 w-16 text-pink-500" /> },
];

const duplicatedSkills = [...skills, ...skills, ...skills];

const Skills = () => {
  return (
    <section id="habilidades" className="section-padding px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Habilidades Técnicas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones web excepcionales
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden py-4" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex skills-track">
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="flex-shrink-0 w-48 flex flex-col items-center justify-center p-4 group">
                <div className="h-16 w-16 transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="mt-4 text-lg font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
