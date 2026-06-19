import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Leaf, Briefcase, Mic, FileText, Clapperboard } from 'lucide-react';
import { Package } from 'lucide-react';
import { Users } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
  

        {
            title: 'HRM Consultancy',
            description: 'HRM Consultancy is a responsive recruitment and staffing platform developed to connect hospitals, healthcare organizations, and medical professionals with efficient hiring and consultancy solutions.',
            imageIcon: <Users size={48} className="text-softBlue-500" />,
            tags: ['React', 'Vite', 'Node.js', 'Consultancy Website'],
            category: 'Web',
            githubLink: 'https://github.com/karanudani3011/HRM-',
            liveLink: 'https://myhrm.co.in/',
        },
        {
            title: 'Asset Management System',
            description: 'A web-based Asset Management System built over six months to monitor, track, and manage organizational assets such as machinery, electronic devices, and inventory with centralized asset details and streamlined record keeping.',
            imageIcon: <Package size={48} className="text-softBlue-500" />,
            tags: ['HTML', 'CSS', 'PHP', 'MySQL', 'Asset Management'],
            category: 'Web',
            githubLink: 'https://github.com/JeelDave08/asset-management',
            liveLink: null,
        },
        {
            title: 'Education Hub',
            description: 'A dynamic college information website with admin and client modules for student registration, syllabus details, canteen menu, faculty information, and campus facilities for efficient academic resource management.',
            imageIcon: <FileText size={48} className="text-softBlue-500" />,
            tags: ['ASP.NET', 'HTML', 'CSS', 'JavaScript', 'College Website'],
            category: 'Web',
            githubLink: 'https://github.com/JeelDave08/education-hub',
            liveLink: null,
        },

      

    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    const filters = ['All', 'Web', 'AI'];

    return (
        <section id="projects" className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        Featured Projects
                    </motion.h2>

                    {/* Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex justify-center gap-4 mt-8"
                    >
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === f
                                    ? 'bg-softBlue-600 text-white shadow-lg shadow-softBlue-500/30'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="card flex flex-col h-full group"
                            >
                                <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-softBlue-500/10 to-transparent"></div>

                                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                                        {project.imageIcon}
                                    </motion.div>

                                    <div className="absolute inset-0 bg-softBlue-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full">
                                            View Details
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                                    <p className="text-sm mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-softBlue-100 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex gap-2">
                                            <Github size={18} /> Code
                                        </a>

                                        {project.liveLink ? (
                                            <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex gap-2">
                                                Live <ExternalLink size={18} />
                                            </a>
                                        ) : (
                                            <span className="text-xs italic">GitHub Only</span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;