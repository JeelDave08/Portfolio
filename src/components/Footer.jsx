import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-darkCard border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">

                {/* Social Links */}
                <div className="flex space-x-6 mb-8">
                    <a
                        href="https://github.com/JeelDave08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-softBlue-600 dark:text-slate-400 dark:hover:text-softBlue-400 transition-colors duration-300 transform hover:-translate-y-1"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jeel-dave-b9976935b/?originalSubdomain=in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-softBlue-600 dark:text-slate-400 dark:hover:text-softBlue-400 transition-colors duration-300 transform hover:-translate-y-1"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="mailto:jeeldave8@gmail.com"
                        className="text-slate-500 hover:text-softBlue-600 dark:text-slate-400 dark:hover:text-softBlue-400 transition-colors duration-300 transform hover:-translate-y-1"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-slate-600 dark:text-slate-300 font-medium">
                    <a href="#about" className="hover:text-softBlue-600 dark:hover:text-softBlue-400 transition-colors">About</a>
                    <a href="#projects" className="hover:text-softBlue-600 dark:hover:text-softBlue-400 transition-colors">Projects</a>
                    <a href="#experience" className="hover:text-softBlue-600 dark:hover:text-softBlue-400 transition-colors">Experience</a>
                    <a href="#certifications" className="hover:text-softBlue-600 dark:hover:text-softBlue-400 transition-colors">Certifications</a>
                    <a href="#contact" className="hover:text-softBlue-600 dark:hover:text-softBlue-400 transition-colors">Contact</a>
                </div>

                {/* Copyright */}
                <div className="text-center text-slate-500 dark:text-slate-400 text-sm flex flex-col items-center">
                  { /*  <p className="flex items-center gap-1 mb-2">
                        Built with <Heart size={16} className="text-red-500 animate-pulse" /> by Software Developer
                    </p> */ }
                    <p>&copy; {currentYear} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
