import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: <Linkedin />, href: 'https://www.linkedin.com/in/francisco-frascona/', name: 'LinkedIn' },
  { icon: <Github />, href: 'https://github.com/franciscofrask', name: 'GitHub' },
  { icon: <Mail />, href: 'mailto:franciscofrascona@gmail.com', name: 'Email' },
];

const Footer = () => {
  return (
    <footer id="social" className="bg-background border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {React.cloneElement(link.icon, { size: 24 })}
            </a>
          ))}
        </div>
        <p className="text-muted-foreground">
          ©2025 Francisco Frascona.
        </p>
        <p className="text-muted-foreground/70 text-sm mt-2">
          Desarrollado con React, Tailwind y CSS 
        </p>
      </div>
    </footer>
  );
};

export default Footer;