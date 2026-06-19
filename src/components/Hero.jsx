import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-softBlue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-softBlue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute -bottom-8 left-40 w-72 h-72 bg-softBlue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-softBlue-50 dark:bg-softBlue-900/40 text-softBlue-600 dark:text-softBlue-300 font-medium text-sm mb-6 border border-softBlue-200 dark:border-softBlue-800"
                        >
                            Available for new opportunities
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-softBlue-600 to-softBlue-400 dark:from-softBlue-400 dark:to-softBlue-200">
                                Software Developer
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            Passionate Full Stack Developer specializing in building modern web applications
                            and AI integrations. Let's create something amazing together.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <a href="#projects" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="https://drive.google.com/file/d/19GbbRpk24iBXtUOj5duDPG6qzvqgxMfo/view?usp=sharing" download className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 group " target='_blank'>
                                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                                Resume
                            </a>
                            <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300 hover:text-softBlue-600 dark:hover:text-softBlue-400 font-medium transition-colors px-6 py-2.5">
                                <Mail size={18} />
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Avatar/Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex-1 flex justify-center md:justify-end relative"
                    >
                        <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
                            {/* Outer Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-softBlue-600 to-softBlue-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-darkBg shadow-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                {/* Placeholder for actual photo, using geometric shape for now */}
                                <div className="text-9xl"> 👩‍💻</div>

                                {/* Optional: Add actual image path below when available */}
                                { /*<img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                            </div>

                            {/* Decorative badges */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 -left-6 bg-white dark:bg-darkCard p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
                            >
                                <span className="text-3xl">🚀</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -right-6 bg-white dark:bg-darkCard p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
                            >
                                <span className="text-3xl">💻</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer hidden md:flex"
                >
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2 tracking-widest uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <ChevronDown className="text-softBlue-500" size={24} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
