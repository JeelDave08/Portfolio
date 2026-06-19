import { motion } from 'framer-motion';
import { Briefcase, Trophy, GraduationCap, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Full Stack Developer',
            company: 'Freelance / Personal Projects',
            date: 'Jan 2026 - Present',
            description: 'Developed and maintained various web applications including an AI Code Detector and a medical assistant platform. Specialized in React framework and modern backend technologies.',
            icon: <Briefcase size={20} className="text-white" />,
            color: 'bg-softBlue-600'
        },
        {
            title: 'PHP Developer Intern',
            company: 'Sharav Infotech Private Limited, Rajkot',
            date: 'July 2024 - Dec 2024',
            description: 'Trained in PHP, MySQL, and Laravel; built full-stack features independently. Developed and maintained 2 production websites using PHP and Laravel. Integrated MySQL databases for dynamic content management and data storage. Contributed to debugging, performance optimization, and code reviews.',
            icon: <Briefcase size={20} className="text-white" />,
            color: 'bg-emerald-600',
            certificate: {
                label: 'View PDF',
                link: '/certificates/phpinternship.pdf'
            }
        },
 

        {
            title: 'Bachelor of Computer Applications (BCA)',
            company: 'MVM College, Rajkot',
            date: '2022 - 2025',
            description: 'Completed BCA with coursework in software development, web technologies, database systems, and application management. Gained practical experience in PHP, ASP.NET, and MySQL projects.',
            icon: <GraduationCap size={20} className="text-white" />,
            color: 'bg-blue-700 dark:bg-blue-500'
        },

        {

            title: 'Master of Computer Applications (MCA)',
            company: 'Marwadi University',
            date: 'Jul 2025 - Present',
            description: 'Pursuing MCA with a focus on software development, AI integration, web technologies, and database management. Working on projects like AI-powered applications, full-stack systems, and backend APIs.',
            icon: <GraduationCap size={20} className="text-white" />,
            color: 'bg-blue-700 dark:bg-blue-500'

        },
      
    ];

    return (
        <section id="experience" className="py-24 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        Experience & Achievements
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex items-center justify-between flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >

                                {/* Timeline Icon */}
                                <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-slate-50 dark:border-darkBg flex items-center justify-center shadow-lg z-10 ${exp.color}`}>
                                    {exp.icon}
                                </div>

                                {/* Empty Space for alignment on Desktop */}
                                <div className="hidden md:block w-5/12"></div>

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                                    }`}>
                                    <div className="card p-6 border-t-4 border-t-softBlue-500 hover:-translate-y-2 transition-transform duration-300">
                                        <div className="flex items-center gap-2 mb-2 text-sm text-softBlue-600 dark:text-softBlue-400 font-medium justify-start md:justify-[inherit]">
                                            <Calendar size={16} />
                                            {exp.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{exp.title}</h3>
                                        <h4 className="text-md font-medium text-slate-500 dark:text-slate-400 mb-4">{exp.company}</h4>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                        {exp.certificate && (
                                            <a
                                                href={exp.certificate.link.trim()}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 mt-6 text-softBlue-600 dark:text-softBlue-400 font-medium hover:text-softBlue-700 dark:hover:text-softBlue-300 transition-colors"
                                            >
                                                {exp.certificate.label}
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
